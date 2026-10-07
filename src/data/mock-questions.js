// Full-length GAP practice test mirroring the REAL SCIO blueprint (April 2023 test):
// VERBAL 26: V1 completion x3, V2 analogies x3, V3 vocabulary x3 (2 answers each),
//   V4 inconsistency x5, V5 short inference x6, V6 long text + 6 questions.
// ANALYTICAL 28: A1 graph/table x3, A2 distance table x3, A3 quant comparison x6,
//   A4 data sufficiency x2, A5 word problems x5, A6 mathematisation x3, A7 logic set x3, A8 voting set x3.
// ALL ITEMS ARE ORIGINAL practice items in the same style (not SCIO copies).
// English + Math banks follow.

export const BLOCK_ORDER = ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'];

export const BLOCKS = {
  V1: { section: 'GAP Verbal', title: 'Text completion', instruction: 'There are two or three gaps in the short text. Choose the option containing the expressions that best fit the overall meaning and style of the text when filled in the gaps (in the order provided).' },
  V2: { section: 'GAP Verbal', title: 'Analogies', instruction: 'Choose the best pair of words to fill in the gaps (in the order provided), so that the relationship between the words to the right of the equal sign (=) is most like the relationship between the words to the left of it (the order of the words in the pairs matters).' },
  V3: { section: 'GAP Verbal', title: 'Synonym and antonym', instruction: 'From the first set of four options (A–D), choose the expression closest in meaning to the underlined expression in the context of the sentence (synonym). From the second set (E–H), choose the expression closest to its opposite meaning (antonym).' },
  V4: { section: 'GAP Verbal', title: 'Inconsistent part', instruction: 'The text contains one part whose meaning does not correspond with the overall meaning of the text. Choose the option containing the part which is not consistent with the overall meaning of the text.' },
  V5: { section: 'GAP Verbal', title: 'Inference', instruction: 'Answer the question using only the information given in or implied by the text.' },
  V6: { section: 'GAP Verbal', title: 'Long text', instruction: 'Read the text and choose the best answer using only the information given in or implied by the text.',
    stimulus: 'At the Willow Creek field station, researchers spent three summers watching 24 wild ravens solve a food puzzle: a piece of meat hung on a 60-centimetre string from a branch. A raven could only reach it by pulling the string up in stages and stepping on the loops. In the first summer, 9 of the 24 birds solved the puzzle within a week. The next summer the same 24 birds were tested again, and this time 16 succeeded, including all 9 from the previous year. The team also noticed that young ravens under one year old watched the successful birds more closely than adults did, and 11 of the 13 juveniles eventually succeeded, compared with only 5 of the 11 adults. The researchers concluded that ravens learn mainly by watching others, although they admit the sample is small and the test covered only one type of task.' },
  A1: { section: 'GAP Analytical', title: 'Graph and table reading', instruction: 'No calculator. Use only the data below. Calculate, do not estimate from pictures.',
    stimulus: 'Evening concerts (visitors in hundreds). Sold out = at least 500 tickets sold.\nMon: tickets 6.2, came 5.1 | Tue: tickets 4.8, came 4.9 | Wed: tickets 5.5, came 4.4 | Thu: tickets 3.9, came 4.2 | Fri: tickets 7.1, came 6.8 | Sat: tickets 6.6, came 6.9' },
  A2: { section: 'GAP Analytical', title: 'Distance table', instruction: 'Use only the distances in the table (km, direct roads).',
    stimulus: 'Annfield–Brookton 30, Annfield–Castleton 45, Annfield–Dunmore 25, Annfield–Eastvale 50 | Brookton–Castleton 20, Brookton–Dunmore 40, Brookton–Eastvale 35 | Castleton–Dunmore 55, Castleton–Eastvale 15 | Dunmore–Eastvale 60' },
  A3: { section: 'GAP Analytical', title: 'Quantitative comparison', instruction: 'Compare the values of the expressions on the left and on the right. (A) the value on the left is greater, (B) the value on the right is greater, (C) the values are equal, (D) it cannot be determined which value is greater. Additional information may be given above the expressions.' },
  A4: { section: 'GAP Analytical', title: 'Data sufficiency', instruction: 'Using all the information, knowledge of mathematics and well-known facts, decide whether the information is sufficient to determine an unambiguous answer to the question asked.' },
  A5: { section: 'GAP Analytical', title: 'Word problems', instruction: 'Solve the following math problem. No calculator.' },
  A6: { section: 'GAP Analytical', title: 'Mathematisation', instruction: 'Solve the following problem based on a text or a mathematical expression.' },
  A7: { section: 'GAP Analytical', title: 'Logic set 1', instruction: 'Each task is based on a text and a set of conditions. Pay attention to which conditions apply to the whole set of tasks and which to one task only. Make use of a sketch when appropriate.',
    stimulus: 'Four trophies — Gold, Silver, Bronze, Tin — stand in positions 1 to 4 (left to right), one per position. Gold stands somewhere left of Silver. Bronze stands at an end (position 1 or 4). Tin stands immediately next to Silver. Gold is not in position 1.' },
  A8: { section: 'GAP Analytical', title: 'Logic set 2', instruction: 'Each task is based on a text and a set of conditions. Pay attention to which conditions apply to the whole set of tasks and which to one task only. Make use of a sketch when appropriate.',
    stimulus: 'Five club members (girls Ann and Cate; boys Ben, Dan and Eli) each cast two votes — either for two different proposals or both for one. Proposals: Trip, Pet, Save, Gear. Ann voted Trip + Gear. Cate gave both votes to Trip. Dan gave both votes to Save. Ben voted Save + Pet. Eli voted Pet + one unknown proposal.' },
};

