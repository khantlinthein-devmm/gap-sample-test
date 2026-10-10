import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Button, Input, Select, Upload, Progress, Collapse, Empty, Space, Typography,
  Popconfirm, ConfigProvider, message, AutoComplete, theme as antTheme,
} from 'antd'
import {
  UploadOutlined, DownloadOutlined, DeleteOutlined, ClockCircleOutlined, FilePdfOutlined,
  PlusOutlined, EyeOutlined, CheckCircleOutlined, ArrowLeftOutlined, RedoOutlined,
} from '@ant-design/icons'
import { DEFAULT_QUESTIONS } from './data/questions.js'
import { MOCK_QUESTIONS, BLOCKS, QUANT_OPTIONS, SUFF_OPTIONS } from './data/mock-questions.js'
import { MOCK_SETS } from './data/sets/index.js'
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import { putPdf, getPdf, delPdf } from './lib/pdfdb.js'

const { Text, Paragraph } = Typography

const STORE_KEY = 'gap_questions_v1'
const BEST_KEY = 'gap_best'
const LIB_KEY = 'gap_library_v1'
const PDF_META_KEY = 'gap_library_pdfmeta'
const PDF_SIZE_LIMIT = 30 * 1024 * 1024

function loadJson(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback } catch { return fallback }
}
function saveJson(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* storage unavailable */ }
}

/* Follows the viewer's theme: explicit data-theme wins, otherwise the OS setting. */
function useDarkMode() {
  const read = () => {
    const t = document.documentElement.dataset.theme
    if (t) return t === 'dark'
    return !!window.matchMedia?.('(prefers-color-scheme: dark)').matches
  }
  const [dark, setDark] = useState(read)
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    const on = () => setDark(read())
    mq?.addEventListener?.('change', on)
    const mo = new MutationObserver(on)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => { mq?.removeEventListener?.('change', on); mo.disconnect() }
  }, [])
  return dark
}

/* Detects "stem (A) opt1 (B) opt2 ..." + "Answer: B ..." and makes it interactive */
function parseChoices(item) {
  const parts = String(item.q).split(/\(([A-E])\)\s*/)
  if (parts.length < 5) return null
  const stem = parts[0].trim()
  const options = []
  for (let k = 1; k + 1 < parts.length; k += 2) options.push(parts[k + 1].trim())
  if (!stem || options.length < 2) return null
  const m = String(item.a).match(/answer:\s*([A-E])/i)
  if (!m) return null
  const correct = m[1].toUpperCase().charCodeAt(0) - 65
  if (correct < 0 || correct >= options.length) return null
  return { stem, options, correct }
}

function PageHead({ title, children }) {
  return (
    <div className="page-head">
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </div>
  )
}

/* ---------------- Shared question pieces ---------------- */

function Options({ q, selected, onPick, review, name, offset = 0 }) {
  return (
    <div className="opts" role="radiogroup">
      {q.options.map((o, j) => {
        const isSel = selected === j
        const isRight = review && j === q.answer
        const isWrongPick = review && isSel && j !== q.answer
        return (
          <label key={j} className={'opt' + (isSel ? ' selected' : '') + (isRight ? ' correct' : '') + (isWrongPick ? ' wrongpick' : '') + (review ? ' review' : '')}>
            {!review && <input type="radio" name={name || 'q' + q.q} checked={isSel} onChange={onPick(j)} />}
            <span className="opt-key">{String.fromCharCode(65 + offset + j)}</span>
            <span className="opt-text">{o}</span>
          </label>
        )
      })}
    </div>
  )
}

const letter = i => String.fromCharCode(65 + i)

function getOpts(q) {
  if (q.template === 'quant') return QUANT_OPTIONS
  if (q.template === 'suff') return SUFF_OPTIONS
  return q.options
}

const CHART_DASH = ['', '6 4', '2 3', '10 3 2 3']
const chartColor = i => `var(--c${(i % 4) + 1})`

