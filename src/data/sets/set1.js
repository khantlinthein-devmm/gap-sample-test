// GAP practice test 1 — 54 ORIGINAL items following the real SCIO GAP layout (13 Jan 2025 paper):
// Q1–3 V1 completion · Q4–6 V2 analogies · Q7–9 V3 synonym/antonym · Q10–14 V4 inconsistent part ·
// Q15–20 V5 inference · Q21–26 V6 long text · Q27–29 A1 graph · Q30–32 A2 table ·
// Q33–38 A3 comparison · Q39–40 A4 sufficiency · Q41–45 A5 word problems · Q46–48 A6 mathematisation ·
// Q49–51 A7 logic set 1 · Q52–54 A8 logic set 2.
// answer / answerB are 0-based option indexes. Logic sets verified by brute force.

export default {
  id: 'set1',
  title: 'Practice test 1',
  blocks: {
    V6: {
      stimulus: `Four days, full pay: what a British trial revealed

In 2022, around sixty British companies took part in a six-month experiment: their employees worked four days a week instead of five, while keeping their full salaries. The organisers, a non-profit group campaigning for shorter working hours, worked together with researchers from two universities, who collected data before, during and after the trial.

The companies varied widely – from a small fish-and-chip shop to a large online bank – but most of them had fewer than fifty employees. Before the trial started, each company had to plan how to keep its output at the same level. Many cut the length of meetings, introduced "focus hours" without e-mails, or automated routine tasks.

The results surprised even some of the managers. Company revenue stayed roughly the same on average, and actually rose slightly in a number of firms. The number of sick days fell by about two thirds, and far fewer employees left their jobs than in the same period of the previous year. Employees reported less stress, better sleep and more time for their families.

Not everything went smoothly, however. In some firms, employees said that their four working days had become so intense that they were exhausted by Thursday evening. A few managers complained that customers expected them to be available on the fifth day as well. Two companies returned to the five-day week as soon as the trial ended, and several others continued only in a modified form.

Critics point out that the participating companies volunteered for the trial, so they were probably those most likely to succeed. They also note that six months may be too short to show long-term effects. The researchers admit these limits but argue that the results are strong enough to justify larger experiments, including in the public sector.`,
    },
    A1: {
      title: 'Graph',
      stimulus: 'The graph shows the number of visitors (in hundreds) to three outdoor swimming pools in the months May to September.',
      chart: {
        type: 'line',
        title: 'VISITORS TO SWIMMING POOLS',
        yLabel: 'visitors [hundreds]',
        yMax: 16, yStep: 2,
        xLabels: ['May', 'June', 'July', 'August', 'September'],
        series: [
          { name: 'Lake Park', values: [4, 9, 15, 12, 5] },
          { name: 'City Pool', values: [8, 10, 11, 11, 9] },
          { name: 'Aqua Centre', values: [6, 7, 9, 10, 8] },
        ],
      },
    },
    A2: {
      title: 'Table',
      stimulus: 'The table shows data from five shops on one Saturday. Every customer who bought something is counted once.',
      table: {
        head: ['shop', 'customers who entered', 'customers who bought something', 'total sales (CZK)'],
        rows: [
          ['A', '400', '300', '60,000'],
          ['B', '250', '200', '50,000'],
          ['C', '500', '300', '45,000'],
          ['D', '200', '180', '36,000'],
          ['E', '300', '150', '45,000'],
        ],
      },
    },
    A7: {
      stimulus: `Five friends – Eva, Filip, Gina, Hugo and Ivan – sit on a bench in positions 1 to 5 (numbered from left to right), one person per position. We know that:
• Gina sits at one end of the bench.
• Hugo sits directly next to Eva.
• Filip sits somewhere to the right of Ivan.
• Eva does not sit in position 3.
• Filip does not sit in position 5 and Ivan does not sit in position 1.`,
    },
    A8: {
      stimulus: `Four runners – Kim, Leo, Mia and Noah – took part in a race. Each wore a different start number (1, 2, 3, 4) and each finished in a different place (1st to 4th). We know that:
• The runner wearing number 3 won the race.
• Leo finished directly behind Kim.
• Mia wears number 1 and did not finish last.
• Noah wears an even number.`,
    },
  },
  questions: [
    // ---- V1 completion (Q1–3) ----
    { block: 'V1', q: 'Despite the ________ forecast, the organisers held the concert outdoors, and fortunately the evening turned out ________.', options: ['gloomy – dry', 'sunny – rainy', 'favourable – stormy', 'accurate – predictable'], answer: 0, explain: '"Despite" needs a forecast that spoke against an outdoor concert; "fortunately" needs a good outcome.' },
    { block: 'V1', q: "Because the museum's collection had grown far too ________ for the old building, the city ________ funds for a new wing.", options: ['small – refused', 'narrow – borrowed', 'valuable – stole', 'large – allocated'], answer: 3, explain: 'A collection too large for the building leads to money (funds allocated) for a new wing.' },
    { block: 'V1', q: 'The new medicine is ________ only on prescription, because in higher doses it can cause serious ________ effects, so doctors must ________ patients carefully.', options: ['sold – main – ignore', 'forbidden – positive – avoid', 'available – side – monitor', 'free – useful – release'], answer: 2, explain: 'available on prescription · side effects · monitor patients.' },

    // ---- V2 analogies (Q4–6) ----
    { block: 'V2', q: 'HUNGER : ________ = THIRST : ________', options: ['food – drink', 'eat – water', 'stomach – throat', 'bread – desert'], answer: 0, explain: 'A need : what satisfies it. "eat – water" mixes a verb with a noun.' },
    { block: 'V2', q: 'TEACHER : ________ = DOCTOR : ________', options: ['school – patient', 'pupil – hospital', 'lesson – nurse', 'pupil – patient'], answer: 3, explain: 'Professional : the person they serve. A and B mix a place with a person.' },
    { block: 'V2', q: 'SPRING : ________ = ________ : WINTER', options: ['flower – snow', 'warm – cold', 'summer – autumn', 'March – December'], answer: 2, explain: 'SPRING is followed by summer, as autumn is followed by WINTER. In the other pairs the order is reversed on the right.' },

    // ---- V3 synonym / antonym (Q7–9) ----
    { block: 'V3', q: 'The committee rejected the proposal as too costly for a small town with a limited budget.', word: 'costly', options: ['expensive', 'risky', 'complicated', 'popular'], answer: 0, optionsB: ['simple', 'inexpensive', 'safe', 'rare'], answerB: 1, explain: 'costly = expensive; opposite = inexpensive.' },
    { block: 'V3', q: 'Her explanation was so lucid that even beginners understood the theory at once.', word: 'lucid', options: ['brief', 'clear', 'loud', 'modern'], answer: 1, optionsB: ['confusing', 'silent', 'lengthy', 'ancient'], answerB: 0, explain: 'lucid = clear; opposite = confusing.' },
    { block: 'V3', q: 'The old bridge was considered hazardous, so the council closed it to all traffic.', word: 'hazardous', options: ['dangerous', 'ugly', 'narrow', 'historic'], answer: 0, optionsB: ['wide', 'modern', 'safe', 'beautiful'], answerB: 2, explain: 'hazardous = dangerous; opposite = safe.' },

    // ---- V4 inconsistent part (Q10–14) ----
    { block: 'V4', text: 'Many people believe that cold weather alone makes us ill. In fact, colds are caused by viruses, not by low temperatures. In winter, however, people spend more time indoors, close to one another, so viruses spread more easily. Sitting in a cold draught is therefore the main reason why we catch colds. Washing hands regularly remains one of the best protections.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Many people believe that cold weather alone makes us ill.', 'In fact, colds are caused by viruses, not by low temperatures.', 'Sitting in a cold draught is therefore the main reason why we catch colds.', 'Washing hands regularly remains one of the best protections.'], answer: 2, explain: 'The text says colds are caused by viruses, not by the cold — a draught cannot be the main reason.' },
    { block: 'V4', text: "The town's new library has quickly become popular. Hardly anyone, however, has visited it since its opening in March. Families especially appreciate the children's corner with games and picture books. Students like the quiet study rooms, which are often fully booked during the exam period. The town therefore plans to extend the opening hours at weekends.", q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Hardly anyone, however, has visited it since its opening in March.', "Families especially appreciate the children's corner with games and picture books.", 'Students like the quiet study rooms, which are often fully booked during the exam period.', 'The town therefore plans to extend the opening hours at weekends.'], answer: 0, explain: 'The rest of the text describes a popular, busy library.' },
    { block: 'V4', text: 'Bamboo is one of the fastest-growing plants on Earth. Some species can grow almost a metre in a single day. Because it grows so quickly, bamboo can be harvested again within a few years without replanting. Unfortunately, it takes several decades before a bamboo plant can be harvested for the first time. Builders value it for being light but surprisingly strong. Today, bamboo floors are also common in Europe.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Some species can grow almost a metre in a single day.', 'Unfortunately, it takes several decades before a bamboo plant can be harvested for the first time.', 'Builders value it for being light but surprisingly strong.', 'Today, bamboo floors are also common in Europe.'], answer: 1, explain: 'Decades before the first harvest contradicts fast growth and harvesting within a few years.' },
    { block: 'V4', text: "The company's sales fell sharply last year. Customers complained about long delivery times and frequent errors. The new manager therefore changed the warehouse system and hired more staff. Within six months, delivery times were cut in half and complaints almost disappeared. As a result, customers left the company in growing numbers. By December, sales had returned to their previous level.", q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Customers complained about long delivery times and frequent errors.', 'Within six months, delivery times were cut in half and complaints almost disappeared.', 'As a result, customers left the company in growing numbers.', 'By December, sales had returned to their previous level.'], answer: 2, explain: 'Better service and recovering sales do not fit with customers leaving "as a result".' },
    { block: 'V4', text: 'Octopuses are considered some of the most intelligent invertebrates. In laboratories, they have learned to open jars to reach the food inside. Some have even escaped from their tanks at night and returned before morning. They can change the colour and texture of their skin within a fraction of a second. Because they have almost no memory, every task must be taught to them again each day.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Octopuses are considered some of the most intelligent invertebrates.', 'In laboratories, they have learned to open jars to reach the food inside.', 'They can change the colour and texture of their skin within a fraction of a second.', 'Because they have almost no memory, every task must be taught to them again each day.'], answer: 3, explain: 'Learning to open jars requires memory; the last sentence contradicts the intelligence theme.' },

    // ---- V5 inference (Q15–20) ----
    { block: 'V5', text: 'Students with a valid ISIC card get a 30% discount on all museum tickets. On Mondays, every visitor gets a 20% discount. The two discounts cannot be combined.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['On Mondays, a student with a valid ISIC card can pay less for the same ticket than a visitor without the card.', 'On Mondays, students with an ISIC card pay half of the full price.', 'Students without an ISIC card never get any discount.', 'The museum is closed on Sundays.'], answer: 0, explain: 'The student can use the 30% discount (pays 70%), the other visitor gets 20% (pays 80%).' },
    { block: 'V5', text: 'All participants in the course received a certificate. Some of the participants were teachers. Petra received a certificate.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Petra took part in the course.', 'Only participants received a certificate.', 'Petra is a teacher.', 'Some teachers received a certificate.'], answer: 3, explain: 'Some participants were teachers and all participants got a certificate. Others could also have received certificates, so nothing follows about Petra.' },
    { block: 'V5', text: 'The ferry leaves the harbour every two hours from 8:00 to 18:00. The crossing takes 50 minutes. In winter, the 18:00 ferry does not run.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['In summer, there are five departures a day.', 'The ferry runs more often at midday in summer than in winter.', 'In winter, the last ferry of the day arrives at 16:50.', 'The crossing is faster in winter.'], answer: 2, explain: 'Departures 8, 10, 12, 14, 16, 18 (six). In winter the last one leaves at 16:00 and arrives at 16:50.' },
    { block: 'V5', text: 'Since the city introduced a fee for entering the centre by car, traffic in the centre has fallen by a quarter. Shops in the centre, however, report the same income as before.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['The fee caused the shops to lose customers.', 'The fee will soon be cancelled.', 'All drivers now use public transport.', 'There is less traffic in the city centre than before the fee was introduced.'], answer: 3, explain: 'Only the fall in traffic is stated; the rest is unsupported or contradicted.' },
    { block: 'V5', text: 'Mount Fuji is the highest mountain in Japan. It is an active volcano, although it last erupted in 1707. Every summer, hundreds of thousands of people climb it.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Mount Fuji will not erupt again.', 'Climbing Mount Fuji is forbidden in winter.', 'Mount Fuji is the highest volcano in the world.', 'No other mountain in Japan is higher than Mount Fuji.'], answer: 3, explain: '"The highest mountain in Japan" means no other Japanese mountain is higher.' },
    { block: 'V5', text: 'In the school election, each pupil voted for exactly one candidate. Anna got more votes than Ben, and Ben got more votes than Cyril. There were no other candidates.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Cyril got the fewest votes.', 'Anna got more than half of all the votes.', 'Ben got at least twice as many votes as Cyril.', 'Every pupil voted for Anna.'], answer: 0, explain: 'Anna > Ben > Cyril, so Cyril is last. E.g. 40/35/25 shows Anna need not have a majority.' },

    // ---- V6 long text (Q21–26) ----
    { block: 'V6', q: 'What did each company have to plan before the trial started?', options: ['how to keep its output at the same level', 'how to hire new employees for the fifth day', 'how to reduce its employees’ salaries', 'how to move its office online'], answer: 0, explain: 'Stated in the second paragraph.' },
    { block: 'V6', q: 'Which of the following is stated about the companies that took part?', options: ['All of them were online businesses.', 'They were selected at random by the researchers.', 'Most of them had fewer than fifty employees.', 'Most of them were in the public sector.'], answer: 2, explain: 'The companies volunteered; most had fewer than fifty employees.' },
    { block: 'V6', q: 'What happened to the number of sick days during the trial?', options: ['It doubled.', 'It fell by about two thirds.', 'It stayed roughly the same.', 'It fell slightly in only a few firms.'], answer: 1, explain: 'Third paragraph.' },
    { block: 'V6', q: 'Which problem did some employees report?', options: ['Their salaries were reduced.', 'They had to work from home on the fifth day.', 'They had less time for their families.', 'Their four working days became very intense.'], answer: 3, explain: 'They were "exhausted by Thursday evening". It was managers who mentioned customers expecting them on the fifth day.' },
    { block: 'V6', q: 'Why do critics doubt the results of the trial?', options: ['The researchers were paid by the companies.', 'Revenue fell in most of the companies.', 'The employees refused to answer questionnaires.', 'The companies volunteered, so they were probably the most likely to succeed.'], answer: 3, explain: 'Last paragraph.' },
    { block: 'V6', q: 'Which two of the following statements are true according to the text?\n1) After the trial, every participating company kept the four-day week.\n2) Fewer employees left their jobs than in the same period a year earlier.\n3) The trial lasted six months.\n4) Company revenue fell sharply on average.', options: ['1 and 2', '2 and 3', '1 and 4', '3 and 4'], answer: 1, explain: '1 is false (two companies returned to five days), 4 is false (revenue stayed roughly the same).' },

    // ---- A1 graph (Q27–29) ----
    { block: 'A1', q: 'In how many of the months did Lake Park have more visitors than City Pool?', options: ['1', '2', '3', '4'], answer: 1, explain: 'July (15 > 11) and August (12 > 11).' },
    { block: 'A1', q: 'How many visitors in total did Aqua Centre have from May to September?', options: ['3,800', '4,000', '4,200', '4,400'], answer: 1, explain: '6 + 7 + 9 + 10 + 8 = 40 hundred = 4,000.' },
    { block: 'A1', q: 'Between which two consecutive months did the total number of visitors to all three pools increase the most?', options: ['May → June', 'June → July', 'July → August', 'August → September'], answer: 1, explain: 'Totals: 18, 26, 35, 33, 22 (hundreds). The biggest rise is June → July (+9).' },

    // ---- A2 table (Q30–32) ----
    { block: 'A2', q: 'In which shop did the largest proportion of the customers who entered also buy something?', options: ['B', 'C', 'D', 'E'], answer: 2, explain: 'A 3/4, B 4/5, C 3/5, D 9/10, E 1/2 → D.' },
    { block: 'A2', q: 'In how many shops was the average purchase (total sales ÷ customers who bought something) higher than 200 CZK?', options: ['1', '2', '3', '4'], answer: 1, explain: 'A 200, B 250, C 150, D 200, E 300 → only B and E are higher than 200.' },
    { block: 'A2', q: 'How many customers in total entered shops A, C and E but did not buy anything?', options: ['350', '400', '450', '500'], answer: 2, explain: '100 + 200 + 150 = 450.' },

    // ---- A3 quantitative comparison (Q33–38) ----
    { block: 'A3', template: 'quant', text: 'A rectangle has sides of 6 cm and 4 cm. A square has the same perimeter as the rectangle.', left: 'the area of the rectangle', right: 'the area of the square', answer: 1, explain: 'Perimeter 20 cm → square side 5 cm, area 25 cm² > 24 cm².' },
    { block: 'A3', template: 'quant', left: 'the number of real solutions of the equation x² = 9', right: '2', answer: 2, explain: 'x = 3 or x = −3.' },
    { block: 'A3', template: 'quant', text: 'x is a real number.', left: 'x²', right: 'x', answer: 3, explain: 'x = 2 gives 4 > 2; x = 0.5 gives 0.25 < 0.5; x = 1 gives equality.' },
    { block: 'A3', template: 'quant', text: 'A shirt cost 800 CZK. Its price was first raised by 25% and then reduced by 20%.', left: 'the final price of the shirt', right: '800 CZK', answer: 2, explain: '800 · 1.25 = 1,000; 1,000 · 0.8 = 800.' },
    { block: 'A3', template: 'quant', text: 'Car A travelled 150 km in 2 hours. Car B travelled 200 km in 2 hours and 30 minutes.', left: 'the average speed of car A', right: 'the average speed of car B', answer: 1, explain: '75 km/h vs 80 km/h.' },
    { block: 'A3', template: 'quant', text: 'Three-fifths of the pupils in a class are girls. There are 12 boys in the class.', left: 'the number of girls in the class', right: '17', answer: 0, explain: 'Boys are 2/5 → 30 pupils, 18 girls.' },

    // ---- A4 data sufficiency (Q39–40) ----
    { block: 'A4', template: 'suff', q: 'n is a two-digit positive integer. What is the value of n?', s1: 'The digits of n add up to 9.', s2: 'n is divisible by 5 and is less than 50.', answer: 2, explain: '(1): 18, 27, …, 90. (2): 10, 15, …, 45. Together only 45.' },
    { block: 'A4', template: 'suff', q: 'Is triangle ABC right-angled?', s1: 'The angle at A is 30° and the angle at B is 60°.', s2: 'The sides of the triangle are 5 cm, 12 cm and 13 cm long.', answer: 3, explain: '(1): the third angle is 90°. (2): 5² + 12² = 13². Each alone answers "yes".' },

    // ---- A5 word problems (Q41–45) ----
    { block: 'A5', q: 'A tank is filled with water to one quarter of its capacity. After 30 litres are added, it is filled to one half. What is the capacity of the tank?', options: ['60 litres', '90 litres', '120 litres', '150 litres'], answer: 2, explain: '1/2 − 1/4 = 1/4 of the tank = 30 l → 120 l.' },
    { block: 'A5', q: 'Anna is four times as old as her son. In 20 years, she will be twice as old as him. How old is Anna now?', options: ['32', '40', '44', '48'], answer: 1, explain: '4s + 20 = 2(s + 20) → s = 10, Anna = 40.' },
    { block: 'A5', q: 'A shop sells pens only in packs of 3 for 20 CZK or packs of 5 for 30 CZK. How much does Tom pay if he buys exactly 11 pens?', options: ['60 CZK', '64 CZK', '66 CZK', '70 CZK'], answer: 3, explain: 'The only way to get 11 is 5 + 3 + 3 → 30 + 20 + 20 = 70 CZK.' },
    { block: 'A5', q: 'The sum of two numbers is 40 and their difference is 8. What is their product?', options: ['384', '364', '396', '420'], answer: 0, explain: 'The numbers are 24 and 16; 24 · 16 = 384.' },
    { block: 'A5', q: 'A bag contains 3 red and 5 blue balls. Two balls are drawn at random without replacement. What is the probability that both are red?', options: ['9/64', '3/28', '3/16', '1/4'], answer: 1, explain: '3/8 · 2/7 = 6/56 = 3/28.' },

    // ---- A6 mathematisation (Q46–48) ----
    { block: 'A6', q: 'A cinema sold x adult tickets at 200 CZK and y children’s tickets at 120 CZK. The total income was 9,600 CZK, and twice as many children’s tickets as adult tickets were sold. Which system describes the situation?', options: ['200x + 120y = 9,600 and y = 2x', '200x + 120y = 9,600 and x = 2y', '120x + 200y = 9,600 and y = 2x', '200x + 120y = 9,600 and x + y = 2'], answer: 0, explain: 'Income 200x + 120y; children’s tickets y are twice the adult ones: y = 2x.' },
    { block: 'A6', q: 'Function g is defined by g(x) = 3x − 6. For which x does g(x) = x hold?', options: ['0', '2', '3', '6'], answer: 2, explain: '3x − 6 = x → x = 3.' },
    { block: 'A6', q: 'Which expression should be put in place of the question mark to make the equality valid (x ≠ −3)?\n(x² − 9) / (x + 3) = ?', options: ['x + 3', 'x − 3', 'x² − 3', '3 − x'], answer: 1, explain: 'x² − 9 = (x − 3)(x + 3).' },

    // ---- A7 logic set 1 (Q49–51) — solutions: EHIFG, GIFEH, GIFHE, HEIFG ----
    { block: 'A7', q: 'Which of the following could be the order of the friends from left to right?', options: ['Gina, Ivan, Eva, Hugo, Filip', 'Eva, Hugo, Filip, Ivan, Gina', 'Gina, Ivan, Filip, Hugo, Eva', 'Hugo, Eva, Gina, Ivan, Filip'], answer: 2, explain: 'A: Eva in 3 and Filip in 5. B: Filip left of Ivan. D: Gina not at an end.' },
    { block: 'A7', q: 'If Gina sits in position 5, which of the following must be true?', options: ['Eva sits in position 1.', 'Filip sits next to Eva.', 'Hugo sits in position 2.', 'Ivan sits in position 3.'], answer: 3, explain: 'Possible orders: Eva, Hugo, Ivan, Filip, Gina or Hugo, Eva, Ivan, Filip, Gina — Ivan is always 3rd.' },
    { block: 'A7', q: 'Which of the following statements must be true?', options: ['Gina sits in position 1.', 'Eva sits at one end of the bench.', 'Hugo sits next to Gina.', 'Filip sits directly to the right of Ivan.'], answer: 3, explain: 'In all four possible orders Ivan and Filip sit in positions 2–3 or 3–4.' },

    // ---- A8 logic set 2 (Q52–54) — solutions: Kim 1st #3, Leo 2nd #2/#4, Mia 3rd #1, Noah 4th #4/#2 ----
    { block: 'A8', q: 'Which of the following could be true?', options: ['Leo wears number 4.', 'Mia finished second.', 'Noah finished third.', 'Kim wears number 2.'], answer: 0, explain: 'Kim must have won wearing 3, Leo 2nd, Mia 3rd, Noah last; Leo and Noah share numbers 2 and 4.' },
    { block: 'A8', q: 'Which runner finished last?', options: ['Kim', 'Leo', 'Mia', 'Noah'], answer: 3, explain: 'Mia (#1) did not win and not last; Noah (even) did not win; so Kim or Leo won — Leo is behind Kim, so Kim won, Leo 2nd, Mia 3rd, Noah 4th.' },
    { block: 'A8', q: 'For how many runners do we know for certain both their place and their start number?', options: ['only one', 'two', 'three', 'all four'], answer: 1, explain: 'Kim (1st, #3) and Mia (3rd, #1). Leo and Noah can swap numbers 2 and 4.' },
  ],
}
