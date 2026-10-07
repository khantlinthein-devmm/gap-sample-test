// Full-length GAP practice tests (54 questions each, real SCIO order). See set1.js for the item schema.
import set1 from './set1.js'
import set2 from './set2.js'
import set3 from './set3.js'
import set4 from './set4.js'
import set5 from './set5.js'

const sectionOf = block => (block.startsWith('V') ? 'GAP Verbal' : 'GAP Analytical')

export const MOCK_SETS = [set1, set2, set3, set4, set5].map(s => ({
  ...s,
  questions: s.questions.map(q => ({ section: sectionOf(q.block), ...q })),
}))
