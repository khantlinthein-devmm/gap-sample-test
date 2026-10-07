// Practice Q&A mirroring the REAL SCIO GAP task types (see Mock test blocks V1–A8).
// Format for interactive cards: choices as (A) (B) (C) (D), answer starts with "Answer: X".
// ALL ITEMS ARE ORIGINAL (not SCIO copies).
export const DEFAULT_QUESTIONS = [
  // ---- Verbal: text completion ----
  { category: "GAP Verbal", q: "[Completion] The speech was ___ dull that half the audience fell ___. (A) so–asleep (B) very–tired (C) quite–away (D) rather–off", a: "Answer: A. Only 'so … that' fits." },
  { category: "GAP Verbal", q: "[Completion] ___ the delay, passengers remained ___ and boarded ___ midnight. (A) Despite–calm–before (B) After–angry–without (C) Without–silent–against (D) During–happy–beyond", a: "Answer: A (Despite – calm – before)." },
  { category: "GAP Verbal", q: "[Completion] Because so many customers shop in December, the store hires extra staff ___ Christmas and, to keep them motivated, pays ___ bonuses for weekend work. (A) before–generous (B) after–no (C) without–small (D) despite–late", a: "Answer: A. Staff are needed before the December rush, and motivation calls for generous bonuses." },
  // ---- Verbal: analogies (double blank) ----
  { category: "GAP Verbal", q: "[Analogy] STRONG : ___ = ___ : WEAKNESS (A) strength–weak (B) power–feebleness (C) muscle–frail (D) stronger–weaker", a: "Answer: A. Adjective : its noun on both sides (STRONG : strength = weak : WEAKNESS)." },
  { category: "GAP Verbal", q: "[Analogy] FISH : ___ = ___ : NEST (A) water–bird (B) gill–egg (C) sea–tree (D) swim–build", a: "Answer: A. Dweller : home." },
  { category: "GAP Verbal", q: "[Analogy] SPEAK : ___ = ___ : PAINTING (A) speech–paint (B) mouth–brush (C) voice–colour (D) talk–artist", a: "Answer: A. Activity : its product (SPEAK : speech = paint : PAINTING)." },
  { category: "GAP Verbal", q: "[Analogy] WHEEL : ___ = ___ : ROOF (A) car–tile (B) spoke–chimney (C) round–flat (D) drive–cover", a: "Answer: A. Part : whole (WHEEL is part of a car; a tile is part of a ROOF)." },
  // ---- Verbal: vocabulary (single-answer cards) ----
  { category: "GAP Verbal", q: "[Synonym] Closest in meaning to 'fragile': (A) strong (B) breakable (C) heavy (D) sharp", a: "Answer: B." },
  { category: "GAP Verbal", q: "[Antonym] Closest to the opposite of 'fragile': (A) sturdy (B) light (C) small (D) smooth", a: "Answer: A." },
  { category: "GAP Verbal", q: "[Synonym] Closest in meaning to 'ancient': (A) modern (B) old (C) rare (D) famous", a: "Answer: B." },
  { category: "GAP Verbal", q: "[Antonym] Closest to the opposite of 'ancient': (A) broken (B) modern (C) dusty (D) lost", a: "Answer: B." },
  { category: "GAP Verbal", q: "[Synonym] Closest in meaning to 'hasten': (A) delay (B) hurry (C) watch (D) stop", a: "Answer: B." },
  { category: "GAP Verbal", q: "[Antonym] Closest to the opposite of 'hasten': (A) rush (B) continue (C) delay (D) hurry", a: "Answer: C." },
  // ---- Verbal: odd part out ----
  { category: "GAP Verbal", q: "[Odd part] A text praises city parks. Which part does NOT fit? (1) Parks clean the air. (2) Parks give shade in summer. (3) All parks should be paved over for parking. (4) Children play in parks. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: C (part 3 contradicts the praise)." },
  { category: "GAP Verbal", q: "[Odd part] A text about dolphins. Which part does NOT fit? (1) Dolphins are mammals. (2) They breathe air through a blowhole. (3) Dolphins are a kind of fish with gills. (4) They live in groups called pods. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: C (part 3 contradicts 1 and 2)." },
  { category: "GAP Verbal", q: "[Odd part] A text about winter safety. Which part does NOT fit? (1) Wear warm layers. (2) Drink water regularly. (3) Never tell anyone where you hike. (4) Carry a charged phone. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: C (part 3 is unsafe advice)." },
  { category: "GAP Verbal", q: "[Odd part] A text about the Moon. Which part does NOT fit? (1) The Moon orbits the Earth about once a month. (2) It always turns the same side towards the Earth. (3) That is why, over a month, people on Earth gradually see all sides of the Moon. (4) Tides are caused mainly by the Moon's gravity. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: C (if the same side always faces us, we never see the far side — part 3 contradicts part 2)." },
  { category: "GAP Verbal", q: "[Odd part] A text about drinking water. Which part does NOT fit? (1) The human body is mostly water. (2) Humans can survive weeks without drinking water. (3) Clean water prevents disease. (4) Boiling kills most germs. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: B (humans survive only days without water)." },
  { category: "GAP Verbal", q: "[Odd part] A text about football rules. Which part does NOT fit? (1) A match lasts 90 minutes plus stoppage time. (2) Each team fields eleven players. (3) Goals scored by hand count double. (4) The goalkeeper may use hands in the box. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: C (hand goals do not count at all)." },
  { category: "GAP Verbal", q: "[Odd part] A text about forests. Which part does NOT fit? (1) Forests produce oxygen. (2) Forest fires never harm nature. (3) Many animals live in forests. (4) Trees store carbon. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: B (fires do harm nature)." },
  { category: "GAP Verbal", q: "[Odd part] Our school day is short. Which part does NOT fit? (1) Lessons start at 8:00. (2) There are only four 45-minute lessons a day. (3) Most pupils are home before lunch. (4) Compulsory lessons, however, continue until 5 p.m. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: D (lessons until 5 p.m. contradict the short day and part 3)." },
  { category: "GAP Verbal", q: "[Odd part] A text about tea. Which part does NOT fit? (1) All true teas come from one plant, Camellia sinensis. (2) Green and black tea differ only in how the leaves are processed. (3) Herbal teas such as mint are therefore made from the same plant. (4) After water, tea is the most drunk beverage in the world. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: C (mint is a different plant; 'therefore' does not follow from parts 1–2)." },
  { category: "GAP Verbal", q: "[Odd part] A text about penguins. Which part does NOT fit? (1) Penguins cannot fly. (2) Their wings have become stiff flippers. (3) They use these flippers to glide long distances through the air. (4) Underwater, they move almost as if flying. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: C (gliding through the air contradicts part 1)." },
  { category: "GAP Verbal", q: "[Odd part] A text about the euro. Which part does NOT fit? (1) The euro is used by many EU countries. (2) Each country mints coins with its own design on one side. (3) These coins can be spent only in the country that issued them. (4) Banknotes look the same in all euro countries. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: C (a common currency works in every euro country)." },
  { category: "GAP Verbal", q: "[Odd part] A text about bread. Which part does NOT fit? (1) Yeast bread needs flour, water, salt and yeast. (2) The yeast produces gas that makes the dough rise. (3) For this reason, bread made without yeast rises the highest. (4) Fresh bread is best eaten within two days. (A) Part (1) (B) Part (2) (C) Part (3) (D) Part (4)", a: "Answer: C (without yeast there is no gas, so the dough rises least)." },
  // ---- Verbal: inference ----
  { category: "GAP Verbal", q: "[Inference] The bridge was closed for repairs from March to June. Buses replaced trams during that period. What follows with certainty? (A) No bus ran in July. (B) Trams did not cross the bridge in April. (C) The repairs finished early. (D) The bridge is new.", a: "Answer: B." },
  { category: "GAP Verbal", q: "[Inference] Ana scored twice as many points as Ben. Together they scored 90 points. What follows with certainty? (A) Ana scored 60. (B) Ben scored 45. (C) Ana scored 90. (D) Ben scored 20.", a: "Answer: A (60 + 30 = 90)." },
  { category: "GAP Verbal", q: "[Inference] The museum opens at 9 and the first tour starts an hour later. Visitors may enter only with a tour. What follows with certainty for a visitor who arrives at 9:30? (A) They can still join the first tour. (B) They have missed all the tours. (C) They may enter without a tour. (D) They must wait until noon.", a: "Answer: A. The first tour starts at 10:00; nothing is said about later tour times." },
  { category: "GAP Verbal", q: "[Inference] Of 30 pupils, 18 chose apples and 12 chose pears; everyone chose exactly one fruit. What follows with certainty? (A) More pupils chose apples. (B) Nobody chose apples. (C) All chose pears. (D) Five chose both.", a: "Answer: A." },
  // ---- Analytical: quantitative comparison ----
  { category: "GAP Analytical", q: "[Comparison] Left: 15% of 300. Right: 20% of 200. (A) Left is greater. (B) Right is greater. (C) They are equal. (D) Cannot be determined.", a: "Answer: A (45 vs 40)." },
  { category: "GAP Analytical", q: "[Comparison] Left: area of a 4×4 square. Right: area of a circle with radius 2. (A) Left is greater. (B) Right is greater. (C) They are equal. (D) Cannot be determined.", a: "Answer: A (16 vs about 12.6)." },
  { category: "GAP Analytical", q: "[Comparison] Left: 1/3 + 1/6. Right: 1/2. (A) Left is greater. (B) Right is greater. (C) They are equal. (D) Cannot be determined.", a: "Answer: C (both 1/2)." },
  // ---- Analytical: sufficiency / conditions ----
  { category: "GAP Analytical", q: "[Conditions] All cats are mammals. Some mammals are dogs. What follows about cats and dogs? (A) All cats are dogs. (B) Nothing follows. (C) No cat is a dog.", a: "Answer: B. The 'some mammals' group may not overlap with cats at all." },
  { category: "GAP Analytical", q: "[Sufficiency] Is Mia older than 20? (1) Mia is twice as old as her 9-year-old brother. (2) Mia finishes school next year. (A) (1) alone is enough. (B) (2) alone is enough. (C) Both together are enough only. (D) Each alone is enough.", a: "Answer: A. (1) fixes her age at 18 — a definite No." },
  // ---- Analytical: word problems ----
  { category: "GAP Analytical", q: "[Word problem] A shop sold 120 tickets. Adult tickets cost twice as much as child tickets; 80 adults and 40 children came, total 400. Child ticket price? (A) 1 (B) 2 (C) 4 (D) 5", a: "Answer: B. 80·2c + 40·c = 200c = 400 → c = 2." },
  { category: "GAP Analytical", q: "[Word problem] Two printers print 100 pages in 10 minutes together. One alone needs 30 minutes. How long does the other need alone? (A) 12 min (B) 15 min (C) 20 min (D) 30 min", a: "Answer: B. Rates: 1/30 + 1/x = 1/10 → 1/x = 2/30 → x = 15." },
  { category: "GAP Analytical", q: "[Word problem] A rectangle's length is triple its width; perimeter is 32. Width? (A) 3 (B) 4 (C) 6 (D) 8", a: "Answer: B. 2(w + 3w) = 32 → w = 4." },
  { category: "GAP Analytical", q: "[Word problem] 5 workers build a wall in 12 days. How long for 6 workers at the same pace? (A) 8 days (B) 10 days (C) 12 days (D) 14 days", a: "Answer: B. 5·12/6 = 10." },
  // ---- Analytical: mathematisation ----
  { category: "GAP Analytical", q: "[Mathematisation] There are n notebooks at c crowns each; total price T. Which equation fits? (A) T = n + c (B) T = n·c (C) n = T·c (D) c = n + T", a: "Answer: B." },
  { category: "GAP Analytical", q: "[Mathematisation] h(x) = x² − 1. What is h(3)? (A) 5 (B) 8 (C) 9 (D) 6", a: "Answer: B (9 − 1 = 8)." },
  { category: "GAP Analytical", q: "[Mathematisation] Which expression equals (y + 2)(y − 2)? (A) y² + 4 (B) y² − 4 (C) y² − 2y + 4 (D) 2y − 4", a: "Answer: B." },
  // ---- Analytical: logic sets ----
  { category: "GAP Analytical", q: "[Logic] Three boxes A, B, C hold red, green, blue balls (one colour each). Red is not in A. Green is not in B or C. Where is green? (A) A (B) B (C) C (D) Cannot tell", a: "Answer: A. Green must be in A (only box left)." },
  { category: "GAP Analytical", q: "[Logic] Ann, Ben, Cid sit in a row. Ann is not at either end. Who sits in the middle? (A) Ann (B) Ben (C) Cid (D) Cannot tell", a: "Answer: A." },
  { category: "GAP Analytical", q: "[Logic] The bell rings after the light turns green. The light is green now but the bell is silent. Which rule is broken? (A) None — bell rings later. (B) The light rule. (C) The bell rule. (D) Both.", a: "Answer: A. 'After' allows a delay; nothing is violated yet." },
  // ---- Analytical: tables ----
  { category: "GAP Analytical", q: "[Table] Scores: Ann 5, Ben 3, Cid 5, Dan 2. How many scored above 3? (A) 1 (B) 2 (C) 3 (D) 4", a: "Answer: B (Ann and Cid)." },
  { category: "GAP Analytical", q: "[Table] Bus times: 7:10, 7:40, 8:10, 8:40. You arrive 7:35. Next bus? (A) 7:10 (B) 7:40 (C) 8:10 (D) 8:40", a: "Answer: B." },
  // ---- English ----
  { category: "English", q: "[B2] She ___ in Prague since 2020. (A) lives (B) has lived (C) lived", a: "Answer: B. 'Since' → present perfect." },
  { category: "English", q: "[B2] If it rains, we ___ at home. (A) stay (B) will stay (C) stayed", a: "Answer: B (first conditional)." },
  { category: "English", q: "[B2] The book ___ written in 2020. (A) is (B) was (C) has", a: "Answer: B (past passive)." },
  { category: "English", q: "[B2] There was a small ___ between the trees. (A) gap (B) gape (C) cape", a: "Answer: A (gap = opening)." },
  { category: "English", q: "[B2] He has ___ finished. (A) yet (B) already (C) ever not", a: "Answer: B (already in affirmatives)." },
  { category: "English", q: "[B2] You ___ smoke here, it's forbidden. (A) mustn't (B) don't have to (C) should to", a: "Answer: A (prohibition)." },
  { category: "English", q: "[B2] I ___ TV when he called. (A) watched (B) was watching (C) watch", a: "Answer: B (interrupted past continuous)." },
  { category: "English", q: "[B2] Choose correct: (A) much informations (B) a lot of information (C) many informations", a: "Answer: B (uncountable)." },
  // ---- Math ----
  { category: "Math", q: "[Algebra] Solve 2x² − 8 = 0. (A) x = 2 (B) x = ±2 (C) x = 4", a: "Answer: B." },
  { category: "Math", q: "[Functions] f(x) = 3x − 1, f(4) = ? (A) 11 (B) 12", a: "Answer: A." },
  { category: "Math", q: "[Geometry] Circle r = 3, area? (A) 6π (B) 9π", a: "Answer: B." },
  { category: "Math", q: "[Probability] Die once, P(even)? (A) 1/3 (B) 1/2", a: "Answer: B." },
  { category: "Math", q: "[Quadratic] x² − 5x + 6 = 0. Roots? (A) 2, 3 (B) 1, 6", a: "Answer: A." },
  { category: "Math", q: "[Percent] 15% of 200? (A) 20 (B) 30", a: "Answer: B." },
  { category: "Math", q: "[Combinatorics] C(5,2) = ? (A) 8 (B) 10", a: "Answer: B." },
  { category: "Math", q: "[Formulas] Quadratic formula for ax² + bx + c = 0?", a: "x = (−b ± √(b² − 4ac)) / (2a). Discriminant D = b² − 4ac." },
  { category: "Math", q: "[Formulas] (a+b)², a² − b²?", a: "(a+b)² = a² + 2ab + b²; a² − b² = (a−b)(a+b)." },
  { category: "Math", q: "[Info] SCIO Math: items, time, aids?", a: "30 items / 90 min. No calculator or tables. Formula sheet + Notation Guide included." }
];