function Chart({ c }) {
  const W = 640, H = 300, L = 54, R = 16, T = 34, B = 40
  const pw = W - L - R, ph = H - T - B
  const y = v => T + ph - (v / c.yMax) * ph
  const ticks = []
  for (let v = 0; v <= c.yMax; v += c.yStep) ticks.push(v)
  const slot = pw / c.xLabels.length
  const xc = i => L + slot * (i + 0.5)
  const bw = Math.min(28, (slot * 0.8) / c.series.length)
  return (
    <figure className="chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={c.title}>
        <text x={W / 2} y={18} textAnchor="middle" className="chart-title">{c.title}</text>
        {ticks.map(v => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} className="chart-grid" />
            <text x={L - 8} y={y(v) + 4} textAnchor="end" className="chart-tick">{v}</text>
          </g>
        ))}
        <text transform={`translate(14 ${T + ph / 2}) rotate(-90)`} textAnchor="middle" className="chart-tick">{c.yLabel}</text>
        {c.xLabels.map((l, i) => <text key={l} x={xc(i)} y={H - B + 18} textAnchor="middle" className="chart-tick">{l}</text>)}
        {c.type === 'bar'
          ? c.series.map((s, si) => s.values.map((v, i) => (
              <rect key={si + '-' + i} x={xc(i) - (bw * c.series.length) / 2 + si * bw} y={y(v)} width={bw - 2} height={T + ph - y(v)} style={{ fill: chartColor(si) }} />
            )))
          : c.series.map((s, si) => (
              <g key={s.name}>
                <polyline style={{ fill: 'none', stroke: chartColor(si) }} strokeWidth="2.5" strokeDasharray={CHART_DASH[si % 4]}
                  points={s.values.map((v, i) => `${xc(i)},${y(v)}`).join(' ')} />
                {s.values.map((v, i) => <circle key={i} cx={xc(i)} cy={y(v)} r="4.5" style={{ fill: chartColor(si) }} />)}
              </g>
            ))}
        <line x1={L} x2={W - R} y1={T + ph} y2={T + ph} className="chart-axis" />
      </svg>
      <figcaption className="chart-legend">
        {c.series.map((s, si) => <span key={s.name}><i style={{ background: chartColor(si) }} />{s.name}</span>)}
      </figcaption>
    </figure>
  )
}

