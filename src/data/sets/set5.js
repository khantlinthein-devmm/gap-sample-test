// GAP practice test 5 — 54 ORIGINAL items following the real SCIO GAP layout (13 Jan 2025 paper):
// Q1–3 V1 completion · Q4–6 V2 analogies · Q7–9 V3 synonym/antonym · Q10–14 V4 inconsistent part ·
// Q15–20 V5 inference · Q21–26 V6 long text · Q27–29 A1 graph · Q30–32 A2 table ·
// Q33–38 A3 comparison · Q39–40 A4 sufficiency · Q41–45 A5 word problems · Q46–48 A6 mathematisation ·
// Q49–51 A7 logic set 1 · Q52–54 A8 logic set 2.
// answer / answerB are 0-based option indexes. Logic sets verified by brute force.

export default {
  id: 'set5',
  title: 'Practice test 5',
  blocks: {
    V6: {
      stimulus: `Cooler cities, one roof at a time

On a sunny summer afternoon, the centre of a large city can be several degrees warmer than the surrounding countryside. Scientists call this the urban heat island effect. Asphalt, concrete and dark roofs absorb most of the sunlight that falls on them and release the stored heat slowly, long after sunset. As a result, cities cool down much less at night than fields and forests do, and people living on upper floors often find it difficult to sleep.

One of the simplest remedies is surprisingly old. In many towns around the Mediterranean, houses have been painted white for centuries. A white surface reflects most of the incoming sunlight back into the sky, whereas a black one absorbs almost all of it. Measurements show that on a hot day a dark roof can reach temperatures above 70 °C, while a white roof next to it stays only slightly warmer than the air.

Several cities have now turned this traditional practice into policy. New York has coated millions of square metres of roofs with reflective paint, often with the help of volunteers. Studies there found that the rooms directly below a white roof were noticeably cooler and that the buildings needed less electricity for air conditioning. Because air conditioners themselves release heat into the streets, the savings help to cool the whole neighbourhood a little.

The method is not without drawbacks. In cities with cold winters, a white roof also reflects the weak winter sun, so a building may need slightly more heating. Researchers estimate, however, that in most climates the summer savings are larger than the winter losses. Another problem is dirt: a white coating that is not cleaned gradually turns grey and loses much of its effect within a few years.

Some experts argue that roofs are only part of the solution. Green roofs covered with plants not only stay cool but also absorb rainwater and provide a home for insects, although they are heavier and more expensive to build. Trees planted along streets can shade both pavements and walls. Planners therefore increasingly combine all these measures.

Whatever the approach, the problem is becoming more urgent. Heatwaves are expected to become more frequent, and more than half of the world's population already lives in cities. A bucket of white paint will not solve the problem on its own, but it may be one of the cheapest places to start.`,
    },
    A1: {
      title: 'Graph',
      stimulus: 'The graph shows how far a bus, a car and a lorry were from the town of Aldby between 8:00 and 10:30. All three vehicles used the same straight road. Between the marked times, each vehicle either moved at a constant speed or stood still.',
      chart: {
        type: 'line',
        title: 'DISTANCE FROM ALDBY',
        yLabel: 'distance [km]',
        yMax: 120, yStep: 10,
        xLabels: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30'],
        series: [
          { name: 'Bus', values: [0, 20, 40, 40, 60, 80] },
          { name: 'Car', values: [0, 0, 30, 60, 90, 120] },
          { name: 'Lorry', values: [100, 80, 60, 40, 20, 0] },
        ],
      },
    },
    A2: {
      title: 'Table',
      stimulus: 'The table shows the population of five regions and their electricity consumption in one year, including the part of it that came from renewable sources.',
      table: {
        head: ['region', 'population', 'electricity consumption (MWh)', 'of which from renewable sources (MWh)'],
        rows: [
          ['North', '40,000', '120,000', '30,000'],
          ['South', '25,000', '100,000', '40,000'],
          ['East', '50,000', '125,000', '25,000'],
          ['West', '30,000', '105,000', '63,000'],
          ['Centre', '80,000', '200,000', '60,000'],
        ],
      },
    },
    A7: {
      stimulus: `A coach tour visits five cities – Lyon, Milan, Porto, Seville and Vienna – on five consecutive days from Monday to Friday, one city per day. We know that:
• Vienna is visited on an earlier day than Milan.
• Porto and Seville are visited on two consecutive days (in either order).
• Lyon is visited neither on Monday nor on Friday.
• Vienna is not visited on Monday.`,
    },
    A8: {
      stimulus: `Four reporters – Fiona, Greg, Hana and Igor – each reported from a different city (Cairo, Lima, Oslo, Rome) and each filed their report on a different day from Monday to Thursday. We know that:
• The report from Cairo was filed on Monday.
• Greg filed his report on the day directly after Fiona.
• Hana reported from Lima.
• Igor did not report from Rome, and Greg did not report from Oslo.`,
    },
  },
  questions: [
    // ---- V1 completion (Q1–3) ----
    { block: 'V1', q: 'Although the hotel room was advertised as ________, it turned out to be so ________ that we could barely open our suitcase.', options: ['spacious – cramped', 'luxurious – comfortable', 'cheap – expensive', 'cosy – large'], answer: 0, explain: '"Although" signals a contrast between the advert and reality; a room in which you cannot open a suitcase is cramped, not spacious.' },
    { block: 'V1', q: 'The architect wanted the new library to ________ with the medieval houses around it, so she chose a ________ facade of local stone.', options: ['contrast – glass', 'merge – neon', 'blend – modest', 'clash – humble'], answer: 2, explain: 'Local stone suggests harmony with the old houses: the library should blend in, so the facade is modest. A glass or neon facade cannot be "of local stone".' },
    { block: 'V1', q: 'Since sound ________ much faster in water than in air, whales can ________ with each other over ________ distances.', options: ['moves – argue – tiny', 'falls – speak – short', 'spreads – compete – empty', 'travels – communicate – vast'], answer: 3, explain: 'Sound travels; fast sound lets whales communicate over vast (very long) distances.' },

    // ---- V2 analogies (Q4–6) ----
    { block: 'V2', q: 'THERMOMETER : ________ = BAROMETER : ________', options: ['summer – mountain', 'temperature – pressure', 'fever – storm', 'mercury – air'], answer: 1, explain: 'Instrument : the quantity it measures. A thermometer measures temperature, a barometer measures air pressure.' },
    { block: 'V2', q: 'ARCHITECT : ________ = ________ : NOVEL', options: ['blueprint – reader', 'bricklayer – chapter', 'city – library', 'building – novelist'], answer: 3, explain: 'Creator : what they create. An architect designs a building as a novelist writes a novel. A reader does not create a novel.' },
    { block: 'V2', q: 'CALORIE : ________ = METRE : ________', options: ['energy – length', 'diet – speed', 'sugar – ruler', 'heat – weight'], answer: 0, explain: 'Unit : the quantity it measures. The metre is not a unit of speed or weight.' },

    // ---- V3 synonym / antonym (Q7–9) ----
    { block: 'V3', q: 'The guide gave us a succinct account of the city’s history, which took barely five minutes.', word: 'succinct', options: ['accurate', 'dramatic', 'concise', 'boring'], answer: 2, optionsB: ['inaccurate', 'long-winded', 'calm', 'exciting'], answerB: 1, explain: 'succinct = brief and clear = concise; opposite = long-winded.' },
    { block: 'V3', q: 'The documentary was criticised for presenting a biased picture of the conflict.', word: 'biased', options: ['one-sided', 'blurred', 'shocking', 'outdated'], answer: 0, optionsB: ['pleasant', 'sharp', 'recent', 'impartial'], answerB: 3, explain: 'biased = one-sided; opposite = impartial.' },
    { block: 'V3', q: 'Fresh spinach is abundant in spring, so markets sell it at low prices.', word: 'abundant', options: ['healthy', 'plentiful', 'expensive', 'tasty'], answer: 1, optionsB: ['scarce', 'harmful', 'bitter', 'cheap'], answerB: 0, explain: 'abundant = plentiful; opposite = scarce.' },

    // ---- V4 inconsistent part (Q10–14) ----
    { block: 'V4', text: 'Venice was built on more than a hundred small islands in a shallow lagoon. Its first inhabitants settled there to escape invaders on the mainland. Because the ground was soft, builders drove millions of wooden piles into the mud to support the houses. Deprived of oxygen under the water, the wood did not rot but slowly hardened. Thanks to the solid rock just below the surface, however, such foundations were never really necessary. Today, the main threat to these foundations comes from rising sea levels and the waves made by motor boats.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Its first inhabitants settled there to escape invaders on the mainland.', 'Because the ground was soft, builders drove millions of wooden piles into the mud to support the houses.', 'Thanks to the solid rock just below the surface, however, such foundations were never really necessary.', 'Today, the main threat to these foundations comes from rising sea levels and the waves made by motor boats.'], answer: 2, explain: 'The text says the ground was soft mud, which is why piles were needed; solid rock making them unnecessary contradicts this.' },
    { block: 'V4', text: 'Solar panels produce electricity only when light falls on them. Their output is therefore highest around midday and drops to zero at night. Household demand for electricity, however, often peaks in the evening, when people come home and cook. Owners without a battery can therefore use most of their solar electricity in the evening, when they need it most. For this reason, many owners combine their panels with batteries, which store surplus energy during the day and release it later. In some countries, households are also paid for the surplus electricity they send into the grid.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Their output is therefore highest around midday and drops to zero at night.', 'Owners without a battery can therefore use most of their solar electricity in the evening, when they need it most.', 'For this reason, many owners combine their panels with batteries, which store surplus energy during the day and release it later.', 'In some countries, households are also paid for the surplus electricity they send into the grid.'], answer: 1, explain: 'Panels produce nothing in the evening, so without a battery the electricity cannot be used then — this is exactly why batteries are bought.' },
    { block: 'V4', text: 'Before the printing press, books in Europe were copied by hand, mostly in monasteries. A single copy of the Bible could take a scribe more than a year to complete. Gutenberg’s press, introduced around 1450, made it possible to produce hundreds of copies in the same time. Books consequently became much cheaper and reached far more readers. As a result of the sharp rise in prices, only the richest families could still afford them. Within fifty years, millions of printed books were circulating across the continent.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Before the printing press, books in Europe were copied by hand, mostly in monasteries.', 'A single copy of the Bible could take a scribe more than a year to complete.', 'Books consequently became much cheaper and reached far more readers.', 'As a result of the sharp rise in prices, only the richest families could still afford them.'], answer: 3, explain: 'The previous sentence says books became much cheaper and reached more readers; a sharp rise in prices contradicts it.' },
    { block: 'V4', text: 'Vitamin C is essential for the human body, which cannot produce it on its own. We therefore have to obtain it regularly from food, mainly from fruit and vegetables. Sailors on long voyages once suffered from scurvy because they ate no fresh food for months. The disease largely disappeared when ships began carrying lemons and limes. Since the body can store vitamin C for several years, a single orange a year is enough to prevent the disease. Today, scurvy is rare in developed countries, but it still occurs among people with very poor diets.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['We therefore have to obtain it regularly from food, mainly from fruit and vegetables.', 'Sailors on long voyages once suffered from scurvy because they ate no fresh food for months.', 'Since the body can store vitamin C for several years, a single orange a year is enough to prevent the disease.', 'Today, scurvy is rare in developed countries, but it still occurs among people with very poor diets.'], answer: 2, explain: 'If the body stored vitamin C for years, sailors would not fall ill after a few months, and regular intake would not be needed.' },
    { block: 'V4', text: 'The Atacama Desert in northern Chile is one of the driest places on Earth. Because of frequent cloud cover, astronomers there can observe the sky on only a few nights a year. Some weather stations in the desert have never recorded any rain. The air above it is extremely clear and dry, and few towns light up the night sky. For these reasons, several of the world’s largest telescopes have been built there. Engineers have even tested Mars rovers in the desert, whose soil resembles that of Mars.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Because of frequent cloud cover, astronomers there can observe the sky on only a few nights a year.', 'Some weather stations in the desert have never recorded any rain.', 'For these reasons, several of the world’s largest telescopes have been built there.', 'Engineers have even tested Mars rovers in the desert, whose soil resembles that of Mars.'], answer: 0, explain: 'The text describes an extremely dry place with clear skies, ideal for telescopes; frequent clouds contradict this.' },

    // ---- V5 inference (Q15–20) ----
    { block: 'V5', text: 'All trains from Brno to Vienna stop in Břeclav. Some of the trains that stop in Břeclav continue to Bratislava. The 9:15 train from Brno does not stop in Břeclav.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['The 9:15 train from Brno goes to Bratislava.', 'All trains to Bratislava pass through Vienna.', 'Some trains from Brno to Vienna continue to Bratislava.', 'The 9:15 train from Brno is not a train to Vienna.'], answer: 3, explain: 'Every Brno–Vienna train stops in Břeclav; the 9:15 does not, so it cannot be a Vienna train. The Bratislava trains need not be Vienna trains.' },
    { block: 'V5', text: 'In a survey, every resident of a small town answered two questions. 60% of them said they read the news mainly online, and 45% said they regularly watch the evening TV news.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Online news is more reliable than TV news.', 'At least 5% of the residents both read the news mainly online and regularly watch the evening TV news.', 'Exactly 5% of the residents do both.', 'Younger residents prefer online news.'], answer: 1, explain: '60% + 45% = 105% > 100%, so the two groups overlap by at least 5%; the overlap may be larger.' },
    { block: 'V5', text: 'Water boils at 100 °C only at standard atmospheric pressure. The higher the altitude, the lower the air pressure and the lower the temperature at which water boils. Lhasa lies much higher above sea level than Prague.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Water in an open pot boils at a lower temperature in Lhasa than in Prague.', 'Food cooks faster in Lhasa than in Prague.', 'In Prague, water always boils at exactly 100 °C.', 'Water cannot reach 100 °C anywhere above sea level.'], answer: 0, explain: 'Higher altitude → lower pressure → lower boiling point. Cooking speed and Prague’s exact pressure are not given.' },
    { block: 'V5', text: 'The castle museum is open every day except Monday. Guided tours take place only on days when the museum is open, and never at weekends.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['The museum is closed on Sundays.', 'Guided tours take place every Tuesday.', 'Guided tours take place on at most four days a week.', 'Most visitors come at weekends.'], answer: 2, explain: 'Tours are possible only on Tuesday to Friday, i.e. on at most four days; whether they run on each of them is not stated.' },
    { block: 'V5', text: 'Every flat in the new block has either a balcony or a terrace, but no flat has both. All the flats on the top floor have a terrace. Flat 12 has a balcony.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Only flats on the top floor have a terrace.', 'Flat 12 is not on the top floor.', 'Flat 12 is on the ground floor.', 'Most flats in the block have a balcony.'], answer: 1, explain: 'Flat 12 has a balcony, so it has no terrace; every top-floor flat has a terrace, so flat 12 is not on the top floor.' },
    { block: 'V5', text: 'A portion of lentils contains more protein than a portion of rice, but less than a portion of chicken. A portion of tofu also contains more protein than a portion of rice.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['A portion of tofu contains more protein than a portion of lentils.', 'A portion of chicken contains the most protein of the four foods.', 'Rice contains no protein at all.', 'A portion of chicken contains more protein than a portion of rice.'], answer: 3, explain: 'chicken > lentils > rice, so chicken > rice. Tofu is only known to beat rice.' },

    // ---- V6 long text (Q21–26) ----
    { block: 'V6', q: 'What causes the urban heat island effect according to the text?', options: ['Cities are usually built in valleys with little wind.', 'Asphalt, concrete and dark roofs absorb sunlight and release the heat slowly.', 'More air conditioners are used in the countryside than in cities.', 'People living on upper floors keep their windows closed.'], answer: 1, explain: 'First paragraph.' },
    { block: 'V6', q: 'What does the text say about houses around the Mediterranean?', options: ['They were first painted white in the 20th century.', 'They are warmer in winter than other houses.', 'White paint has been banned in some of these towns.', 'In many towns they have been painted white for centuries.'], answer: 3, explain: 'Second paragraph: "houses have been painted white for centuries".' },
    { block: 'V6', q: 'Why do white roofs help to cool the whole neighbourhood, not just the building itself?', options: ['Buildings use less air conditioning, and air conditioners release heat into the streets.', 'White paint absorbs heat from the surrounding air.', 'Volunteers plant trees around the painted buildings.', 'White roofs make it rain more often.'], answer: 0, explain: 'Third paragraph: less air conditioning means less heat released into the streets.' },
    { block: 'V6', q: 'Which drawback of white roofs is mentioned in the text?', options: ['They are heavier than ordinary roofs.', 'They reflect sunlight into the windows of neighbouring buildings.', 'In cities with cold winters, a building may need slightly more heating.', 'They must be repainted every year.'], answer: 2, explain: 'Fourth paragraph. Being heavier is said about green roofs; dirt reduces the effect "within a few years", not every year.' },
    { block: 'V6', q: 'Which of the following is stated about green roofs?', options: ['They absorb rainwater.', 'They are cheaper to build than white roofs.', 'They are lighter than ordinary roofs.', 'They reflect more sunlight than white roofs.'], answer: 0, explain: 'Fifth paragraph: they absorb rainwater and provide a home for insects, but are heavier and more expensive.' },
    { block: 'V6', q: 'Which two of the following statements are true according to the text?\n1) On a hot day, a dark roof can be hotter than 70 °C.\n2) In most climates, white roofs save more energy in summer than they cost in winter.\n3) Less than half of the world’s population lives in cities.\n4) A white coating keeps its full effect even if it is never cleaned.', options: ['1 and 3', '1 and 2', '2 and 4', '3 and 4'], answer: 1, explain: '3 is false (more than half lives in cities), 4 is false (a dirty coating turns grey and loses its effect).' },

    // ---- A1 graph (Q27–29) ----
    { block: 'A1', q: 'What was the average speed of the car between 8:30 and 10:30?', options: ['50 km/h', '60 km/h', '70 km/h', '80 km/h'], answer: 1, explain: 'The car went from 0 km to 120 km in 2 hours: 120 / 2 = 60 km/h.' },
    { block: 'A1', q: 'What was the average speed of the bus over the whole period from 8:00 to 10:30, including the time it stood still?', options: ['28 km/h', '30 km/h', '32 km/h', '36 km/h'], answer: 2, explain: '80 km in 2.5 hours: 80 / 2.5 = 32 km/h.' },
    { block: 'A1', q: 'How many kilometres did the three vehicles travel in total between 9:00 and 10:00?', options: ['90 km', '100 km', '110 km', '120 km'], answer: 3, explain: 'Bus 40 → 60 (20 km), car 30 → 90 (60 km), lorry 60 → 20 (40 km): 20 + 60 + 40 = 120 km.' },

    // ---- A2 table (Q30–32) ----
    { block: 'A2', q: 'In which region did renewable sources cover the largest share of electricity consumption?', options: ['South', 'Centre', 'East', 'West'], answer: 3, explain: 'North 25%, South 40%, East 20%, West 60%, Centre 30% → West.' },
    { block: 'A2', q: 'In which region was electricity consumption per inhabitant the highest?', options: ['North', 'South', 'West', 'Centre'], answer: 1, explain: 'MWh per inhabitant: North 3, South 4, East 2.5, West 3.5, Centre 2.5 → South.' },
    { block: 'A2', q: 'Electricity from renewable sources per inhabitant was how many times higher in West than in East?', options: ['2.1 times', '3.5 times', '4.2 times', '5 times'], answer: 2, explain: 'West 63,000 / 30,000 = 2.1 MWh; East 25,000 / 50,000 = 0.5 MWh; 2.1 / 0.5 = 4.2.' },

    // ---- A3 quantitative comparison (Q33–38) ----
    { block: 'A3', template: 'quant', text: 'A train travels 180 km at a constant speed of 90 km/h and then another 180 km at a constant speed of 60 km/h.', left: 'the average speed of the train over the whole 360 km', right: '75 km/h', answer: 1, explain: 'Time 2 h + 3 h = 5 h; 360 / 5 = 72 km/h < 75 km/h.' },
    { block: 'A3', template: 'quant', left: '2⁵ + 2⁵', right: '4³', answer: 2, explain: '2⁵ + 2⁵ = 2 · 32 = 64 = 4³.' },
    { block: 'A3', template: 'quant', text: 'x is a real number and x ≠ 0.', left: 'x + 1/x', right: '2', answer: 3, explain: 'x = 1 gives 2 (equal), x = 2 gives 2.5 (greater), x = −1 gives −2 (smaller).' },
    { block: 'A3', template: 'quant', text: 'A 250 ml glass of orange juice contains 110 kcal. A 330 ml can of cola contains 140 kcal.', left: 'the energy in 100 ml of the orange juice', right: 'the energy in 100 ml of the cola', answer: 0, explain: 'Juice 110 / 2.5 = 44 kcal; cola 140 / 3.3 ≈ 42.4 kcal.' },
    { block: 'A3', template: 'quant', left: 'the number of minutes in one week', right: '10,000', answer: 0, explain: '7 · 24 · 60 = 10,080 > 10,000.' },
    { block: 'A3', template: 'quant', text: 'a and b are real numbers and a > b.', left: 'a²', right: 'b²', answer: 3, explain: 'a = 3, b = 1: 9 > 1; a = 1, b = −3: 1 < 9; a = 2, b = −2: equal.' },

    // ---- A4 data sufficiency (Q39–40) ----
    { block: 'A4', template: 'suff', q: 'A cyclist rode from town P to town Q without stopping. How long did the ride take?', s1: 'The distance from P to Q is 45 km.', s2: 'The cyclist’s average speed was 18 km/h.', answer: 2, explain: 'Neither the distance nor the speed alone gives the time; together 45 / 18 = 2.5 h.' },
    { block: 'A4', template: 'suff', q: 'x is an integer. What is the value of x?', s1: 'x³ = −64', s2: 'x² = 16', answer: 0, explain: '(1): x = −4 only. (2): x = 4 or x = −4, not enough.' },

    // ---- A5 word problems (Q41–45) ----
    { block: 'A5', q: 'A plane flies from city A to city B at 800 km/h and returns, against the wind, at 600 km/h. The two flights take 7 hours in total. How far is city A from city B?', options: ['2,100 km', '2,400 km', '2,800 km', '3,000 km'], answer: 1, explain: 'd/800 + d/600 = 7 → 3d + 4d = 16,800 → d = 2,400 km.' },
    { block: 'A5', q: 'A 2,000 W kettle is used for 6 minutes every day. Electricity costs 5 CZK per kWh. How much does it cost to run the kettle for 30 days?', options: ['6 CZK', '15 CZK', '30 CZK', '60 CZK'], answer: 2, explain: '2 kW · 0.1 h = 0.2 kWh a day; 30 days → 6 kWh; 6 · 5 = 30 CZK.' },
    { block: 'A5', q: 'How many grams of yoghurt with 4% fat must be mixed with 300 g of yoghurt with 10% fat to obtain yoghurt with 6% fat?', options: ['600 g', '750 g', '900 g', '1,200 g'], answer: 0, explain: '0.04x + 30 = 0.06(x + 300) → 30 − 18 = 0.02x → x = 600 g.' },
    { block: 'A5', q: 'A flight leaves Prague at 22:30 local time and lands in New York 9 hours later. New York time is 6 hours behind Prague time. What is the local time in New York when the plane lands?', options: ['1:30', '3:30', '7:30', '13:30'], answer: 0, explain: '22:30 + 9 h = 7:30 Prague time; 7:30 − 6 h = 1:30 New York time.' },
    { block: 'A5', q: 'A rectangular town square measuring 60 m by 40 m is to be paved with square tiles with sides of 50 cm. How many tiles are needed?', options: ['2,400', '4,800', '9,600', '12,000'], answer: 2, explain: '120 tiles along 60 m and 80 tiles along 40 m: 120 · 80 = 9,600.' },

    // ---- A6 mathematisation (Q46–48) ----
    { block: 'A6', q: 'A streaming service charges a fixed fee of 150 CZK a month, which includes 100 hours of viewing. Every additional hour costs 2 CZK. Which formula gives the monthly price P (in CZK) for h hours of viewing, where h > 100?', options: ['P = 150 + 2h', 'P = 150 + 2(h − 100)', 'P = 2(150 + h − 100)', 'P = 150 + 2(100 − h)'], answer: 1, explain: 'Only the h − 100 hours above the included 100 are paid at 2 CZK each.' },
    { block: 'A6', q: 'Function f is defined by f(x) = x² − 4x. For which values of x does f(x) = 5 hold?', options: ['−5 and 1', '5 and −1', '5 only', '1 and 5'], answer: 1, explain: 'x² − 4x − 5 = 0 → (x − 5)(x + 1) = 0 → x = 5 or x = −1.' },
    { block: 'A6', q: 'Which expression should be put in place of the question mark to make the equality valid for every real number a?\n(a + 2)² − (a − 2)² = ?', options: ['0', '8', '8a', '2a² + 8'], answer: 2, explain: '(a² + 4a + 4) − (a² − 4a + 4) = 8a.' },

    // ---- A7 logic set 1 (Q49–51) — solutions (Mon→Fri): PSLVM, PSVLM, SPLVM, SPVLM ----
    { block: 'A7', q: 'Which of the following could be the order of the cities from Monday to Friday?', options: ['Vienna, Porto, Seville, Lyon, Milan', 'Seville, Porto, Milan, Lyon, Vienna', 'Porto, Lyon, Seville, Vienna, Milan', 'Seville, Porto, Vienna, Lyon, Milan'], answer: 3, explain: 'A: Vienna on Monday. B: Milan before Vienna. C: Porto and Seville not on consecutive days.' },
    { block: 'A7', q: 'Which of the following must be true?', options: ['Milan is visited on Friday.', 'Lyon is visited on Wednesday.', 'Porto is visited on Monday.', 'Vienna is visited on the day directly before Milan.'], answer: 0, explain: 'Monday cannot be Vienna, Lyon or Milan (Milan comes after Vienna), so Porto and Seville take Monday and Tuesday. Friday cannot be Lyon or Vienna, so it is Milan.' },
    { block: 'A7', q: 'If Lyon is visited on Thursday, for how many of the five cities do we know for certain on which day they are visited?', options: ['two', 'three', 'four', 'five'], answer: 1, explain: 'Orders P, S, V, L, M or S, P, V, L, M: Vienna (Wed), Lyon (Thu) and Milan (Fri) are fixed; Porto and Seville can swap.' },

    // ---- A8 logic set 2 (Q52–54) — solutions: (Fiona Oslo Tue, Greg Rome Wed, Hana Lima Thu, Igor Cairo Mon), (Fiona Oslo Wed, Greg Rome Thu, Hana Lima Tue, Igor Cairo Mon), (Fiona Cairo Mon, Greg Rome Tue, Hana Lima Wed, Igor Oslo Thu), (Fiona Cairo Mon, Greg Rome Tue, Hana Lima Thu, Igor Oslo Wed) ----
    { block: 'A8', q: 'Which of the following could be true?', options: ['Hana filed her report on Monday.', 'Igor filed his report on Tuesday.', 'Fiona reported from Oslo and filed her report on Wednesday.', 'Greg filed his report on Monday.'], answer: 2, explain: 'Possible: Igor (Cairo) Mon, Hana Tue, Fiona (Oslo) Wed, Greg (Rome) Thu. Monday always belongs to Cairo (Fiona or Igor); Greg follows Fiona, so never Monday.' },
    { block: 'A8', q: 'Which of the following must be true?', options: ['Fiona reported from Cairo.', 'Hana filed her report on Thursday.', 'Igor reported from Oslo.', 'Greg reported from Rome.'], answer: 3, explain: 'Greg is not Cairo (not Monday), not Lima (Hana) and not Oslo, so he reported from Rome.' },
    { block: 'A8', q: 'If Fiona reported from Oslo, which of the following must be true?', options: ['Hana filed her report on Thursday.', 'Greg filed his report on Wednesday.', 'Fiona filed her report on Tuesday.', 'Igor filed his report on Monday.'], answer: 3, explain: 'Greg is Rome, Hana Lima, so Igor is Cairo and filed on Monday. Fiona/Greg are Tue/Wed or Wed/Thu.' },
  ],
}