export const QUANT_OPTIONS = [
  'The value on the left is greater than the value on the right.',
  'The value on the right is greater than the value on the left.',
  'The value on the right is the same as the value on the left.',
  'It cannot be determined which value is greater.',
];
export const SUFF_OPTIONS = [
  'Statement (1) alone is sufficient, but statement (2) alone is not sufficient.',
  'Statement (2) alone is sufficient, but statement (1) alone is not sufficient.',
  'Both statements together are sufficient, but neither statement alone is sufficient.',
  'Either statement alone is sufficient.',
];

export const MOCK_QUESTIONS = [
  // ---- V1 text completion ----
  { block: 'V1', section: 'GAP Verbal', q: 'The lecture was ___ fascinating that students stayed ___ the very end.', options: ['so – until', 'very – for', 'quite – to', 'rather – till'], answer: 0, explain: 'Only "so … that" fits the grammar.' },
  { block: 'V1', section: 'GAP Verbal', q: '___ the storm, the roads were ___ flooded that the marathon had to be ___.', options: ['After – so – postponed', 'Before – very – finished', 'Without – quite – moved', 'Against – rather – watched'], answer: 0, explain: '"so flooded that" is the only grammatical fit; the marathon was postponed.' },
  { block: 'V1', section: 'GAP Verbal', q: 'The bakery applied for a grant to open new ___ provided it sources flour locally and keeps ___ hygiene standards.', options: ['branches – strict', 'ovens – loose', 'shops – low', 'counters – weak'], answer: 0, explain: 'New branches with strict standards; the other pairs contradict themselves.' },
  // ---- V2 analogies ----
  { block: 'V2', section: 'GAP Verbal', q: 'QUICK : ___ = ___ : SLOWNESS', options: ['quickness – slow', 'speed – sluggishness', 'fast – slowly', 'rush – lazy'], answer: 0, explain: 'Adjective : its noun on both sides (QUICK : quickness = slow : SLOWNESS).' },
  { block: 'V2', section: 'GAP Verbal', q: 'BIRD : ___ = ___ : DEN', options: ['nest – bear', 'egg – cave', 'wing – wolf', 'feather – fox'], answer: 0, explain: 'Dweller : home on both sides.' },
  { block: 'V2', section: 'GAP Verbal', q: 'WRITE : ___ = ___ : MEAL', options: ['novel – cook', 'author – eat', 'pen – kitchen', 'read – taste'], answer: 0, explain: 'Activity : its product (WRITE : novel = cook : MEAL).' },
  // ---- V3 vocabulary (two answers each) ----
  { block: 'V3', section: 'GAP Verbal', q: 'The steep narrow path was arduous, but the view was worth it. (underlined: arduous)', options: ['easy', 'exhausting', 'short', 'scenic'], answer: 1, optionsB: ['effortless', 'ugly', 'long', 'boring'], answerB: 0, labelA: 'Closest in meaning (A–D)', labelB: 'Closest to opposite (E–H)', explain: 'Arduous = exhausting; opposite = effortless.' },
  { block: 'V3', section: 'GAP Verbal', q: 'Her reply was curt and left everyone puzzled. (underlined: curt)', options: ['abrupt', 'witty', 'gentle', 'long'], answer: 0, optionsB: ['courteous', 'clever', 'quiet', 'rapid'], answerB: 0, labelA: 'Closest in meaning (A–D)', labelB: 'Closest to opposite (E–H)', explain: 'Curt = abrupt (rudely short); opposite = courteous.' },
  { block: 'V3', section: 'GAP Verbal', q: 'The committee praised his meticulous preparation. (underlined: meticulous)', options: ['quick', 'thorough', 'boring', 'late'], answer: 1, optionsB: ['careless', 'early', 'dull', 'hasty'], answerB: 0, labelA: 'Closest in meaning (A–D)', labelB: 'Closest to opposite (E–H)', explain: 'Meticulous = thorough; opposite = careless.' },
  // ---- V4 odd part out ----
  { block: 'V4', section: 'GAP Verbal', q: 'Domestic cats are solitary hunters. Which part does NOT fit? (1) They usually hunt alone, mostly at dusk and at night. (2) Their eyes let in far more light than human eyes, so they see well in the dark. (3) Like their wild ancestors, they rely on teamwork and share large prey within the group. (4) After a hunt, a cat often sleeps for many hours.', options: ['Part (1)', 'Part (2)', 'Part (3)', 'Part (4)'], answer: 2, explain: 'Teamwork and sharing prey contradict the solitary hunting described in the title and part (1).' },
  { block: 'V4', section: 'GAP Verbal', q: 'The town library is open every day of the week. Which part does NOT fit? (1) Since the renovation in 2019, it has offered a larger reading room. (2) Readers may borrow up to six books for one month. (3) On Sundays, however, the building stays closed to the public. (4) Books returned late cost a small fine per day.', options: ['Part (1)', 'Part (2)', 'Part (3)', 'Part (4)'], answer: 2, explain: 'Closing on Sundays contradicts "open every day of the week".' },
  { block: 'V4', section: 'GAP Verbal', q: 'Some facts about the Sun. Which part does NOT fit? (1) The Sun contains over 99% of the mass of the solar system. (2) Its light needs about eight minutes to reach the Earth. (3) Because light is so fast, we see the Sun exactly as it is at this very moment. (4) Dark sunspots are areas cooler than their surroundings.', options: ['Part (1)', 'Part (2)', 'Part (3)', 'Part (4)'], answer: 2, explain: 'If light needs eight minutes, we see the Sun as it was eight minutes ago — part (3) contradicts part (2).' },
  { block: 'V4', section: 'GAP Verbal', q: 'Running safely: advice for beginners. Which part does NOT fit? (1) Regular running strengthens the heart and lungs. (2) Beginners should increase their weekly distance gradually, by about ten percent. (3) The fastest way to improve is therefore to double the distance every week. (4) Good shoes reduce the risk of injury.', options: ['Part (1)', 'Part (2)', 'Part (3)', 'Part (4)'], answer: 2, explain: 'Doubling the distance contradicts the gradual 10% rule and the safety theme.' },
  { block: 'V4', section: 'GAP Verbal', q: 'Honeybees survive the winter as a team. Which part does NOT fit? (1) A colony lives with one queen and thousands of workers. (2) Before winter, the workers store honey as food. (3) In the cold, the bees cluster tightly and shiver to produce heat. (4) To save heat, each bee spends the winter alone in its own wax cell.', options: ['Part (1)', 'Part (2)', 'Part (3)', 'Part (4)'], answer: 3, explain: 'Spending the winter alone contradicts the team theme and the cluster in part (3).' },
  // ---- V5 short inference ----
  { block: 'V5', section: 'GAP Verbal', q: 'Emperor penguins breed in the Antarctic winter. Males keep the single egg warm on their feet for about two months without eating. Females return from the sea to feed the chick. What follows with certainty?', options: ['Male emperors fast for weeks while breeding.', 'All penguin species breed in winter.', 'Females never leave the colony.', 'Chicks hatch in summer.'], answer: 0, explain: 'Two months without eating = fasting for weeks; the rest overgeneralise or contradict.' },
  { block: 'V5', section: 'GAP Verbal', q: 'The oldest café in town has served the same dark roast since 1962. The owner says the recipe never changed, although suppliers changed three times. What follows with certainty?', options: ['The café opens every day.', 'The current beans may differ from the 1962 beans.', 'Dark roast is the healthiest coffee.', 'The café closed in 1962.'], answer: 1, explain: 'New suppliers can mean different beans; the recipe claim does not guarantee it.' },
  { block: 'V5', section: 'GAP Verbal', q: 'The Gull Rock lighthouse was automated in 1987. Before that, three keepers lived there in shifts. Since automation, nobody lives on the rock. What follows with certainty?', options: ['Someone lives on Gull Rock today.', 'The lighthouse was built in 1987.', 'At least three people once lived on the rock.', 'Ships no longer need the lighthouse.'], answer: 2, explain: 'Three keepers in shifts lived there; the rest is unsupported or contradicted.' },
  { block: 'V5', section: 'GAP Verbal', q: 'In 2023 the city built 40 km of new cycle lanes. Bike traffic rose 25% that year, while downtown car traffic fell slightly. What follows with certainty?', options: ['The lanes caused the car traffic drop.', 'Bike traffic grew in 2023.', '40 km of lanes were removed.', 'Nobody drives downtown anymore.'], answer: 1, explain: 'Only the growth is stated; causation is not proven.' },
  { block: 'V5', section: 'GAP Verbal', q: 'The first school dictionary had 8,000 entries. The second added 2,000 entries and removed 500 outdated ones. What follows with certainty?', options: ['The second edition has 9,500 entries.', 'The first edition had 10,000 entries.', 'Only 500 entries were added.', 'The dictionary shrank.'], answer: 0, explain: '8,000 + 2,000 − 500 = 9,500.' },
  { block: 'V5', section: 'GAP Verbal', q: 'Mount Ida last erupted 400 years ago. Geologists monitor it constantly but cannot predict the next eruption precisely. What follows with certainty?', options: ['Mount Ida erupts every 400 years.', 'Geologists know exactly when it will erupt.', 'Mount Ida has erupted at least once.', 'The volcano is extinct.'], answer: 2, explain: 'The text states it last erupted 400 years ago; the rest is unsupported or contradicted.' },
  // ---- V6 long text ----
  { block: 'V6', section: 'GAP Verbal', q: 'How long was the string in the puzzle?', options: ['60 centimetres', '16 centimetres', '24 centimetres', 'One metre'], answer: 0, explain: 'Stated in the text.' },
  { block: 'V6', section: 'GAP Verbal', q: 'How many birds solved the puzzle in the first summer?', options: ['24', '16', '9', '11'], answer: 2, explain: '9 of the 24 in the first summer.' },
  { block: 'V6', section: 'GAP Verbal', q: 'Which two statements are true? I. All 9 first-summer solvers also succeeded in the second summer. II. More than half of the 24 ravens succeeded in the second summer. III. Adults succeeded more often than juveniles. IV. The test covered several task types.', options: ['I and II', 'I and III', 'II and IV', 'III and IV'], answer: 0, explain: 'I is stated; 16 of 24 is more than half; juveniles did better (11/13 vs 5/11); only one task type.' },
  { block: 'V6', section: 'GAP Verbal', q: 'Which two statements are true? I. Juveniles watched successful birds more closely than adults. II. Exactly 13 juveniles were tested. III. All adults failed. IV. The string was 60 metres long.', options: ['II and III', 'I and II', 'III and IV', 'I and IV'], answer: 1, explain: 'I and II are stated; 5 adults succeeded; the string was 60 centimetres.' },
  { block: 'V6', section: 'GAP Verbal', q: 'What can be inferred with certainty?', options: ['Watching others played no role.', 'Juveniles outperformed adults in this test.', 'Ravens cannot learn alone.', 'The findings apply to all bird species.'], answer: 1, explain: '11/13 juveniles vs 5/11 adults; the rest overreach.' },
  { block: 'V6', section: 'GAP Verbal', q: 'What did the researchers conclude?', options: ['Ravens learn mainly by watching others.', 'Only adults can solve the puzzle.', 'String puzzles are too hard for ravens.', 'The sample proves all raven behaviour.'], answer: 0, explain: 'Stated, with the small-sample caution.' },
  // ---- A1 graph/table ----
  { block: 'A1', section: 'GAP Analytical', q: 'How many sold-out concerts had fewer visitors than tickets sold?', options: ['1', '2', '3', '4'], answer: 2, explain: 'Sold out (≥5.0): Mon, Wed, Fri, Sat. Fewer came at Mon, Wed, Fri = 3.' },
  { block: 'A1', section: 'GAP Analytical', q: 'At how many concerts did more people come than tickets were sold?', options: ['1', '2', '4', '3'], answer: 3, explain: 'Tue, Thu and Sat = 3.' },
  { block: 'A1', section: 'GAP Analytical', q: 'How many visitors actually came on Friday and Saturday together?', options: ['1,370', '1,270', '1,470', '1,170'], answer: 0, explain: '(6.8 + 6.9) × 100 = 1,370.' },
  // ---- A2 distance table ----
  { block: 'A2', section: 'GAP Analytical', q: 'By how many km is direct Annfield → Castleton shorter than via Brookton?', options: ['3 km', '8 km', '5 km', '10 km'], answer: 2, explain: 'Direct 45 km; via Brookton 30 + 20 = 50 km; difference 5 km.' },
  { block: 'A2', section: 'GAP Analytical', q: 'Mia goes Dunmore → Eastvale with exactly one stop. Shortest distance?', options: ['70 km', '65 km', '75 km', '80 km'], answer: 0, explain: 'Via Castleton: 55 + 15 = 70 km (via Annfield or Brookton: 75 km).' },
  { block: 'A2', section: 'GAP Analytical', q: 'Which town has the lowest total distance to the other four?', options: ['Brookton', 'Annfield', 'Dunmore', 'Castleton'], answer: 0, explain: 'Brookton: 30+20+40+35 = 125 km, the lowest.' },
  // ---- A3 quantitative comparison ----
  { block: 'A3', section: 'GAP Analytical', template: 'quant', left: 'Distance covered by the winner (36 km/h in 5 hours)', right: 'Distance covered by the last runner (160 km in 5 hours)', q: 'Compare the two distances.', answer: 0, explain: 'Left = 180 km, right = 160 km.' },
  { block: 'A3', section: 'GAP Analytical', template: 'quant', left: "John's average speed over the first kilometre, which took him 5 minutes", right: "John's average speed over the third kilometre (the second kilometre took 25% longer than the first; the third took 20% less time than the second)", q: 'Compare the two speeds.', answer: 2, explain: 'Second km: 5 × 1.25 = 6.25 min; third km: 6.25 × 0.8 = 5 min. Both 12 km/h.' },
  { block: 'A3', section: 'GAP Analytical', template: 'quant', left: 'Total price of 3 glasses (4 glasses + 2 mugs = 360; 2 glasses + 3 mugs = 360)', right: 'Total price of 2 mugs', q: 'Compare the two totals.', answer: 1, explain: 'Glass = 45, mug = 90. Left = 135, right = 180.' },
  { block: 'A3', section: 'GAP Analytical', template: 'quant', left: 'Side AB of triangle ABC (angle A = 90°, angle B = 50°)', right: 'Side AC of the same triangle', q: 'Compare the two sides.', answer: 1, explain: 'AC faces 50°, AB faces 40°; longer side faces the larger angle.' },
  { block: 'A3', section: 'GAP Analytical', template: 'quant', left: 'Largest possible area of a right-angled triangle with hypotenuse 10 cm', right: 'Largest possible area of a right-angled triangle with hypotenuse 6 cm', q: 'Compare the two areas.', answer: 0, explain: 'Max area = h²/4: 25 vs 9 cm².' },
  { block: 'A3', section: 'GAP Analytical', template: 'quant', left: 'x + 1/x, where x > 0', right: '2', q: 'Compare the two values.', answer: 3, explain: 'x + 1/x ≥ 2 with equality at x = 1, so greater-or-equal — cannot say strictly greater.' },
  // ---- A4 data sufficiency ----
  { block: 'A4', section: 'GAP Analytical', template: 'suff', q: 'Is the positive integer n greater than 50?', s1: 'n is divisible by 7 and n is less than 60.', s2: 'n is a multiple of 8.', answer: 2, explain: '(1): n is 7, 14, …, 56 — some above 50, some not. (2): unbounded. Together: only 56 fits, and 56 > 50.' },
  { block: 'A4', section: 'GAP Analytical', template: 'suff', q: 'Will the train arrive before 9:00?', s1: 'It left at 7:00 and the ride takes 2 hours.', s2: 'It was delayed by 30 minutes.', answer: 0, explain: '(1) alone fixes arrival at exactly 9:00 — a definite No. (2) alone lacks the schedule.' },
  // ---- A5 word problems ----
  { block: 'A5', section: 'GAP Analytical', q: 'Jane cycles at 5 m/s with a 240 m head start. Lucy follows at 7 m/s. When does Lucy catch Jane?', options: ['After 2 minutes', 'After 1 minute 30 seconds', 'After 2 minutes 30 seconds', 'After 3 minutes'], answer: 0, explain: '5t + 240 = 7t → t = 120 s.' },
  { block: 'A5', section: 'GAP Analytical', q: 'One watch gains 3 minutes per hour, another loses 2 minutes per hour. After how long do they differ by one hour?', options: ['6 hours', '12 hours', '18 hours', '24 hours'], answer: 1, explain: 'They drift apart 5 min/h; 60 min needs 12 h.' },
  { block: 'A5', section: 'GAP Analytical', q: 'A 4-digit code uses digits 1–9, no digit twice. How many codes exist?', options: ['3,024', '4,536', '10,000', '6,561'], answer: 0, explain: '9 × 8 × 7 × 6 = 3,024.' },
  { block: 'A5', section: 'GAP Analytical', q: 'In square ABCD, K is the midpoint of AB and L the midpoint of BC. What is the ratio of triangle KLB to triangle ADL?', options: ['2 : 1', '1 : 4', '1 : 2', 'None is correct'], answer: 1, explain: 'KLB = ½ · (s/2) · (s/2) = s²/8; ADL = ½ · s · s = s²/2 (base AD, height = side). Ratio 1 : 4.' },
  { block: 'A5', section: 'GAP Analytical', q: '25 balls: white and blue are equally likely, each twice as likely as red. How many blue balls?', options: ['5', '8', '10', '12'], answer: 2, explain: '2x + 2x + x = 25 → x = 5, blue = 10.' },
  // ---- A6 mathematisation ----
  { block: 'A6', section: 'GAP Analytical', q: 'In m days Dan earns 3 times more than Eve earns in a quarter of that time (daily pay d and e). Which equation fits?', options: ['m·d = 3·e·m', '4·m·d = 3·e·m', 'm·d = 12·e·m', '3·m·d = 4·e·m'], answer: 1, explain: 'm·d = 3·e·(m/4), i.e. 4md = 3em.' },
  { block: 'A6', section: 'GAP Analytical', q: 'What belongs in place of ? to make the equality hold? x² + ? = (x + 3)(x − 1)', options: ['2x + 3', '−2x − 3', '2x − 3', 'x − 3'], answer: 2, explain: 'Right side = x² + 2x − 3, so ? = 2x − 3.' },
  { block: 'A6', section: 'GAP Analytical', q: 'f(x) = 3·g(x) and g(x) = x² − 2x + 1. What is f(3)?', options: ['6', '9', '15', '12'], answer: 3, explain: 'g(3) = 9 − 6 + 1 = 4; f(3) = 12.' },
  // ---- A7 logic set (verified by brute force: valid orders B,G,S,T and B,G,T,S) ----
  { block: 'A7', section: 'GAP Analytical', q: 'Which could be the trophy order from position 1 to 4?', options: ['Gold, Silver, Tin, Bronze', 'Bronze, Gold, Tin, Silver', 'Tin, Bronze, Gold, Silver', 'Gold, Bronze, Silver, Tin'], answer: 1, explain: 'Only B,G,T,S satisfies all four conditions.' },
  { block: 'A7', section: 'GAP Analytical', q: 'Which statement contradicts the conditions?', options: ['Gold stands second.', 'Tin stands fourth.', 'Silver stands second.', 'Silver stands third.'], answer: 2, explain: 'With Silver second, Tin must be 1st or 3rd, forcing Gold into banned position 1.' },
  { block: 'A7', section: 'GAP Analytical', q: 'Where can Bronze stand?', options: ['Only first', 'Only fourth', 'First or fourth', 'Anywhere'], answer: 0, explain: 'Both valid orders (B,G,S,T and B,G,T,S) place Bronze first.' },
  // ---- A8 voting set (verified: Gear total 1 or 2; Eli→Save gives Save = 4) ----
  { block: 'A8', section: 'GAP Analytical', q: 'What could be the total votes for Gear?', options: ['Only 1', 'Only 2', '1 or 2', '2 or 3'], answer: 2, explain: 'Ann gives Gear 1 vote; Eli’s unknown vote may add one more.' },
  { block: 'A8', section: 'GAP Analytical', q: 'Which statement contradicts the conditions?', options: ['Ben and Dan both voted for Trip.', 'Only Ann voted for Gear.', 'Dan used both votes for the same proposal.', 'Pet got 3 votes in total.'], answer: 0, explain: 'Neither Ben nor Dan voted Trip (Ben: Save+Pet, Dan: Save×2, Eli: Pet+?). The rest are all possible.' },
  { block: 'A8', section: 'GAP Analytical', q: 'If Eli’s unknown vote went to Save, how many votes would Save get?', options: ['2', '3', '4', '5'], answer: 2, explain: 'Dan’s 2 + Ben’s 1 + Eli’s 1 = 4.' },

  // ---- English B2 (unchanged bank) ----
  { block: 'EN', section: 'English', q: 'She ___ in Prague since 2020.', options: ['lives', 'has lived', 'lived', 'will live'], answer: 1, explain: 'Since → present perfect.' },
  { block: 'EN', section: 'English', q: 'If it rains, we ___ at home.', options: ['stay', 'will stay', 'stayed', 'would stay always'], answer: 1, explain: 'First conditional.' },
  { block: 'EN', section: 'English', q: 'Have you ___ been to London?', options: ['did', 'ever', 'yet done', 'already did'], answer: 1, explain: 'Have you ever…' },
  { block: 'EN', section: 'English', q: 'The book ___ written in 2020.', options: ['is', 'was', 'has', 'were'], answer: 1, explain: 'Past passive.' },
  { block: 'EN', section: 'English', q: 'She is interested ___ music.', options: ['on', 'in', 'at', 'for to'], answer: 1, explain: 'Interested in.' },
  { block: 'EN', section: 'English', q: 'Choose the correct sentence.', options: ['much informations', 'a lot of information', 'many informations', 'an information'], answer: 1, explain: 'Information is uncountable.' },
  { block: 'EN', section: 'English', q: 'He has ___ finished.', options: ['yet', 'already', 'still not yet', 'ever not'], answer: 1, explain: 'Already in affirmative sentences.' },
  { block: 'EN', section: 'English', q: 'I ___ TV when he called.', options: ['watched', 'was watching', 'watch', 'have watched yesterday'], answer: 1, explain: 'Past continuous for the interrupted action.' },
  { block: 'EN', section: 'English', q: 'This is the house ___ I grew up.', options: ['where', 'which always', 'what', 'whose is'], answer: 0, explain: 'Where = place.' },
  { block: 'EN', section: 'English', q: 'You ___ smoke here, it is forbidden.', options: ["mustn't", "don't have to", 'should to', 'must to'], answer: 0, explain: "Mustn't = prohibition." },
  { block: 'EN', section: 'English', q: 'By 2030, they ___ the bridge.', options: ['will have built', 'have built yesterday', 'builded', 'are build'], answer: 0, explain: 'Future perfect.' },
  { block: 'EN', section: 'English', q: '___ the rain stopped, the match continued without delay.', options: ['Unless', 'As soon as', 'Despite', 'In spite'], answer: 1, explain: '"As soon as" + clause; "despite / in spite (of)" need a noun, and "unless" makes no sense here.' },

  // ---- Math (unchanged bank) ----
  { block: 'M', section: 'Math', q: 'Solve: 5x − 7 = 18', options: ['4', '5', '6', '7'], answer: 1, explain: '5x = 25.' },
  { block: 'M', section: 'Math', q: 'x² − 5x + 6 = 0. Roots?', options: ['1, 6', '2, 3', '−2, −3', '0, 6'], answer: 1, explain: '(x−2)(x−3) = 0.' },
  { block: 'M', section: 'Math', q: '2x² − 8 = 0', options: ['x = 2 only', 'x = ±2', 'x = 4', 'no solution'], answer: 1, explain: 'x² = 4.' },
  { block: 'M', section: 'Math', q: 'f(x) = 3x − 1, f(4) = ?', options: ['8', '11', '12', '7'], answer: 1, explain: '12 − 1 = 11.' },
  { block: 'M', section: 'Math', q: 'Circle with radius 3, area?', options: ['6π', '9π', '3π', '12π'], answer: 1, explain: 'πr².' },
  { block: 'M', section: 'Math', q: 'A die is thrown once. Probability of an even number?', options: ['1/6', '1/3', '1/2', '2/3'], answer: 2, explain: '3/6.' },
  { block: 'M', section: 'Math', q: '1/2 + 1/3 = ?', options: ['2/5', '5/6', '1/6', '2/6'], answer: 1, explain: '3/6 + 2/6.' },
  { block: 'M', section: 'Math', q: 'Right triangle with legs 3 and 4. Hypotenuse?', options: ['5', '6', '7', '8'], answer: 0, explain: 'Pythagoras, 3-4-5.' },
  { block: 'M', section: 'Math', q: '15% of 200?', options: ['20', '25', '30', '35'], answer: 2, explain: '0.15 × 200.' },
  { block: 'M', section: 'Math', q: 'log₁₀(1000) = ?', options: ['2', '3', '10', '100'], answer: 1, explain: '10³.' },
  { block: 'M', section: 'Math', q: '3, 7, 11, … next?', options: ['14', '15', '16', '18'], answer: 1, explain: 'Difference 4.' },
  { block: 'M', section: 'Math', q: 'C(5,2) = ?', options: ['8', '10', '20', '25'], answer: 1, explain: '5·4/2.' },
  { block: 'M', section: 'Math', q: '|x − 3| = 5 → x?', options: ['8 only', '8 or −2', '−8 only', '3 or 5'], answer: 1, explain: 'x − 3 = ±5.' },
  { block: 'M', section: 'Math', q: 'Cube with side 3, volume?', options: ['9', '18', '27', '36'], answer: 2, explain: '3³.' },
  { block: 'M', section: 'Math', q: 'Line through (0,0) and (2,6). Slope?', options: ['2', '3', '6', '1/3'], answer: 1, explain: '6/2.' },
  { block: 'M', section: 'Math', q: '2x + 3 > 9 → ?', options: ['x > 3', 'x > 6', 'x < 3', 'x > 2'], answer: 0, explain: '2x > 6.' },
  { block: 'M', section: 'Math', q: '2³ · 2² = ?', options: ['2⁵ = 32', '2⁶ = 64', '4⁵', '4⁶'], answer: 0, explain: 'Add exponents.' },
  { block: 'M', section: 'Math', q: 'Mean of 4, 6, 8?', options: ['5', '6', '7', '18'], answer: 1, explain: '(4+6+8)/3 = 6.' },
];
