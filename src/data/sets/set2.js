// GAP practice test 2 — 54 ORIGINAL items following the real SCIO GAP layout (13 Jan 2025 paper):
// Q1–3 V1 completion · Q4–6 V2 analogies · Q7–9 V3 synonym/antonym · Q10–14 V4 inconsistent part ·
// Q15–20 V5 inference · Q21–26 V6 long text · Q27–29 A1 graph · Q30–32 A2 table ·
// Q33–38 A3 comparison · Q39–40 A4 sufficiency · Q41–45 A5 word problems · Q46–48 A6 mathematisation ·
// Q49–51 A7 logic set 1 · Q52–54 A8 logic set 2.
// answer / answerB are 0-based option indexes. Logic sets verified by brute force.

export default {
  id: 'set2',
  title: 'Practice test 2',
  blocks: {
    V6: {
      stimulus: `The striped code that changed shopping

Every day, the small pattern of black and white stripes known as the barcode is scanned billions of times around the world. Yet few shoppers know that it took more than twenty years for the idea to reach a supermarket checkout.

The story begins in 1948, when the owner of a local food chain asked a university in Philadelphia to develop a way of recording products automatically at the till. The request was overheard by a graduate student, Bernard Silver, who told his friend Joseph Woodland about it. Woodland, who had learned Morse code as a boy scout, later claimed that the key idea came to him on a beach: he pushed his fingers into the sand and pulled them towards himself, drawing thin and thick lines instead of dots and dashes. The two men received a patent for their invention in 1952. Their first design, however, was not made of straight stripes but of circles, so that it could be read from any direction.

For many years, the invention remained almost useless. Reading the code required a strong, narrow beam of light, and the equipment of the time was large, hot and expensive. Only after cheap lasers and small computers appeared in the late 1960s did automatic scanning become practical. Even then, shops hesitated: a code would only be useful if every manufacturer printed the same type of code on its products, and no single company could make that decision alone.

In 1973, a committee of American food producers and retailers finally agreed on a common standard, the Universal Product Code. It used straight stripes, partly because they were easier to print on packaging without smudging. On 26 June 1974, in a supermarket in Ohio, a packet of chewing gum became the first product ever to be scanned at a checkout. The packet is now kept in a museum in Washington.

The change was slow at first. Many shop owners considered the scanners too expensive, and some customers feared that the codes would be used to raise prices secretly. By the early 1980s, however, it was clear that scanning shortened queues, reduced errors at the till and gave shops precise information about which goods were selling. This information soon changed the way products were ordered and stored.

Today, barcodes are used far beyond the supermarket: in hospitals they help to match medicines to the right patients, and airlines use them to track luggage. Newer square codes, which can be read by any mobile phone, store far more information – but they rely on the same simple principle that Woodland once drew in the sand.`,
    },
    A1: {
      title: 'Graph',
      stimulus: 'The graph shows the number of bicycles rented (in hundreds) at three bike-sharing stations in a city in the months March to August.',
      chart: {
        type: 'bar',
        title: 'BICYCLES RENTED AT BIKE-SHARING STATIONS',
        yLabel: 'bicycles rented [hundreds]',
        yMax: 20, yStep: 2,
        xLabels: ['March', 'April', 'May', 'June', 'July', 'August'],
        series: [
          { name: 'Central Station', values: [6, 10, 14, 16, 18, 14] },
          { name: 'Riverside', values: [4, 8, 12, 14, 16, 14] },
          { name: 'University', values: [10, 12, 8, 4, 2, 6] },
        ],
      },
    },
    A2: {
      title: 'Table',
      stimulus: 'The table shows data for five bus lines in one town on an ordinary weekday. Every passenger paid for exactly one ticket.',
      table: {
        head: ['line', 'length of route (km)', 'number of buses', 'passengers per day', 'revenue per day (CZK)'],
        rows: [
          ['1', '12', '8', '4,800', '96,000'],
          ['2', '18', '10', '6,000', '108,000'],
          ['3', '9', '5', '3,500', '63,000'],
          ['4', '24', '12', '7,200', '144,000'],
          ['5', '15', '6', '4,500', '99,000'],
        ],
      },
    },
    A7: {
      stimulus: `Five patients – Adam, Berta, Cyril, Dana and Emil – are waiting to see a doctor. They are examined one after another, in positions 1 to 5 (1 = first). We know that:
• Berta is examined immediately after Adam.
• Cyril is examined at some point before Dana.
• Emil is examined neither first nor last.`,
    },
    A8: {
      stimulus: `Four colleagues – Fiona, George, Helen and Ian – each travelled to a different city (Berlin, Paris, Rome, Vienna), and each used a different means of transport (bus, car, plane, train). We know that:
• The colleague who went to Rome travelled by plane.
• George travelled neither by plane nor by train.
• Helen went neither to Rome nor to Vienna.
• Nobody travelled to Berlin or to Vienna by car.
• Ian travelled either by car or by train.
• Fiona did not travel by car.`,
    },
  },
  questions: [
    // ---- V1 completion (Q1–3) ----
    { block: 'V1', q: "The surgeon's hands were remarkably ________ for a man of his age, which still allowed him to perform even the most ________ operations.", options: ['shaky – delicate', 'steady – delicate', 'steady – careless', 'clumsy – simple'], answer: 1, explain: 'Steady hands make delicate (precise) operations possible; "shaky" or "clumsy" hands would not, and "careless operations" makes no sense.' },
    { block: 'V1', q: 'When the old tram line was ________, many residents feared that their neighbourhood would become ________, but the new bus service proved surprisingly ________.', options: ['extended – crowded – slow', 'opened – isolated – useless', 'renovated – popular – expensive', 'closed – isolated – reliable'], answer: 3, explain: 'Closing the line makes people fear isolation; "but … surprisingly" needs a positive outcome: reliable.' },
    { block: 'V1', q: 'Although the price of the jacket had been ________ by half in the sale, Martin still found it too ________ for his student budget.', options: ['cut – expensive', 'raised – cheap', 'reduced – affordable', 'doubled – costly'], answer: 0, explain: '"Although" sets a lower price against the fact that it was still too expensive for him.' },

    // ---- V2 analogies (Q4–6) ----
    { block: 'V2', q: 'THERMOMETER : ________ = SCALE : ________', options: ['fever – kitchen', 'mercury – weight', 'temperature – weight', 'hospital – weight'], answer: 2, explain: 'An instrument : the quantity it measures. "mercury – weight" and "hospital – weight" mix a material or a place with a quantity; "fever – kitchen" is unrelated.' },
    { block: 'V2', q: 'INVENTOR : ________ = ________ : NOVEL', options: ['patent – reader', 'invention – writer', 'machine – library', 'idea – chapter'], answer: 1, explain: 'An inventor creates an invention as a writer creates a novel. A reader only reads a novel, and a chapter is a part of it.' },
    { block: 'V2', q: 'SYMPTOM : ________ = ________ : FIRE', options: ['cure – water', 'doctor – firefighter', 'fever – flame', 'illness – smoke'], answer: 3, explain: 'A symptom is a sign of an illness, as smoke is a sign of a fire. In A and B the relationship on the right runs in the opposite direction (water puts out a fire, a firefighter fights it).' },

    // ---- V3 synonym / antonym (Q7–9) ----
    { block: 'V3', q: 'Regular exercise can significantly diminish the risk of heart disease.', word: 'diminish', options: ['reduce', 'measure', 'reveal', 'spread'], answer: 0, optionsB: ['ignore', 'increase', 'predict', 'cause'], answerB: 1, explain: 'diminish = reduce; opposite = increase.' },
    { block: 'V3', q: 'The marathon runner remained remarkably composed even when a rival overtook her in the final kilometre.', word: 'composed', options: ['tired', 'proud', 'calm', 'fast'], answer: 2, optionsB: ['agitated', 'slow', 'humble', 'lazy'], answerB: 0, explain: 'composed = calm; opposite = agitated.' },
    { block: 'V3', q: 'The new ticket machines are so cumbersome that many passengers still prefer to buy their tickets from the driver.', word: 'cumbersome', options: ['cheap', 'modern', 'noisy', 'awkward'], answer: 3, optionsB: ['convenient', 'expensive', 'quiet', 'old-fashioned'], answerB: 0, explain: 'cumbersome = awkward (difficult to use); opposite = convenient.' },

    // ---- V4 inconsistent part (Q10–14) ----
    { block: 'V4', text: 'Before the invention of the printing press, books in Europe were copied by hand. A single copy of a long book could take a scribe many months to produce. Books were therefore rare and very expensive, and most people never owned one. When Johannes Gutenberg introduced movable type around 1450, the situation began to change rapidly. Within a few decades, millions of books had been printed across Europe. As a result, books became even more expensive and harder to obtain than before. Literacy slowly spread to groups that had previously had no access to written texts.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['A single copy of a long book could take a scribe many months to produce.', 'When Johannes Gutenberg introduced movable type around 1450, the situation began to change rapidly.', 'As a result, books became even more expensive and harder to obtain than before.', 'Literacy slowly spread to groups that had previously had no access to written texts.'], answer: 2, explain: 'Mass printing of millions of books made books cheaper and more available, not more expensive.' },
    { block: 'V4', text: 'Copenhagen is often described as one of the most bicycle-friendly cities in the world. More than a third of its residents cycle to work or school every day. The city has built hundreds of kilometres of separate cycle lanes, as well as bridges used only by cyclists and pedestrians. Since cyclists are kept away from cars, the risk of serious accidents is relatively low. For this reason, most parents in Copenhagen refuse to let their children cycle to school. Planners from other cities regularly visit Copenhagen to learn from its experience.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['More than a third of its residents cycle to work or school every day.', 'The city has built hundreds of kilometres of separate cycle lanes, as well as bridges used only by cyclists and pedestrians.', 'Since cyclists are kept away from cars, the risk of serious accidents is relatively low.', 'For this reason, most parents in Copenhagen refuse to let their children cycle to school.'], answer: 3, explain: 'A low risk of accidents is a reason to let children cycle, not to forbid it; it also contradicts the many people who cycle to school.' },
    { block: 'V4', text: 'Sleep plays a crucial role in keeping the body healthy. During deep sleep, the body repairs tissues and strengthens the immune system. People who regularly sleep less than six hours a night catch colds more often than those who sleep longer. Short sleep has also been linked to a higher risk of obesity and heart disease. Lack of sleep, then, seems to have little effect on our physical health. Doctors therefore recommend that adults sleep between seven and nine hours a night. Many also advise avoiding screens for an hour before going to bed.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Short sleep has also been linked to a higher risk of obesity and heart disease.', 'Lack of sleep, then, seems to have little effect on our physical health.', 'Doctors therefore recommend that adults sleep between seven and nine hours a night.', 'Many also advise avoiding screens for an hour before going to bed.'], answer: 1, explain: 'The text lists several physical effects of short sleep, so the "conclusion" that it has little effect contradicts it.' },
    { block: 'V4', text: 'Professional football clubs now rely heavily on data analysis. Even so, few top clubs ever look at statistics when deciding which players to buy. Cameras in stadiums record the position of every player many times per second. Analysts use this information to measure how far each player runs and how often he wins the ball. Coaches then use the results to plan training and to choose tactics for the next match. Some clubs have even employed physicists and mathematicians to develop new models.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Even so, few top clubs ever look at statistics when deciding which players to buy.', 'Cameras in stadiums record the position of every player many times per second.', 'Analysts use this information to measure how far each player runs and how often he wins the ball.', 'Coaches then use the results to plan training and to choose tactics for the next match.'], answer: 0, explain: 'Clubs that "rely heavily on data analysis" would hardly ignore statistics in their most expensive decisions.' },
    { block: 'V4', text: 'Supermarkets are carefully designed to make customers spend more. Basic products such as milk and bread are usually placed at the back of the shop. To reach them, customers must walk past many other goods, and they often pick up items they had not planned to buy. Sweets are often displayed next to the checkouts, where children waiting in the queue can see them. Placing essential goods at the entrance therefore helps shops increase their sales. Shoppers who write a list beforehand and stick to it tend to spend noticeably less.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Basic products such as milk and bread are usually placed at the back of the shop.', 'To reach them, customers must walk past many other goods, and they often pick up items they had not planned to buy.', 'Placing essential goods at the entrance therefore helps shops increase their sales.', 'Shoppers who write a list beforehand and stick to it tend to spend noticeably less.'], answer: 2, explain: 'The text explains that essential goods are put at the back to increase sales; the "therefore" sentence reverses this.' },

    // ---- V5 inference (Q15–20) ----
    { block: 'V5', text: 'Medicine X may be sold only to customers with a prescription. Medicine Y is available without a prescription, but only to customers over 18. Yesterday Jana, who is 16, bought one of these two medicines at a pharmacy that strictly follows these rules.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Jana bought medicine Y.', 'Jana had a prescription.', 'Medicine X is stronger than medicine Y.', 'All customers over 18 buy medicine Y.'], answer: 1, explain: 'Jana could not buy Y (she is under 18), so she bought X, which requires a prescription.' },
    { block: 'V5', text: 'On tram line 9, trams leave the depot every 12 minutes on weekdays and every 20 minutes at weekends. The first tram leaves the depot at 5:00 every day.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['More trams leave the depot on a Saturday than on a Monday.', 'A tram leaves the depot at 5:36 on Sundays.', 'The last tram leaves the depot at midnight.', 'Both on weekdays and at weekends, a tram leaves the depot at 6:00.'], answer: 3, explain: '60 is a multiple of both 12 and 20, so 6:00 is a departure time every day. At weekends trams leave at 5:20 and 5:40, not 5:36.' },
    { block: 'V5', text: 'In a handball tournament, every team played every other team exactly once. A win earned 2 points, a draw 1 point and a loss 0 points. The Lions finished the tournament with 0 points.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['The Lions lost all their matches.', 'The Lions scored no goals in the tournament.', 'Every other team won at least two matches.', 'There were no draws in the tournament.'], answer: 0, explain: 'Any win or draw would have given at least 1 point. Losing does not mean scoring no goals, and other matches may have been drawn.' },
    { block: 'V5', text: 'All the inventors presented in the exhibition were born in the 19th century. Some of the inventors presented in the exhibition received a patent before the age of thirty.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['All inventors born in the 19th century are presented in the exhibition.', 'No inventor presented in the exhibition received a patent after the age of thirty.', 'Some people born in the 19th century received a patent before the age of thirty.', 'Some of the inventors presented in the exhibition never received a patent.'], answer: 2, explain: 'The inventors who got a patent before thirty are in the exhibition, so they were born in the 19th century. "Some" does not imply that the others had no patent.' },
    { block: 'V5', text: 'A market stall sells apples for 40 CZK per kilogram. If a customer buys at least 3 kilograms, the whole purchase is charged at 30 CZK per kilogram.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Most customers buy at least 3 kilograms of apples.', 'Buying 4 kilograms of apples costs more than 140 CZK.', 'The stall sells pears at a lower price than apples.', 'A customer who buys 3 kilograms of apples pays less than one who buys 2.5 kilograms.'], answer: 3, explain: '3 kg cost 3 · 30 = 90 CZK, 2.5 kg cost 2.5 · 40 = 100 CZK. 4 kg cost only 120 CZK.' },
    { block: 'V5', text: 'In a study, people who drank green tea every day had lower blood pressure than those who did not. The tea drinkers also exercised more often and smoked less.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Green tea lowers blood pressure.', 'In the study, the people who drank green tea daily smoked less than the others.', 'Exercise has no effect on blood pressure.', 'All people who drink green tea exercise regularly.'], answer: 1, explain: 'Only the difference in smoking is stated directly. The lower blood pressure may be caused by exercise or not smoking, so A reverses or assumes causality.' },

    // ---- V6 long text (Q21–26) ----
    { block: 'V6', q: 'Who first asked for a way to record products automatically at the till?', options: ['a graduate student', 'the owner of a food chain', 'a committee of food producers', 'a museum in Washington'], answer: 1, explain: 'Second paragraph: the owner of a local food chain made the request.' },
    { block: 'V6', q: 'Why was the first barcode design made of circles?', options: ['so that it could be read from any direction', 'because circles were easier to print', 'because it was based on Morse code', 'so that it could store more information'], answer: 0, explain: 'End of the second paragraph. It was the later straight stripes that were easier to print.' },
    { block: 'V6', q: 'According to the text, why did the invention remain almost useless for many years?', options: ['Shoppers refused to buy products with codes.', 'The patent did not allow anyone else to use it.', 'The equipment needed to read the code was large and expensive.', 'Supermarkets did not yet have checkouts.'], answer: 2, explain: 'Third paragraph: reading required a strong narrow beam of light, and the equipment was large, hot and expensive.' },
    { block: 'V6', q: 'Why did shops hesitate even after scanning had become technically practical?', options: ['A code was useful only if all manufacturers used the same type.', 'Lasers were considered dangerous to customers.', 'Woodland and Silver refused to sell their patent.', 'Scanning made queues at the checkouts longer.'], answer: 0, explain: 'End of the third paragraph: no single company could decide on a common code alone.' },
    { block: 'V6', q: 'What did some customers fear when barcodes were introduced?', options: ['that the scanners were harmful to their health', 'that queues would become longer', 'that their personal data would be sold', 'that the codes would be used to raise prices secretly'], answer: 3, explain: 'Fifth paragraph.' },
    { block: 'V6', q: 'Which two of the following statements are true according to the text?\n1) The first product ever scanned at a checkout was a packet of chewing gum.\n2) The patent of 1952 described a code made of straight stripes.\n3) The common standard was agreed on before the first product was scanned in a shop.\n4) Square codes work on a completely different principle from barcodes.', options: ['1 and 2', '1 and 3', '2 and 4', '3 and 4'], answer: 1, explain: '2 is false (the first design used circles); 4 is false (they rely on the same principle). The standard came in 1973, the first scan in 1974.' },

    // ---- A1 graph (Q27–29) ----
    { block: 'A1', q: 'In how many of the months were more bicycles rented at Riverside than at University?', options: ['2', '3', '4', '5'], answer: 2, explain: 'May (12 > 8), June (14 > 4), July (16 > 2), August (14 > 6). In March and April University was higher.' },
    { block: 'A1', q: 'What was the average monthly number of bicycles rented at Central Station from March to August?', options: ['1,200', '1,300', '1,400', '1,500'], answer: 1, explain: '6 + 10 + 14 + 16 + 18 + 14 = 78 hundred; 7,800 ÷ 6 = 1,300.' },
    { block: 'A1', q: 'In July, how many times as many bicycles were rented at Central Station as at University?', options: ['4', '6', '8', '9'], answer: 3, explain: '18 ÷ 2 = 9.' },

    // ---- A2 table (Q30–32) ----
    { block: 'A2', q: 'Which line carried the most passengers per bus?', options: ['line 2', 'line 3', 'line 4', 'line 5'], answer: 3, explain: 'Per bus: 1 → 600, 2 → 600, 3 → 700, 4 → 600, 5 → 750.' },
    { block: 'A2', q: 'For how many lines was the average revenue per passenger lower than 20 CZK?', options: ['1', '2', '3', '4'], answer: 1, explain: 'Revenue ÷ passengers: 1 → 20, 2 → 18, 3 → 18, 4 → 20, 5 → 22. Only lines 2 and 3.' },
    { block: 'A2', q: 'By how many per cent was the revenue of line 4 higher than the revenue of line 1?', options: ['33%', '48%', '50%', '150%'], answer: 2, explain: '144,000 ÷ 96,000 = 1.5, i.e. 50% higher.' },

    // ---- A3 quantitative comparison (Q33–38) ----
    { block: 'A3', template: 'quant', text: 'A pack of 6 yoghurts costs 87 CZK. A single yoghurt bought separately costs 15 CZK.', left: 'the price of one yoghurt when bought in the pack', right: '15 CZK', answer: 1, explain: '87 ÷ 6 = 14.50 CZK < 15 CZK.' },
    { block: 'A3', template: 'quant', left: '25% of 80', right: '80% of 25', answer: 2, explain: 'Both equal 0.25 · 80 = 0.8 · 25 = 20.' },
    { block: 'A3', template: 'quant', text: 'x is a real number and x ≠ 0.', left: 'x', right: '1/x', answer: 3, explain: 'x = 2: 2 > 1/2; x = 1/2: 1/2 < 2; x = 1 (or −1): equal. It depends on x.' },
    { block: 'A3', template: 'quant', text: 'A train travels 120 km at a constant speed of 80 km/h.', left: 'the travel time in minutes', right: '85', answer: 0, explain: '120 ÷ 80 = 1.5 h = 90 min > 85.' },
    { block: 'A3', template: 'quant', text: 'The average of three numbers is 14. Two of the numbers are 10 and 15.', left: 'the third number', right: '18', answer: 1, explain: '3 · 14 = 42; 42 − 10 − 15 = 17 < 18.' },
    { block: 'A3', template: 'quant', left: 'the number of diagonals of a hexagon', right: '8', answer: 0, explain: 'n(n − 3)/2 = 6 · 3 / 2 = 9 > 8.' },

    // ---- A4 data sufficiency (Q39–40) ----
    { block: 'A4', template: 'suff', q: 'A runner took part in a race. What was her average speed?', s1: 'The race was 10 km long.', s2: 'She finished the race in 50 minutes.', answer: 2, explain: 'Speed needs both distance and time: 10 km in 50 min = 12 km/h. Neither statement alone is enough.' },
    { block: 'A4', template: 'suff', q: 'A theatre sold 60 tickets, some for 300 CZK and the rest for 500 CZK. How many 500 CZK tickets were sold?', s1: 'The total revenue from the tickets was 22,000 CZK.', s2: 'More 300 CZK tickets than 500 CZK tickets were sold.', answer: 0, explain: '(1): 300 · 60 = 18,000; the extra 4,000 CZK ÷ 200 = 20 tickets at 500 CZK. (2) only says there were fewer than 30.' },

    // ---- A5 word problems (Q41–45) ----
    { block: 'A5', q: 'A patient has to take one tablet every 8 hours, day and night. A pack contains 30 tablets. For how many days will one pack last?', options: ['10', '12', '15', '20'], answer: 0, explain: '24 ÷ 8 = 3 tablets a day; 30 ÷ 3 = 10 days.' },
    { block: 'A5', q: 'A train leaves Brno at 9:40 and travels at an average speed of 90 km/h. The distance to Prague is 210 km. At what time does it arrive in Prague?', options: ['11:40', '11:50', '12:20', '12:00'], answer: 3, explain: '210 ÷ 90 = 2 1/3 h = 2 h 20 min; 9:40 + 2:20 = 12:00.' },
    { block: 'A5', q: 'The price of a bicycle was reduced by 20%, and then the new price was reduced by a further 10%. By what percentage was the original price reduced in total?', options: ['28%', '30%', '25%', '32%'], answer: 0, explain: '0.8 · 0.9 = 0.72 of the original price, i.e. a 28% reduction.' },
    { block: 'A5', q: 'A basketball team scored 84 points in a match: 12 points from free throws, and twice as many points from 2-point shots as from 3-point shots. How many 3-point shots did the team score?', options: ['6', '12', '8', '24'], answer: 2, explain: 'Let p be the points from 3-pointers: p + 2p + 12 = 84 → p = 24, i.e. 24 ÷ 3 = 8 shots.' },
    { block: 'A5', q: 'Two printers working together print 600 pages in 10 minutes. The faster printer alone prints 600 pages in 15 minutes. How long does the slower printer alone need to print 600 pages?', options: ['20 minutes', '25 minutes', '30 minutes', '45 minutes'], answer: 2, explain: 'Together 60 pages/min, faster 40 pages/min, so slower 20 pages/min → 600 ÷ 20 = 30 min.' },

    // ---- A6 mathematisation (Q46–48) ----
    { block: 'A6', q: 'A taxi charges a fixed fee of 60 CZK plus 30 CZK for each kilometre. A ride of x kilometres cost y CZK in total. Which equation describes the situation?', options: ['y = 60x + 30', 'y = 30x + 60', 'y = 90x', 'x = 30y + 60'], answer: 1, explain: '30 CZK for each of the x kilometres plus the fixed 60 CZK.' },
    { block: 'A6', q: 'Function f is defined by f(x) = x² − 4x. What is the value of f(−2)?', options: ['−4', '4', '12', '−12'], answer: 2, explain: '(−2)² − 4 · (−2) = 4 + 8 = 12.' },
    { block: 'A6', q: 'Which expression should be put in place of the question mark to make the equality valid?\n(a + 2)² − (a − 2)² = ?', options: ['0', '8', '4a', '8a'], answer: 3, explain: '(a² + 4a + 4) − (a² − 4a + 4) = 8a.' },

    // ---- A7 logic set 1 (Q49–51) — solutions: ABCED, ABECD, CABED, CDEAB, CEABD, CEDAB ----
    { block: 'A7', q: 'Which of the following could be the order in which the patients are examined?', options: ['Adam, Berta, Emil, Dana, Cyril', 'Cyril, Emil, Dana, Adam, Berta', 'Emil, Cyril, Adam, Berta, Dana', 'Cyril, Adam, Dana, Berta, Emil'], answer: 1, explain: 'A: Dana before Cyril. C: Emil first. D: Berta not right after Adam, and Emil last.' },
    { block: 'A7', q: 'If Adam is examined first, which of the following must be true?', options: ['Cyril is examined third.', 'Emil is examined fourth.', 'Dana is examined last.', 'Emil is examined immediately before Dana.'], answer: 2, explain: 'Possible orders: Adam, Berta, Cyril, Emil, Dana or Adam, Berta, Emil, Cyril, Dana — Dana is last in both.' },
    { block: 'A7', q: 'For how many of the five patients do we know for certain in which position they are examined?', options: ['none', 'one', 'two', 'three'], answer: 0, explain: 'Six orders are possible (ABCED, ABECD, CABED, CDEAB, CEABD, CEDAB); every patient appears in at least two different positions.' },

    // ---- A8 logic set 2 (Q52–54) — solutions (city/transport):
    // F Rome/plane, G Vienna/bus, H Berlin/train, I Paris/car
    // F Rome/plane, G Vienna/bus, H Paris/car, I Berlin/train
    // F Rome/plane, G Berlin/bus, H Paris/car, I Vienna/train
    // F Rome/plane, G Paris/car, H Berlin/bus, I Vienna/train ----
    { block: 'A8', q: 'Which of the following could be true?', options: ['Helen travelled to Paris by train.', 'George travelled to Paris by bus.', 'Ian travelled to Berlin by train.', 'Fiona travelled to Vienna by bus.'], answer: 2, explain: 'Fiona cannot go by car, Ian goes by car or train and George neither by plane nor train, so only Fiona or Helen can fly; Helen cannot go to Rome, so Fiona flew to Rome. Car is not allowed to Berlin or Vienna, so the car went to Paris. C occurs in a valid solution (Fiona Rome/plane, George Vienna/bus, Helen Paris/car, Ian Berlin/train).' },
    { block: 'A8', q: 'Which of the following must be true?', options: ['The colleague who went to Paris travelled by car.', 'George travelled by bus.', 'Ian went to Vienna.', 'Helen travelled by car.'], answer: 0, explain: 'Rome is reached by plane and Berlin and Vienna not by car, so the car must have gone to Paris. The other statements fail in at least one solution.' },
    { block: 'A8', q: 'If Helen travelled by bus, which of the following is certain?', options: ['George went to Berlin.', 'Ian travelled by car.', 'Ian went to Berlin.', 'George went to Paris.'], answer: 3, explain: 'Then George (no plane, train or bus) went by car, so to Paris; Ian took the train to Vienna and Helen the bus to Berlin.' },
  ],
}