function DataTable({ t }) {
  return (
    <div className="dtable-wrap">
      <table className="dtable">
        <thead><tr>{t.head.map(h => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{t.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  )
}

function Stimulus({ b }) {
  if (!b || (!b.stimulus && !b.chart && !b.table)) return null
  return (
    <div className="stimulus">
      {b.stimulus && <div className="stimulus-text">{b.stimulus}</div>}
      {b.chart && <Chart c={b.chart} />}
      {b.table && <DataTable t={b.table} />}
    </div>
  )
}

function Underlined({ text, word }) {
  const i = word ? text.indexOf(word) : -1
  if (i < 0) return text
  return <>{text.slice(0, i)}<u>{word}</u>{text.slice(i + word.length)}</>
}

/* ---------------- Question bank ---------------- */

function Archive() {
  const [mine, setMine] = useState(() => loadJson(STORE_KEY, []))
  const [term, setTerm] = useState('')
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState({})
  const [picked, setPicked] = useState({})
  const [checked, setChecked] = useState({})
  const [fCat, setFCat] = useState('')
  const [fQ, setFQ] = useState('')
  const [fA, setFA] = useState('')

  useEffect(() => { saveJson(STORE_KEY, mine) }, [mine])

  const all = useMemo(
    () => [...mine.map(x => ({ ...x, mine: true })), ...DEFAULT_QUESTIONS.map(x => ({ ...x, mine: false }))],
    [mine]
  )
  const cats = useMemo(() => ['All', ...[...new Set(all.map(x => x.category))].sort()], [all])
  const items = all.filter(x =>
    (cat === 'All' || x.category === cat) &&
    (!term.trim() || (x.q + ' ' + x.a).toLowerCase().includes(term.trim().toLowerCase()))
  )

  const submit = () => {
    if (!fCat.trim() || !fQ.trim() || !fA.trim()) return
    setMine(m => [{ category: fCat.trim(), q: fQ.trim(), a: fA.trim(), at: Date.now() }, ...m])
    setFCat(''); setFQ(''); setFA(''); setCat('All'); setTerm('')
    message.success('Question saved')
  }
  const exportJson = () => {
    const blob = new Blob([JSON.stringify(all, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob); a.download = 'gap-questions.json'; a.click()
  }

  const addForm = (
    <div className="stack">
      <Paragraph className="hint">
        Saved in this browser only. Write choices as (A) … (B) … (C) … and start the answer with “Answer: B” to turn it into a quiz card.
      </Paragraph>
      <label className="field">
        <span>Category</span>
        <AutoComplete id="add-cat" value={fCat} onChange={setFCat} placeholder="e.g. GAP Verbal"
          options={cats.filter(c => c !== 'All').map(c => ({ value: c }))} />
      </label>
      <label className="field">
        <span>Question</span>
        <Input.TextArea id="add-q" value={fQ} onChange={e => setFQ(e.target.value)} rows={2} maxLength={500} showCount />
      </label>
      <label className="field">
        <span>Answer</span>
        <Input.TextArea id="add-a" value={fA} onChange={e => setFA(e.target.value)} rows={3} maxLength={2000} showCount />
      </label>
      <Space wrap>
        <Button type="primary" icon={<PlusOutlined />} onClick={submit}>Save question</Button>
        <Button icon={<DownloadOutlined />} onClick={exportJson}>Export all as JSON</Button>
        <Popconfirm title="Delete every question you added on this device?" onConfirm={() => { setMine([]); message.success('Your questions were deleted') }}>
          <Button danger icon={<DeleteOutlined />}>Delete mine</Button>
        </Popconfirm>
      </Space>
    </div>
  )

  return (
    <div className="stack-lg">
      <PageHead title="Question bank">Short drills by task type. Pick an answer, then check it.</PageHead>

      <div className="toolbar">
        <Input.Search id="bank-search" placeholder="Search questions and answers" allowClear size="large" value={term} onChange={e => setTerm(e.target.value)} />
        <div className="chips" role="tablist" aria-label="Category">
          {cats.map(c => (
            <button key={c} type="button" role="tab" aria-selected={c === cat} className={'chip' + (c === cat ? ' on' : '')} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="meta">{items.length} shown · {all.length} total · {mine.length} added by you</div>
      </div>

      <Collapse className="panel" items={[{ key: 'add', label: 'Add your own question', children: addForm }]} />

      {!items.length && <Empty description="No questions match this search" />}
      <div className="stack">
        {items.map((it, i) => {
          const key = it.category + '|' + it.q
          const mc = parseChoices(it)
          const retry = () => {
            setChecked(c => { const n = { ...c }; delete n[key]; return n })
            setPicked(p => { const n = { ...p }; delete n[key]; return n })
          }
          return (
            <article key={key} className="qcard">
              <header className="qcard-head">
                <span className="qnum">{i + 1}</span>
                <span className="tag">{it.category}</span>
                {it.mine && <span className="tag soft">added by you</span>}
                {it.mine && (
                  <Popconfirm title="Delete this question?" onConfirm={() => setMine(m => m.filter(mq => !(mq.q === it.q && mq.a === it.a)))}>
                    <Button type="text" danger size="small" icon={<DeleteOutlined />} aria-label="Delete question" className="push" />
                  </Popconfirm>
                )}
              </header>
              {mc ? (
                <>
                  <p className="qstem">{mc.stem}</p>
                  <Options q={{ q: key, options: mc.options, answer: mc.correct }} selected={picked[key]} onPick={(j) => () => setPicked(p => ({ ...p, [key]: j }))} review={!!checked[key]} name={'arch-' + i} />
                  {!checked[key] ? (
                    <div className="actions">
                      <Button type="primary" disabled={picked[key] === undefined} onClick={() => setChecked(c => ({ ...c, [key]: true }))}>Check answer</Button>
                    </div>
                  ) : (
                    <>
                      <div className={'explain ' + (picked[key] === mc.correct ? 'good' : 'bad')}>
                        <strong>{picked[key] === mc.correct ? <><CheckCircleOutlined /> Correct.</> : 'Not quite.'}</strong> {it.a}
                      </div>
                      <div className="actions"><Button onClick={retry} icon={<RedoOutlined />}>Try again</Button></div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <p className="qstem">{it.q}</p>
                  {open[key] && <div className="explain">{it.a}</div>}
                  <div className="actions">
                    <Button onClick={() => setOpen(o => ({ ...o, [key]: !o[key] }))}>{open[key] ? 'Hide answer' : 'Show answer'}</Button>
                  </div>
                </>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}

/* ---------------- Practice tests ---------------- */

function blocksFor(setId) {
  const set = MOCK_SETS.find(s => s.id === setId)
  if (!set) return BLOCKS
  const out = {}
  for (const k of Object.keys(BLOCKS)) {
    const { stimulus: _bankStimulus, ...base } = BLOCKS[k]
    out[k] = { ...base, ...(set.blocks[k] || {}) }
  }
  return out
}

function pickQuestions(setId, section, n, order) {
  const set = MOCK_SETS.find(s => s.id === setId)
  const pool = (set ? set.questions : MOCK_QUESTIONS).filter(q =>
    section === 'All' ? true : section === 'GAP' ? q.section.startsWith('GAP') : q.section === section)
  const list = order === 'real' ? pool : [...pool].sort(() => Math.random() - 0.5)
  return list.slice(0, Math.min(n, pool.length))
}
const fmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0')
const bestKey = id => BEST_KEY + '_' + id
const setLabel = id => (MOCK_SETS.find(s => s.id === id) || { title: 'Mixed bank' }).title

function isAnswered(q, i, answers) {
  return answers[i] !== undefined || (q.optionsB && answers[i + 'b'] !== undefined)
}

function TestItem({ q, num, answers, setAnswers, review, showStimulus, blocks }) {
  const i = num - 1
  const selA = answers[i]
  const selB = answers[i + 'b']
  const okA = selA !== undefined && selA === q.answer
  const okB = !q.optionsB || (selB !== undefined && selB === q.answerB)
  const blank = selA === undefined && selB === undefined
  const state = review ? (blank ? 'blank' : okA && okB ? 'good' : 'bad') : ''
  const pick = key => j => () => setAnswers(a => ({ ...a, [key]: j }))
  const noop = () => () => {}
  return (
    <article className={'qcard ' + state} id={'q-' + num}>
      <header className="qcard-head">
        <h3>Question {num}</h3>
        {review && <span className={'status ' + state}>{blank ? 'Blank' : okA && okB ? 'Correct' : 'Wrong'}</span>}
      </header>
      {showStimulus && <Stimulus b={blocks[q.block]} />}
      {q.text && <div className="passage">{q.text}</div>}
      {q.left !== undefined && (
        <div className="compare">
          <div><span>Left</span>{q.left}</div>
          <div><span>Right</span>{q.right}</div>
        </div>
      )}
      {q.q && <p className="qstem"><Underlined text={q.q} word={q.word} /></p>}
      {q.template === 'suff' && (
        <div className="statements">
          <p><b>Statement (1)</b> {q.s1}</p>
          <p><b>Statement (2)</b> {q.s2}</p>
        </div>
      )}
      {q.optionsB && <div className="optlabel">synonym:</div>}
      <Options q={{ q: 't' + num, options: getOpts(q), answer: q.answer }} selected={selA} onPick={review ? noop : pick(i)} review={review} name={'t' + num} />
      {q.optionsB && (
        <>
          <div className="optlabel">antonym:</div>
          <Options q={{ q: 'tb' + num, options: q.optionsB, answer: q.answerB }} selected={selB} onPick={review ? noop : pick(i + 'b')} review={review} name={'t' + num + 'b'} offset={4} />
        </>
      )}
      {review && (
        <div className={'explain ' + state}>
          <strong>{q.optionsB ? `Synonym ${letter(q.answer)}, antonym ${letter(4 + q.answerB)}.` : `Answer ${letter(q.answer)}.`}</strong> {q.explain}
        </div>
      )}
    </article>
  )
}

const SECTION_OPTS = [
  { value: 'All', label: 'All sections' },
  { value: 'GAP', label: 'GAP only' },
  { value: 'GAP Verbal', label: 'Verbal' },
  { value: 'GAP Analytical', label: 'Analytical' },
  { value: 'English', label: 'English (mixed bank)' },
  { value: 'Math', label: 'Math (mixed bank)' },
]
const COUNT_OPTS = [
  { value: 10, label: '10 questions' },
  { value: 20, label: '20 questions' },
  { value: 30, label: '30 questions' },
  { value: 54, label: '54 questions' },
]
const ORDER_OPTS = [
  { value: 'real', label: 'Real test order' },
  { value: 'mixed', label: 'Shuffled' },
]
const TIME_OPTS = [
  { value: 15, label: '15 min' },
  { value: 30, label: '30 min' },
  { value: 45, label: '45 min' },
  { value: 80, label: '80 min (GAP)' },
  { value: 90, label: '90 min (Math)' },
]
const SET_OPTS = [
  ...MOCK_SETS.map(s => ({ value: s.id, label: s.title })),
  { value: 'bank', label: 'Mixed bank (+ English, Math)' },
]
const FACTS = [['54', 'questions'], ['80', 'minutes'], ['+1 / −⅓ / 0', 'right / wrong / blank'], ['no', 'calculator']]

function articleTitle(set) {
  const s = set.blocks?.V6?.stimulus || ''
  return s.split('\n')[0].trim()
}

function TestPicker({ onStart }) {
  const [setId, setSetId] = useState(MOCK_SETS[0].id)
  const [section, setSection] = useState('All')
  const [count, setCount] = useState(20)
  const [order, setOrder] = useState('real')
  const [mins, setMins] = useState(30)

  return (
    <div className="stack-lg">
      <PageHead title="Practice tests">
        Each test follows the real GAP paper: questions 1–26 verbal, 27–54 analytical, in the same task order. A wrong answer costs a third of a point, so leave a question blank when you are unsure.
      </PageHead>

      <dl className="facts">
        {FACTS.map(([v, l]) => <div key={l}><dt>{v}</dt><dd>{l}</dd></div>)}
      </dl>

      <div className="test-grid">
        {MOCK_SETS.map((s, i) => {
          const best = loadJson(bestKey(s.id), null)
          return (
            <article key={s.id} className="test-card">
              <div className="test-no">{String(i + 1)}</div>
              <div className="test-body">
                <h2>{s.title.replace(/\s*\(hard\)$/i, '')}{s.level === 'hard' && <span className="tag hard">Hard</span>}</h2>
                <p className="test-sub">Reading: {articleTitle(s)}</p>
                <p className="test-best">{best ? <>Best score <b>{best.score}</b> / {best.max}</> : 'Not taken yet'}</p>
              </div>
              <Button type="primary" onClick={() => onStart({ setId: s.id, section: 'All', count: 54, order: 'real', mins: 80 })}>Start</Button>
            </article>
          )
        })}
      </div>

      <section className="panel custom">
        <h2>Custom practice</h2>
        <p className="hint">Train one section, a shorter run, or the mixed bank with English and Math.</p>
        <div className="custom-grid">
          <label className="field wide"><span>Source</span><Select id="c-set" value={setId} onChange={setSetId} options={SET_OPTS} /></label>
          <label className="field"><span>Section</span><Select id="c-section" value={section} onChange={setSection} options={SECTION_OPTS} /></label>
          <label className="field"><span>Length</span><Select id="c-count" value={count} onChange={setCount} options={COUNT_OPTS} /></label>
          <label className="field"><span>Order</span><Select id="c-order" value={order} onChange={setOrder} options={ORDER_OPTS} /></label>
          <label className="field"><span>Time</span><Select id="c-time" value={mins} onChange={setMins} options={TIME_OPTS} /></label>
        </div>
        <div className="actions">
          <Button type="primary" onClick={() => onStart({ setId, section, count, order, mins })}>Start custom practice</Button>
        </div>
      </section>
    </div>
  )
}

function MockTest() {
  const [cfg, setCfg] = useState(null)
  const [blocks, setBlocks] = useState(BLOCKS)
  const [test, setTest] = useState([])
  const [answers, setAnswers] = useState({})
  const [secs, setSecs] = useState(0)
  const [done, setDone] = useState(null)
  const timer = useRef(null)

  useEffect(() => () => clearInterval(timer.current), [])

  const start = (c) => {
    const t = pickQuestions(c.setId, c.section, c.count, c.order)
    if (!t.length) { message.warning('This source has no questions for that section. Choose another section.'); return }
    setCfg(c); setBlocks(blocksFor(c.setId)); setTest(t); setAnswers({}); setDone(null); setSecs(c.mins * 60)
    clearInterval(timer.current)
    timer.current = setInterval(() => setSecs(s => {
      if (s <= 1) { clearInterval(timer.current); submitRef.current(); return 0 }
      return s - 1
    }), 1000)
    window.scrollTo({ top: 0 })
  }

  const submit = () => {
    clearInterval(timer.current)
    const tally = () => ({ c: 0, w: 0, b: 0 })
    const by = { 'GAP Verbal': tally(), 'GAP Analytical': tally(), Other: tally() }
    // Real GAP scoring: one point per question, −⅓ per wrong answer. A
    // synonym/antonym question is one question: it scores only when both
    // parts are right, and counts as wrong when either part is answered
    // but the pair is not fully right.
    test.forEach((q, i) => {
      const t = by[q.section] || by.Other
      const parts = q.optionsB ? [[answers[i], q.answer], [answers[i + 'b'], q.answerB]] : [[answers[i], q.answer]]
      if (parts.every(([s]) => s === undefined)) t.b++
      else if (parts.every(([s, a]) => s === a)) t.c++
      else t.w++
    })
    const sum = Object.values(by).reduce((a, t) => ({ c: a.c + t.c, w: a.w + t.w, b: a.b + t.b }), tally())
    const total = sum.c + sum.w + sum.b
    const score = sum.c - sum.w / 3
    setDone({ ...sum, total, score, by })
    if (cfg && cfg.setId !== 'bank' && cfg.count === 54 && cfg.section === 'All') {
      const prev = loadJson(bestKey(cfg.setId), null)
      if (!prev || score > prev.score) {
        saveJson(bestKey(cfg.setId), { score: +score.toFixed(1), max: total, at: Date.now() })
        message.success('New best score for this test')
      }
    }
    window.scrollTo({ top: 0 })
  }
  const submitRef = useRef(submit)
  useEffect(() => { submitRef.current = submit })

  const exit = () => { clearInterval(timer.current); setTest([]); setDone(null); setCfg(null); window.scrollTo({ top: 0 }) }

  if (!test.length) return <TestPicker onStart={start} />

  const real = cfg.order === 'real'
  const groups = []
  test.forEach((q, idx) => {
    const last = groups[groups.length - 1]
    if (last && last.block === q.block && real) last.items.push(idx)
    else groups.push({ block: q.block, items: [idx] })
  })
  const answeredCount = test.filter((q, i) => isAnswered(q, i, answers)).length
  const low = secs <= 300
  const goTo = n => document.getElementById('q-' + n)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="stack-lg">
      {!done ? (
        <div className={'testbar' + (low ? ' low' : '')}>
          <div className="testbar-row">
            <div className="testbar-title">
              <Button type="text" icon={<ArrowLeftOutlined />} onClick={exit} aria-label="Leave test" />
              <div>
                <div className="tb-name">{setLabel(cfg.setId)}</div>
                <div className="tb-meta">{answeredCount} of {test.length} answered</div>
              </div>
            </div>
            <div className="clock" aria-live="polite"><ClockCircleOutlined /> {fmt(secs)}</div>
            <Popconfirm title="Submit the test now?" description={answeredCount < test.length ? `${test.length - answeredCount} questions are still blank.` : 'All questions are answered.'} onConfirm={submit} okText="Submit">
              <Button type="primary">Submit</Button>
            </Popconfirm>
          </div>
          <Progress percent={Math.round(100 * answeredCount / test.length)} showInfo={false} size="small" strokeColor="var(--accent)" />
        </div>
      ) : (
        <section className="result">
          <div className="result-score">
            <span className="label">Score</span>
            <span className="big">{done.score.toFixed(1)}</span>
            <span className="of">of {done.total} points</span>
          </div>
          <div className="result-detail">
            <h2>{setLabel(cfg.setId)}</h2>
            <p className="tally">
              <span className="good">{done.c} correct</span>
              <span className="bad">{done.w} wrong</span>
              <span>{done.b} blank</span>
            </p>
            <table className="breakdown">
              <thead><tr><th>Section</th><th>Correct</th><th>Wrong</th><th>Blank</th><th>Points</th></tr></thead>
              <tbody>
                {Object.entries(done.by).filter(([, t]) => t.c + t.w + t.b).map(([k, t]) => (
                  <tr key={k}><td>{k.replace('GAP ', '')}</td><td>{t.c}</td><td>{t.w}</td><td>{t.b}</td><td>{(t.c - t.w / 3).toFixed(1)}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="hint">Wrong answers are marked red below, with the correct option in green and an explanation.</p>
            <Space wrap>
              <Button type="primary" icon={<RedoOutlined />} onClick={() => start(cfg)}>Retake</Button>
              <Button icon={<ArrowLeftOutlined />} onClick={exit}>All tests</Button>
            </Space>
          </div>
        </section>
      )}

      <nav className="qnav" aria-label="Jump to question">
        {test.map((q, i) => {
          let st = isAnswered(q, i, answers) ? ' answered' : ''
          if (done) {
            const okA = answers[i] === q.answer
            const okB = !q.optionsB || answers[i + 'b'] === q.answerB
            st = !isAnswered(q, i, answers) ? ' blank' : okA && okB ? ' good' : ' bad'
          }
          return <button key={i} type="button" className={'qnav-btn' + st} onClick={() => goTo(i + 1)}>{i + 1}</button>
        })}
      </nav>

      {groups.map((g, gi) => {
        const b = blocks[g.block]
        const from = g.items[0] + 1, to = g.items[g.items.length - 1] + 1
        return (
          <section key={(g.block || 'x') + '-' + gi} className="block">
            {b && real && (
              <div className="instructions">
                <h2>{from === to ? `Instructions for question ${from}` : `Instructions for questions ${from}–${to}`}</h2>
                <p className="instr-kind">{b.title}</p>
                <p>{b.instruction}</p>
                <Stimulus b={b} />
              </div>
            )}
            {g.items.map(idx => (
              <TestItem key={idx} q={test[idx]} num={idx + 1} answers={answers} setAnswers={setAnswers} review={!!done} showStimulus={!real} blocks={blocks} />
            ))}
          </section>
        )
      })}

      {!done && (
        <Popconfirm title="Submit the test now?" onConfirm={submit} okText="Submit">
          <Button type="primary" size="large" block>Submit test</Button>
        </Popconfirm>
      )}
    </div>
  )
}

/* ---------------- Library: upload & store old questions ---------------- */

const TEMPLATE = {
  title: 'GAP past paper — example',
  subject: 'GAP Verbal',
  questions: [
    { q: 'BICYCLE : PEDAL = CAR : ?', options: ['Wheel', 'Engine', 'Accelerator', 'Mirror'], answer: 2, explain: 'Means of propulsion.' },
    { q: 'What is the accounting equation?', a: 'Assets = Liabilities + Equity.' }
  ]
}

function normalizeItems(raw) {
  const out = []
  for (const r of raw) {
    if (!r || typeof r !== 'object') continue
    const q = String(r.q ?? r.question ?? '').trim()
    if (!q) continue
    if (Array.isArray(r.options) && r.options.length >= 2) {
      const ai = Number(r.answer ?? r.correct ?? 0)
      out.push({
        q,
        options: r.options.map(String),
        answer: ai >= 0 && ai < r.options.length ? ai : 0,
        explain: String(r.explain ?? r.explanation ?? r.a ?? '')
      })
    } else {
      const a = String(r.a ?? r.answer ?? r.explain ?? '').trim()
      if (!a) continue
      out.push({ q, a })
    }
  }
  return out
}

function parseUpload(json, fileName) {
  const base = fileName.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ')
  if (Array.isArray(json)) {
    const items = normalizeItems(json)
    if (!items.length) throw new Error('No valid questions found in file.')
    return { title: base || 'Uploaded set', subject: '', items }
  }
  if (json && typeof json === 'object') {
    const raw = json.questions ?? json.items ?? json.data
    if (!Array.isArray(raw)) throw new Error('Expected {"title","questions":[...]} or a plain [...] array.')
    const items = normalizeItems(raw)
    if (!items.length) throw new Error('No valid questions found in file.')
    return { title: String(json.title ?? json.name ?? base ?? 'Uploaded set'), subject: String(json.subject ?? json.category ?? ''), items }
  }
  throw new Error('Unsupported file format.')
}

function Library() {
  const [sets, setSets] = useState(() => loadJson(LIB_KEY, []))
  const [pdfs, setPdfs] = useState(() => loadJson(PDF_META_KEY, []))
  const [target, setTarget] = useState('new')
  const [newTitle, setNewTitle] = useState('')
  const [nQ, setNQ] = useState('')
  const [nA, setNA] = useState('')

  useEffect(() => { saveJson(LIB_KEY, sets) }, [sets])
  useEffect(() => { saveJson(PDF_META_KEY, pdfs) }, [pdfs])
  const total = sets.reduce((n, s) => n + s.items.length, 0)

  const download = (name, obj) => {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob); a.download = name; a.click()
  }

  const fmtSize = b => b > 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB'

  const onPdf = async (f) => {
    if (f.size > PDF_SIZE_LIMIT) { message.error('This PDF is larger than 30 MB. Upload a smaller file.'); return }
    try {
      const buf = await f.arrayBuffer()
      const pdfjs = await import('pdfjs-dist')
      pdfjs.GlobalWorkerOptions.workerSrc = workerUrl
      const doc = await pdfjs.getDocument({ data: buf.slice(0) }).promise
      const pages = doc.numPages
      let preview = ''
      for (let p = 1; p <= Math.min(pages, 3) && preview.length < 1500; p++) {
        const page = await doc.getPage(p)
        const tc = await page.getTextContent()
        preview += tc.items.map(it => it.str).join(' ') + '\n'
      }
      await doc.destroy?.()
      const id = Date.now()
      await putPdf(id, new Blob([buf], { type: 'application/pdf' }))
      setPdfs(s => [{
        id,
        title: f.name.replace(/\.pdf$/i, '').replace(/[_-]+/g, ' '),
        fileName: f.name, size: f.size, pages,
        preview: preview.trim().slice(0, 1200),
        createdAt: Date.now()
      }, ...s])
      message.success(`PDF added (${pages} pages)`)
    } catch { message.error('This PDF could not be read. Scanned or damaged files are not supported.') }
  }

  const openPdf = async (meta) => {
    try {
      const blob = await getPdf(meta.id)
      if (!blob) { message.error('The file data is missing. Upload the PDF again.'); return }
      window.open(URL.createObjectURL(blob), '_blank', 'noopener')
    } catch { message.error('The PDF could not be opened.') }
  }

  const exportPdf = async (meta) => {
    try {
      const blob = await getPdf(meta.id)
      if (!blob) { message.error('The file data is missing. Upload the PDF again.'); return }
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob); a.download = meta.fileName; a.click()
    } catch { message.error('The PDF could not be exported.') }
  }

  const deletePdf = async (meta) => {
    try { await delPdf(meta.id) } catch { /* ignore */ }
    setPdfs(s => s.filter(x => x.id !== meta.id))
    message.success('PDF deleted')
  }

  const handleFile = (f) => {
    if (/\.pdf$/i.test(f.name) || f.type === 'application/pdf') { onPdf(f); return }
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const parsed = parseUpload(JSON.parse(reader.result), f.name)
        setSets(s => [{ ...parsed, id: Date.now(), createdAt: Date.now(), fileName: f.name }, ...s])
        message.success(`Added “${parsed.title}” (${parsed.items.length} questions)`)
      } catch (err) { message.error(err.message || 'The file could not be read.') }
    }
    reader.onerror = () => message.error('The file could not be read.')
    reader.readAsText(f)
  }

  const addSingle = () => {
    if (!nQ.trim() || !nA.trim()) return
    const item = { q: nQ.trim(), a: nA.trim() }
    if (target === 'new') {
      if (!newTitle.trim()) { message.warning('Give the new set a title first.'); return }
      setSets(s => [{ id: Date.now(), title: newTitle.trim(), subject: '', items: [item], createdAt: Date.now() }, ...s])
      setNewTitle('')
    } else {
      setSets(s => s.map(x => x.id === Number(target) ? { ...x, items: [item, ...x.items] } : x))
    }
    setNQ(''); setNA('')
    message.success('Added to library')
  }

  const addForm = (
    <div className="stack">
      <label className="field">
        <span>Store in</span>
        <Select id="lib-target" value={target} onChange={setTarget}
          options={[{ value: 'new', label: '+ New set' }, ...sets.map(s => ({ value: String(s.id), label: `${s.title} (${s.items.length})` }))]} />
      </label>
      {target === 'new' && (
        <label className="field">
          <span>Set title</span>
          <Input id="lib-title" value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="e.g. GAP 2024 past paper" maxLength={80} />
        </label>
      )}
      <label className="field">
        <span>Question</span>
        <Input.TextArea id="lib-q" value={nQ} onChange={e => setNQ(e.target.value)} rows={2} maxLength={500} showCount />
      </label>
      <label className="field">
        <span>Answer</span>
        <Input.TextArea id="lib-a" value={nA} onChange={e => setNA(e.target.value)} rows={2} maxLength={2000} showCount />
      </label>
      <div><Button type="primary" icon={<PlusOutlined />} onClick={addSingle}>Add to library</Button></div>
    </div>
  )

  return (
    <div className="stack-lg">
      <PageHead title="Library">
        Keep your own past papers and question sets here. Everything stays in this browser: {total} questions and {pdfs.length} PDFs so far.
      </PageHead>

      <section className="panel">
        <Space wrap>
          <Upload beforeUpload={(file) => { handleFile(file); return false }} showUploadList={false} accept=".json,.pdf,application/json,application/pdf">
            <Button type="primary" icon={<UploadOutlined />}>Upload JSON or PDF</Button>
          </Upload>
          <Button icon={<DownloadOutlined />} onClick={() => download('library-template.json', TEMPLATE)}>JSON template</Button>
        </Space>
      </section>

      {pdfs.map(m => (
        <article key={m.id} className="qcard">
          <header className="qcard-head">
            <FilePdfOutlined className="pdf-icon" />
            <h3>{m.title}</h3>
            <span className="tag">{m.pages} page{m.pages === 1 ? '' : 's'}</span>
            <span className="tag soft">{fmtSize(m.size)}</span>
          </header>
          {m.preview ? <Paragraph type="secondary" ellipsis={{ rows: 3, expandable: true }}>{m.preview}</Paragraph> : null}
          <Space wrap>
            <Button size="small" type="primary" icon={<EyeOutlined />} onClick={() => openPdf(m)}>Open</Button>
            <Button size="small" icon={<DownloadOutlined />} onClick={() => exportPdf(m)}>Download</Button>
            <Popconfirm title="Delete this PDF?" onConfirm={() => deletePdf(m)}>
              <Button size="small" danger icon={<DeleteOutlined />}>Delete</Button>
            </Popconfirm>
          </Space>
        </article>
      ))}

      <Collapse className="panel" items={[{ key: 'add', label: 'Add a single question', children: addForm }]} />

      {!sets.length && <Empty description="No question sets yet. Upload a JSON file or add a question above." />}
      {sets.length > 0 && (
        <Collapse
          accordion
          className="panel"
          items={sets.map(s => ({
            key: String(s.id),
            label: <Space><Text strong>{s.title}</Text><span className="tag">{s.items.length}</span><span className="tag soft">{s.subject || 'General'}</span></Space>,
            children: (
              <>
                <Space wrap style={{ marginBottom: 12 }}>
                  <Button size="small" icon={<DownloadOutlined />} onClick={() => download(s.title.replace(/\s+/g, '-').toLowerCase() + '.json', { title: s.title, subject: s.subject, questions: s.items })}>Download</Button>
                  <Popconfirm title="Delete this set?" onConfirm={() => { setSets(x => x.filter(y => y.id !== s.id)); message.success('Set deleted') }}>
                    <Button size="small" danger icon={<DeleteOutlined />}>Delete</Button>
                  </Popconfirm>
                </Space>
                <div className="lib-items">
                  {s.items.map((it, i) => (
                    <div className="lib-q" key={i}>
                      <div className="lq">{i + 1}. {it.q}</div>
                      {it.options
                        ? <div className="lopts">{it.options.map((o, j) => <div key={j}>{String.fromCharCode(65 + j)}. {o}{j === it.answer ? ' ✓' : ''}</div>)}</div>
                        : null}
                      <div className="la">{it.a || it.explain || ''}</div>
                    </div>
                  ))}
                </div>
              </>
            ),
          }))}
        />
      )}
    </div>
  )
}

/* ---------------- App ---------------- */

const TABS = [
  { key: 'mock', label: 'Practice tests' },
  { key: 'questions', label: 'Question bank' },
  { key: 'library', label: 'Library' },
]

export default function App() {
  const [tab, setTab] = useState('mock')
  const dark = useDarkMode()
  const antd = {
    algorithm: dark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
    token: {
      colorPrimary: dark ? '#7fb0f0' : '#1e4f9c',
      colorBgBase: dark ? '#0f141c' : '#ffffff',
      borderRadius: 10,
      fontFamily: "'Lexend', system-ui, -apple-system, 'Segoe UI', sans-serif",
    },
  }
  return (
    <ConfigProvider theme={antd}>
      <div className="app">
        <header className="topbar">
          <div className="wrap topbar-inner">
            <div className="brand">
              <span className="brand-mark" aria-hidden="true">G</span>
              <span>
                <span className="brand-name">GAP Practice</span>
                <span className="brand-sub">SCIO General Academic Prerequisites</span>
              </span>
            </div>
            <nav className="tabs" role="tablist" aria-label="Sections">
              {TABS.map(t => (
                <button key={t.key} type="button" role="tab" aria-selected={tab === t.key} className={'tab' + (tab === t.key ? ' on' : '')} onClick={() => setTab(t.key)}>{t.label}</button>
              ))}
            </nav>
          </div>
        </header>
        <main className="wrap main">
          {tab === 'mock' && <MockTest />}
          {tab === 'questions' && <Archive />}
          {tab === 'library' && <Library />}
        </main>
        <footer className="wrap footer">
          Practice items are original and written in the style of the SCIO GAP. Your answers and scores are stored only in this browser.
        </footer>
      </div>
    </ConfigProvider>
  )
}
