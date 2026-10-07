// GAP practice test 3 — 54 ORIGINAL items following the real SCIO GAP layout (13 Jan 2025 paper):
// Q1–3 V1 completion · Q4–6 V2 analogies · Q7–9 V3 synonym/antonym · Q10–14 V4 inconsistent part ·
// Q15–20 V5 inference · Q21–26 V6 long text · Q27–29 A1 graph · Q30–32 A2 table ·
// Q33–38 A3 comparison · Q39–40 A4 sufficiency · Q41–45 A5 word problems · Q46–48 A6 mathematisation ·
// Q49–51 A7 logic set 1 · Q52–54 A8 logic set 2.
// answer / answerB are 0-based option indexes. Logic sets verified by brute force.

export default {
  id: 'set3',
  title: 'Practice test 3',
  blocks: {
    V6: {
      stimulus: `Tiny forests, big hopes: can a tennis court of trees cool a city?

On a former car park in a Dutch suburb, about six hundred young trees grow on a plot no larger than a tennis court. Three years ago the site was covered with asphalt; today, local schoolchildren come here to count beetles and measure the height of the saplings. The plot is one of hundreds of so-called "tiny forests" that have appeared in European towns over the past decade.

The idea goes back to the Japanese botanist Akira Miyawaki, who developed a method of planting native species very close together – typically three to five trees per square metre. Instead of a single species in neat rows, dozens of different trees and shrubs are mixed at random. Before planting, the ground is loosened and enriched with compost so that the roots can spread easily. Because the young plants compete for light, they grow upwards quickly, and supporters claim that such a forest can become self-sustaining within about three years, after which it no longer needs watering or weeding.

The benefits most often mentioned are cooler streets, better soil and more wildlife. In one study, researchers recorded hundreds of animal and plant species across eleven tiny forests, many of them insects that had become rare in the surrounding neighbourhoods. Soil samples also contained more fungi and earthworms than those taken from ordinary city lawns. On hot afternoons, the air inside the plots was several degrees cooler than on nearby pavements, although the effect disappeared within a few dozen metres.

Not all scientists are convinced. Some ecologists argue that the popular claim that tiny forests grow "ten times faster" than ordinary ones has never been properly tested, and that planting so densely means many of the trees will inevitably die as they compete. Others worry that the method is sometimes used for "greenwashing": a company plants a small forest next to its headquarters and advertises it as a solution to climate change, even though the amount of carbon such a plot can store is tiny compared with the company's emissions.

Supporters reply that tiny forests were never meant to replace large woodlands. Their main value, they say, is social. Because the plots are planted by volunteers, often together with local schools, residents get to know their neighbours and learn about the nature on their doorstep. In several towns, the number of applications for new plots now exceeds the land available, and some councils have started to offer unused corners of parks and school grounds.`,
    },
    A1: {
      title: 'Graph',
      stimulus: 'The graph shows the amount of electricity (in terawatt-hours, TWh) produced from three sources in a small country in the years 2019 to 2024.',
      chart: {
        type: 'line',
        title: 'ELECTRICITY PRODUCTION BY SOURCE',
        yLabel: 'production [TWh]',
        yMax: 20, yStep: 2,
        xLabels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        series: [
          { name: 'Solar', values: [2, 4, 6, 8, 12, 14] },
          { name: 'Wind', values: [6, 6, 8, 10, 10, 12] },
          { name: 'Coal', values: [18, 16, 14, 10, 8, 6] },
        ],
      },
    },
    A2: {
      title: 'Table',
      stimulus: 'The table shows data on employees and training in five companies last year.',
      table: {
        head: ['company', 'employees', 'employees with a university degree', 'training budget (EUR)'],
        rows: [
          ['A', '200', '50', '40,000'],
          ['B', '400', '160', '60,000'],
          ['C', '150', '90', '45,000'],
          ['D', '600', '120', '210,000'],
          ['E', '250', '140', '25,000'],
        ],
      },
    },
    A7: {
      stimulus: `Five interns – Amir, Bella, Chen, Dana and Emil – each give one presentation during one week, from Monday to Friday, one presentation per day. We know that:
• Amir presents on an earlier day than Chen.
• Dana presents either on Monday or on Friday.
• Bella presents on a later day than Emil, but not on the day directly after him.
• Chen does not present on Friday.`,
    },
    A8: {
      stimulus: `Four volunteers – Olga, Pavel, Rita and Sam – each spend a different number of days (2, 3, 4 or 5) at a wildlife station. The stations are in Brno, Graz, Kraków and Linz, and each volunteer works at a different one. We know that:
• The volunteer in Graz stays longer than the volunteer in Linz.
• Rita stays for 4 days.
• Sam works either in Kraków or in Linz.
• Olga stays for fewer days than Pavel.
• The volunteer in Brno stays for 2 days.`,
    },
  },
  questions: [
    // ---- V1 completion (Q1–3) ----
    { block: 'V1', q: 'Although the new solar panels were more ________ to install, they paid for themselves within a few years because they ________ far more electricity than the old ones.', options: ['cheap – wasted', 'expensive – generated', 'difficult – consumed', 'popular – stored'], answer: 1, explain: '"Although" needs a disadvantage (expensive); paying for themselves needs a benefit (they generated more electricity).' },
    { block: 'V1', q: 'Online courses have made higher education far more ________: students in remote villages can now attend lectures that were once ________ only to those living near a university.', options: ['difficult – open', 'expensive – forbidden', 'formal – unknown', 'accessible – available'], answer: 3, explain: 'Students far away can now attend → education is more accessible; lectures were once available only to people nearby.' },
    { block: 'V1', q: 'The researchers warned that the decline of bees is by no means a ________ problem: without these insects, many crops would not be ________, and food prices would almost certainly ________.', options: ['serious – harvested – fall', 'local – grown – stabilise', 'minor – pollinated – rise', 'minor – eaten – drop'], answer: 2, explain: 'not a minor problem · crops would not be pollinated (what bees do) · prices would rise.' },

    // ---- V2 analogies (Q4–6) ----
    { block: 'V2', q: 'SEED : ________ = EGG : ________', options: ['plant – bird', 'flower – feather', 'small – white', 'fruit – yolk'], answer: 0, explain: 'What something develops into: a seed grows into a plant, an egg into a bird. In D the direction is reversed (a seed is inside a fruit, but a yolk is inside an egg).' },
    { block: 'V2', q: 'CATERPILLAR : ________ = ________ : FROG', options: ['wing – leg', 'leaf – pond', 'moth – toad', 'butterfly – tadpole'], answer: 3, explain: 'Young stage : adult. A caterpillar becomes a butterfly, as a tadpole becomes a FROG. A toad does not become a frog.' },
    { block: 'V2', q: 'THERMOMETER : ________ = ________ : WEIGHT', options: ['temperature – scales', 'heat – kilogram', 'fever – ruler', 'degree – mass'], answer: 0, explain: 'Instrument : what it measures. A thermometer measures temperature, scales measure WEIGHT. A kilogram is a unit, not an instrument.' },

    // ---- V3 synonym / antonym (Q7–9) ----
    { block: 'V3', q: 'The government introduced several measures to mitigate the effects of the drought on farmers.', word: 'mitigate', options: ['reduce', 'predict', 'study', 'ignore'], answer: 0, optionsB: ['worsen', 'explain', 'measure', 'prevent'], answerB: 0, explain: 'mitigate = reduce (make less severe); opposite = worsen.' },
    { block: 'V3', q: 'Within two years, the small start-up had become a prosperous company with offices in four countries.', word: 'prosperous', options: ['famous', 'international', 'young', 'thriving'], answer: 3, optionsB: ['unknown', 'small', 'struggling', 'local'], answerB: 2, explain: 'prosperous = thriving (successful, making money); opposite = struggling.' },
    { block: 'V3', q: 'The badger is an elusive animal that is rarely seen, even by people who live near its burrows.', word: 'elusive', options: ['hard to find', 'aggressive', 'noisy', 'slow'], answer: 0, optionsB: ['gentle', 'quiet', 'fast', 'easy to spot'], answerB: 3, explain: 'elusive = hard to find or catch; opposite = easy to spot.' },

    // ---- V4 inconsistent part (Q10–14) ----
    { block: 'V4', text: 'Glaciers in the Alps have been shrinking for more than a century. Since the 1980s, the rate of melting has increased considerably. Scientists link this trend mainly to rising summer temperatures. In some valleys, ice that was once several hundred metres thick has disappeared completely. Because summers have become cooler, the glaciers now lose less ice each year than they used to. Tourists who visit today often see bare rock where old postcards show a white surface.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Since the 1980s, the rate of melting has increased considerably.', 'Scientists link this trend mainly to rising summer temperatures.', 'Because summers have become cooler, the glaciers now lose less ice each year than they used to.', 'Tourists who visit today often see bare rock where old postcards show a white surface.'], answer: 2, explain: 'The text says melting has accelerated because of rising summer temperatures, so cooler summers and less ice loss contradict it.' },
    { block: 'V4', text: 'Smartphone batteries gradually lose capacity as they age. Each full charging cycle slightly reduces the amount of energy they can store. Heat speeds up this process considerably, so leaving a phone on a hot car dashboard is a bad idea. Manufacturers therefore recommend keeping phones in warm places to make the battery last longer. After two or three years, many users notice that their phone needs charging more often. Replacing the battery is usually much cheaper than buying a new phone.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Each full charging cycle slightly reduces the amount of energy they can store.', 'Manufacturers therefore recommend keeping phones in warm places to make the battery last longer.', 'After two or three years, many users notice that their phone needs charging more often.', 'Replacing the battery is usually much cheaper than buying a new phone.'], answer: 1, explain: 'Heat damages batteries, so the "therefore" recommendation to keep phones warm is the opposite of what follows.' },
    { block: 'V4', text: 'A primary school in a small town decided to stop giving homework to its youngest pupils. The teachers hoped this would give the children more time for play, sport and family. As a result, the pupils now have even less free time in the afternoons than before. Parents report that their children spend far more time outdoors or with friends. After one year, the pupils’ results in reading and mathematics were the same as before. The school has therefore decided to continue with the new approach.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['As a result, the pupils now have even less free time in the afternoons than before.', 'Parents report that their children spend far more time outdoors or with friends.', 'After one year, the pupils’ results in reading and mathematics were the same as before.', 'The school has therefore decided to continue with the new approach.'], answer: 0, explain: 'Dropping homework cannot reduce free time; the next sentence says children spend more time outdoors, and the school continues the successful change.' },
    { block: 'V4', text: 'Hummingbirds have the highest metabolism of any bird. Their hearts can beat more than a thousand times a minute while they are flying. To get enough energy, they must feed on nectar every few minutes during the day. At night, many species enter a state similar to hibernation, in which their body temperature drops sharply. This helps them save energy until they can feed again in the morning. Thanks to their slow metabolism, they can easily go for several days without eating.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Hummingbirds have the highest metabolism of any bird.', 'To get enough energy, they must feed on nectar every few minutes during the day.', 'At night, many species enter a state similar to hibernation, in which their body temperature drops sharply.', 'Thanks to their slow metabolism, they can easily go for several days without eating.'], answer: 3, explain: 'The text describes an extremely fast metabolism and feeding every few minutes; a slow metabolism and days without food contradict this.' },
    { block: 'V4', text: 'Over the past decade, many companies have begun to allow their employees to work from home. Employees save time and money because they no longer have to commute every day. Companies, in turn, can rent smaller offices and cut their costs. Some managers worry, however, that teamwork suffers when colleagues rarely meet in person. For this reason, a number of firms have introduced "office days", when the whole team comes in together. Working from home has consequently increased the commuting costs of most employees.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Employees save time and money because they no longer have to commute every day.', 'Companies, in turn, can rent smaller offices and cut their costs.', 'For this reason, a number of firms have introduced "office days", when the whole team comes in together.', 'Working from home has consequently increased the commuting costs of most employees.'], answer: 3, explain: 'Earlier the text says employees save money because they commute less, so higher commuting costs contradict it.' },

    // ---- V5 inference (Q15–20) ----
    { block: 'V5', text: 'A recycling scheme pays only for returned plastic bottles: 2 CZK for each bottle. Glass bottles are not accepted. Last week, Martin received 40 CZK from the scheme.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Last week, Martin returned exactly 20 plastic bottles to the scheme.', 'Martin does not buy drinks in glass bottles.', 'Martin returns bottles to the scheme every week.', 'Last week, Martin received more money than any other participant.'], answer: 0, explain: 'The scheme pays only 2 CZK per plastic bottle, so 40 CZK = 20 bottles. Nothing is said about his shopping habits or other people.' },
    { block: 'V5', text: 'All mammals living in the reserve are protected by law. Some of the birds living there are protected as well. Otters, which are mammals, live in the reserve.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Otters living in the reserve are protected by law.', 'All birds in the reserve are protected by law.', 'Some animals living in the reserve are not protected by law.', 'Only mammals and birds live in the reserve.'], answer: 0, explain: 'Otters are mammals living in the reserve, and all such mammals are protected. "Some birds" does not tell us whether all or only some are protected.' },
    { block: 'V5', text: 'Last year, the price of coffee beans rose by 50%. The café on the corner raised the price of each cup of coffee by only 10%, and it sold exactly as many cups as the year before.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['The café’s profit from selling coffee increased.', 'Coffee beans account for half of the price of a cup of coffee.', 'Customers did not notice the price increase.', 'Customers paid the café more money for coffee in total than the year before.'], answer: 3, explain: 'The same number of cups at a 10% higher price means 10% more revenue. Profit is unknown because costs rose too.' },
    { block: 'V5', text: 'The app can be installed only on phones with at least 4 GB of memory. Eva’s phone has 6 GB of memory. Tom tried to install the app, but did not succeed.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['The app cannot be installed on a phone with 3 GB of memory.', 'Tom’s phone has less than 4 GB of memory.', 'Eva has installed the app on her phone.', 'Eva’s phone has more memory than Tom’s.'], answer: 0, explain: '"Only on phones with at least 4 GB" excludes 3 GB. Tom may have failed for another reason, and Eva may not have tried.' },
    { block: 'V5', text: 'At a secondary school, every lesson lasts 45 minutes, and there is a 10-minute break between any two consecutive lessons. On Tuesdays, pupils have six lessons and the first one starts at 8:00.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['On Tuesdays, the third lesson starts at 9:40.', 'On Tuesdays, pupils spend more than five and a half hours at school.', 'On Tuesdays, the last lesson ends at 13:20.', 'On the other days of the week, pupils have fewer lessons.'], answer: 2, explain: '6 · 45 + 5 · 10 = 320 min = 5 h 20 min after 8:00 → 13:20. The third lesson starts at 9:50.' },
    { block: 'V5', text: 'In a certain town, the average July temperature has exceeded 20 °C every year since 2010. Before 2010, this had happened only twice: in 2003 and in 2007.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Between 2000 and 2009, the average July temperature exceeded 20 °C in exactly two years.', 'The average July temperature has risen every year since 2010.', 'July 2015 was the warmest July ever recorded in the town.', 'Before 2003, the average July temperature in the town never exceeded 18 °C.'], answer: 0, explain: 'Before 2010 it happened only in 2003 and 2007, both in 2000–2009. Exceeding 20 °C does not mean rising every year.' },

    // ---- V6 long text (Q21–26) ----
    { block: 'V6', q: 'What was on the site of the Dutch tiny forest described at the beginning before the trees were planted?', options: ['a tennis court', 'a school garden', 'a car park', 'a meadow'], answer: 2, explain: 'First paragraph: "On a former car park … covered with asphalt". The tennis court is only a comparison of size.' },
    { block: 'V6', q: 'According to the text, why do the trees in a tiny forest grow upwards quickly?', options: ['They are watered and fertilised every day.', 'They compete with each other for light.', 'Only fast-growing species are chosen.', 'They are planted in neat rows.'], answer: 1, explain: 'Second paragraph: "Because the young plants compete for light, they grow upwards quickly".' },
    { block: 'V6', q: 'What did the temperature measurements show?', options: ['The plots were cooler than nearby pavements, but the effect did not reach far.', 'The whole neighbourhood became several degrees cooler.', 'The temperature inside the plots was the same as on the pavements.', 'The plots were cooler only at night.'], answer: 0, explain: 'Several degrees cooler on hot afternoons, but the effect "disappeared within a few dozen metres".' },
    { block: 'V6', q: 'What do the critics mean by "greenwashing" in this context?', options: ['watering tiny forests with recycled water', 'planting only evergreen species', 'replacing large woodlands with tiny forests', 'advertising a small forest as a solution to climate change although its effect is tiny'], answer: 3, explain: 'Fourth paragraph: a company presents a small forest as a climate solution, though it stores little carbon compared with its emissions.' },
    { block: 'V6', q: 'According to the supporters, what is the main value of tiny forests?', options: ['storing large amounts of carbon', 'replacing large woodlands', 'producing timber for local use', 'bringing residents together and teaching them about nature'], answer: 3, explain: 'Last paragraph: "Their main value, they say, is social."' },
    { block: 'V6', q: 'Which two of the following statements are true according to the text?\n1) In a tiny forest, trees of a single species are planted in neat rows.\n2) Some ecologists expect many of the densely planted trees to die.\n3) In some towns, more people want new plots than there is land available.\n4) Tiny forests must be watered and weeded for at least ten years.', options: ['1 and 2', '1 and 4', '2 and 3', '3 and 4'], answer: 2, explain: '1 is false (dozens of species mixed at random), 4 is false (self-sustaining within about three years).' },

    // ---- A1 graph (Q27–29) ----
    { block: 'A1', q: 'In which year did solar sources produce more electricity than coal for the first time?', options: ['2021', '2022', '2023', '2024'], answer: 2, explain: 'Solar vs coal: 2021 6 < 14, 2022 8 < 10, 2023 12 > 8.' },
    { block: 'A1', q: 'How did the total production from all three sources change between 2019 and 2024?', options: ['It rose by 4 TWh.', 'It rose by 6 TWh.', 'It rose by 8 TWh.', 'It fell by 2 TWh.'], answer: 1, explain: '2019: 2 + 6 + 18 = 26 TWh; 2024: 14 + 12 + 6 = 32 TWh → +6 TWh.' },
    { block: 'A1', q: 'In how many of the years shown did wind produce more electricity than coal?', options: ['1', '2', '3', '4'], answer: 1, explain: '2023 (10 > 8) and 2024 (12 > 6). In 2022 both produced 10 TWh.' },

    // ---- A2 table (Q30–32) ----
    { block: 'A2', q: 'In which company do employees with a university degree make up the largest share of all employees?', options: ['B', 'C', 'D', 'E'], answer: 1, explain: 'A 25%, B 40%, C 60%, D 20%, E 56% → C.' },
    { block: 'A2', q: 'In which company is the training budget per employee the highest?', options: ['A', 'B', 'C', 'D'], answer: 3, explain: 'A 200, B 150, C 300, D 350, E 100 EUR per employee → D.' },
    { block: 'A2', q: 'How many employees without a university degree work in companies A and B together?', options: ['330', '360', '390', '420'], answer: 2, explain: '(200 − 50) + (400 − 160) = 150 + 240 = 390.' },

    // ---- A3 quantitative comparison (Q33–38) ----
    { block: 'A3', template: 'quant', text: 'A laptop costs 20,000 CZK. In a sale, its price is reduced by 15%, and a week later the reduced price is cut by a further 15%.', left: 'the final price of the laptop', right: '14,000 CZK', answer: 0, explain: '20,000 · 0.85 = 17,000; 17,000 · 0.85 = 14,450 CZK > 14,000 CZK.' },
    { block: 'A3', template: 'quant', text: 'x is a negative number.', left: 'x³', right: 'x²', answer: 1, explain: 'For every negative x, x³ is negative and x² is positive.' },
    { block: 'A3', template: 'quant', text: 'a and b are real numbers and a > b.', left: 'a²', right: 'b²', answer: 3, explain: 'a = 2, b = 1: 4 > 1; a = −1, b = −2: 1 < 4; a = 1, b = −1: 1 = 1.' },
    { block: 'A3', template: 'quant', left: 'the number of minutes in 3 days', right: 'the number of seconds in 72 minutes', answer: 2, explain: '3 · 24 · 60 = 4,320; 72 · 60 = 4,320.' },
    { block: 'A3', template: 'quant', text: 'A cyclist rides 30 km at 15 km/h and then another 30 km at 30 km/h.', left: 'the average speed for the whole ride', right: '18 km/h', answer: 0, explain: 'Time 2 h + 1 h = 3 h for 60 km → 20 km/h > 18 km/h.' },
    { block: 'A3', template: 'quant', text: 'In a class of 30 pupils, 18 have a dog and 15 have a cat. Every pupil has at least one of these pets.', left: 'the number of pupils who have both a dog and a cat', right: '3', answer: 2, explain: '18 + 15 − 30 = 3 pupils are counted twice.' },

    // ---- A4 data sufficiency (Q39–40) ----
    { block: 'A4', template: 'suff', q: 'A rectangular garden has an area of 48 m². What is its perimeter?', s1: 'One side of the garden is 6 m long.', s2: 'The garden is 2 m longer than it is wide.', answer: 3, explain: '(1): sides 6 and 8 → 28 m. (2): w(w + 2) = 48 → w = 6 → 28 m. Each alone is enough.' },
    { block: 'A4', template: 'suff', q: 'Petra, Karel and Jan together saved 900 CZK. How much did Petra save?', s1: 'Karel and Jan saved the same amount.', s2: 'Petra saved as much as Karel and Jan together.', answer: 1, explain: '(2): P + P = 900 → P = 450. (1) alone gives only P + 2K = 900.' },

    // ---- A5 word problems (Q41–45) ----
    { block: 'A5', q: 'A school bought 12 tablets for 96,000 CZK. How many tablets of the same price could it buy for 136,000 CZK?', options: ['15', '16', '17', '18'], answer: 2, explain: '96,000 / 12 = 8,000 CZK; 136,000 / 8,000 = 17.' },
    { block: 'A5', q: 'One pump alone fills a garden pond in 6 hours, a second pump alone in 3 hours. How long does it take to fill the pond if both pumps work together?', options: ['1.5 hours', '2 hours', '2.5 hours', '4.5 hours'], answer: 1, explain: '1/6 + 1/3 = 1/2 of the pond per hour → 2 hours.' },
    { block: 'A5', q: 'A colony of bacteria doubles in size every 20 minutes. At 9:00 it had 500 bacteria. How many bacteria did it have at 10:00?', options: ['1,500', '2,000', '3,000', '4,000'], answer: 3, explain: 'Three doublings: 500 → 1,000 → 2,000 → 4,000.' },
    { block: 'A5', q: 'In a company, the ratio of men to women is 3 : 5. After 6 more men are hired (and no one leaves), the ratio becomes 3 : 4. How many women work in the company?', options: ['30', '35', '40', '45'], answer: 2, explain: 'Men 3k, women 5k: (3k + 6) / 5k = 3/4 → 12k + 24 = 15k → k = 8 → 40 women.' },
    { block: 'A5', q: 'A recycling centre collected 1,200 kg of waste. 35% of it was paper, a quarter of the rest was glass, and everything else was plastic. How many kilograms of plastic were collected?', options: ['540', '585', '600', '645'], answer: 1, explain: 'Paper 420 kg, rest 780 kg; glass 780 / 4 = 195 kg; plastic 780 − 195 = 585 kg.' },

    // ---- A6 mathematisation (Q46–48) ----
    { block: 'A6', q: 'A mobile tariff costs 150 CZK per month, which includes 100 minutes of calls. Every further minute costs 2 CZK. Which formula gives the monthly cost C (in CZK) for m minutes of calls, if m > 100?', options: ['C = 150 + 2m', 'C = 150 + 2(m − 100)', 'C = 2(150 + m − 100)', 'C = 150 − 2(m − 100)'], answer: 1, explain: 'Only the minutes above 100, i.e. m − 100, are charged at 2 CZK each.' },
    { block: 'A6', q: 'Function f is defined by f(x) = x² − 4x. For which positive x does f(x) = 12 hold?', options: ['2', '4', '6', '12'], answer: 2, explain: 'x² − 4x − 12 = 0 → (x − 6)(x + 2) = 0 → x = 6 (x = −2 is not positive).' },
    { block: 'A6', q: 'Which expression should be put in place of the question mark to make the equality valid?\n(2x + 3)² − (2x − 3)² = ?', options: ['0', '18', '12x', '24x'], answer: 3, explain: '(4x² + 12x + 9) − (4x² − 12x + 9) = 24x.' },

    // ---- A7 logic set 1 (Q49–51) — solutions (Mon→Fri): AECBD, DAECB, DEACB, EABCD, EACBD ----
    { block: 'A7', q: 'Which of the following could be the order of the presentations from Monday to Friday?', options: ['Emil, Amir, Chen, Bella, Dana', 'Dana, Emil, Bella, Amir, Chen', 'Amir, Emil, Bella, Chen, Dana', 'Emil, Dana, Amir, Bella, Chen'], answer: 0, explain: 'B: Bella directly after Emil (and Chen on Friday). C: Bella directly after Emil. D: Dana on Tuesday.' },
    { block: 'A7', q: 'If Dana presents on Monday, which of the following must be true?', options: ['Chen presents on Thursday.', 'Emil presents on Tuesday.', 'Amir presents on Wednesday.', 'Bella presents on Wednesday.'], answer: 0, explain: 'Possible orders: Dana, Amir, Emil, Chen, Bella or Dana, Emil, Amir, Chen, Bella — Chen is always on Thursday.' },
    { block: 'A7', q: 'Which of the following statements must be true?', options: ['Emil presents on Monday or on Tuesday.', 'Dana presents on Friday.', 'Chen presents on the day directly after Amir.', 'Amir presents on an earlier day than Bella.'], answer: 3, explain: 'In all five possible orders (AECBD, DAECB, DEACB, EABCD, EACBD) Amir comes before Bella. In DAECB Emil is on Wednesday; in AECBD Chen is not directly after Amir.' },

    // ---- A8 logic set 2 (Q52–54) — solutions: Olga Brno 2 in all; (Pavel Graz 5, Rita Kraków 4, Sam Linz 3) · (Pavel Graz 5, Rita Linz 4, Sam Kraków 3) · (Pavel Kraków 5, Rita Graz 4, Sam Linz 3) · (Pavel Linz 3, Rita Graz 4, Sam Kraków 5) ----
    { block: 'A8', q: 'Which of the following could be true?', options: ['Pavel works in Brno.', 'Olga stays for 3 days.', 'Sam stays for 5 days.', 'Rita works in Brno.'], answer: 2, explain: 'The Brno volunteer stays 2 days; that cannot be Rita (4), Pavel (more than Olga) or Sam (Kraków/Linz), so Olga is in Brno for 2 days. Sam can stay 5 days: Olga Brno 2, Pavel Linz 3, Rita Graz 4, Sam Kraków 5.' },
    { block: 'A8', q: 'If Pavel works in Graz, which of the following must be true?', options: ['Rita works in Linz.', 'Sam stays for 3 days.', 'Sam works in Kraków.', 'Rita works in Kraków.'], answer: 1, explain: 'Olga is in Brno (2). Graz must beat Linz, so Pavel stays 5 and Sam 3 (Rita has 4); Rita and Sam can share Kraków and Linz either way.' },
    { block: 'A8', q: 'For how many volunteers do we know for certain both the city and the number of days?', options: ['none', 'only one', 'two', 'three'], answer: 1, explain: 'Only Olga (Brno, 2 days). Rita always stays 4 days, but her city varies.' },
  ],
}
