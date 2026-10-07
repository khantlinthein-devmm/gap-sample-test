// GAP practice test 4 — 54 ORIGINAL items following the real SCIO GAP layout (13 Jan 2025 paper):
// Q1–3 V1 completion · Q4–6 V2 analogies · Q7–9 V3 synonym/antonym · Q10–14 V4 inconsistent part ·
// Q15–20 V5 inference · Q21–26 V6 long text · Q27–29 A1 graph · Q30–32 A2 table ·
// Q33–38 A3 comparison · Q39–40 A4 sufficiency · Q41–45 A5 word problems · Q46–48 A6 mathematisation ·
// Q49–51 A7 logic set 1 · Q52–54 A8 logic set 2.
// answer / answerB are 0-based option indexes. Logic sets verified by brute force.

export default {
  id: 'set4',
  title: 'Practice test 4',
  blocks: {
    V6: {
      stimulus: `Farming without fields: the promise and problems of vertical farms

In a former car factory on the edge of Copenhagen, lettuce, basil and kale grow in stacked trays that rise fourteen levels towards the ceiling. There is no soil and no sunlight. Instead, the plants' roots sit in a thin stream of water enriched with nutrients, while thousands of LED lamps provide light of exactly the colours the leaves need. The company that runs the farm claims that it produces as much food each year as a conventional farm two hundred times its size.

Supporters of vertical farming list several advantages. Because the plants grow indoors, they are protected from storms, droughts and pests, so no pesticides are needed. The water is collected and reused, which means the farm consumes up to ninety-five per cent less water than a field producing the same crop. And because vertical farms can be built inside cities, vegetables can reach supermarkets within hours of being harvested, rather than after a journey of several days by lorry. Fresher vegetables also stay crisp for longer, so less food is thrown away.

The main problem is energy. Sunlight is free, but artificial light is not, and lamps together with air-conditioning can make up more than half of a vertical farm's running costs. When electricity prices rose sharply in 2022, several well-known companies in Europe and the United States went bankrupt. Critics also point out that unless the electricity comes from renewable sources, a lettuce grown indoors may be responsible for more greenhouse gas emissions than one grown in a field and transported across a continent.

There are limits, too, to what can be grown. Leafy greens and herbs are ideal because they grow quickly, are light, and almost the whole plant can be sold. Staple crops such as wheat, rice or potatoes, on the other hand, need far more light and space for every calorie they provide, so growing them indoors would be hopelessly expensive. Fruit trees are even less suitable, since they take years to mature and would not fit between the shelves.

Researchers are nevertheless optimistic. Newer LED lamps convert electricity into light much more efficiently than those used ten years ago, and some farms now run their lamps mainly at night, when electricity is cheaper. Others are being built next to wind farms or next to factories that produce waste heat. "Vertical farms will not replace traditional agriculture," says one agricultural economist, "but in crowded cities, or in places with little fertile land, they may become an important supplement."`,
    },
    A1: {
      title: 'Graph',
      stimulus: 'The graph shows the harvest (in thousands of tonnes) of three crops in one region in the years 2020 to 2024.',
      chart: {
        type: 'bar',
        title: 'CROP HARVEST IN THE REGION',
        yLabel: 'harvest [thousand tonnes]',
        yMax: 20, yStep: 2,
        xLabels: ['2020', '2021', '2022', '2023', '2024'],
        series: [
          { name: 'Wheat', values: [12, 14, 10, 16, 18] },
          { name: 'Barley', values: [8, 6, 10, 10, 6] },
          { name: 'Rapeseed', values: [4, 6, 8, 6, 4] },
        ],
      },
    },
    A2: {
      title: 'Table',
      stimulus: 'The table shows the results of a regional election in five districts. Turnout is the proportion of registered voters who cast a vote.',
      table: {
        head: ['district', 'registered voters', 'votes cast', 'votes for Party X'],
        rows: [
          ['North', '40,000', '24,000', '6,000'],
          ['South', '25,000', '20,000', '8,000'],
          ['East', '30,000', '15,000', '6,000'],
          ['West', '50,000', '35,000', '9,000'],
          ['Centre', '20,000', '16,000', '4,000'],
        ],
      },
    },
    A7: {
      stimulus: `Five bands – Aurora, Blaze, Comet, Drift and Echo – play at a small festival on five evenings from Monday to Friday, one band per evening. We know that:
• Comet plays on Wednesday or on Thursday.
• Aurora plays on an earlier day than Blaze.
• Drift and Echo play on two consecutive days (in either order).
• Aurora does not play on Monday.`,
    },
    A8: {
      stimulus: `Four journalists – Hana, Igor, Jana and Karel – each report from a different city (Berlin, Madrid, Paris, Rome), and each wrote a different number of articles last week (2, 3, 4 or 5). We know that:
• The journalist in Rome wrote more articles than Igor.
• Hana wrote 4 articles and does not report from Paris.
• Jana reports from Madrid.
• The journalist in Berlin wrote exactly one article more than the journalist in Paris.
• Karel wrote fewer articles than Jana.`,
    },
  },
  questions: [
    // ---- V1 completion (Q1–3) ----
    { block: 'V1', q: 'Although the new law was meant to ________ small farmers, many of them complained that its rules were far too ________ to follow.', options: ['protect – complicated', 'harm – simple', 'support – easy', 'punish – strict'], answer: 0, explain: '"Although" needs a contrast: a law meant to help farmers, but rules too complicated for them to follow.' },
    { block: 'V1', q: "The orchestra's performance was ________ by the critics, who praised in particular the ________ way in which the young conductor handled the slow movement.", options: ['condemned – careless', 'acclaimed – sensitive', 'ignored – brilliant', 'applauded – clumsy'], answer: 1, explain: 'Critics who "praised" must have acclaimed the performance, and they praised a positive quality (sensitive). Ignored critics cannot praise anything.' },
    { block: 'V1', q: 'Astronomers ________ the comet several months before it became ________ to the naked eye, which gave observatories enough time to ________ their equipment.', options: ['missed – invisible – sell', 'lost – bright – hide', 'imagined – dark – break', 'detected – visible – prepare'], answer: 3, explain: 'They detected it early, before it became visible, so there was time to prepare the equipment.' },

    // ---- V2 analogies (Q4–6) ----
    { block: 'V2', q: 'JUDGE : ________ = CONDUCTOR : ________', options: ['verdict – orchestra', 'courtroom – music', 'gavel – baton', 'lawyer – violin'], answer: 2, explain: 'Person : the small tool typical of their work (a judge strikes a gavel, a conductor holds a baton). The other pairs mix different relations.' },
    { block: 'V2', q: 'TELESCOPE : ________ = ________ : MICROBE', options: ['lens – bacteria', 'astronomer – biologist', 'sky – laboratory', 'star – microscope'], answer: 3, explain: 'A telescope is used to observe a star, as a microscope is used to observe a microbe. "astronomer – biologist" gives TELESCOPE : user but biologist : object studied — a different relation.' },
    { block: 'V2', q: 'SEED : ________ = ________ : BREAD', options: ['soil – oven', 'plant – dough', 'farmer – baker', 'garden – slice'], answer: 1, explain: 'A seed develops into a plant, as dough becomes bread. In "soil – oven" and "farmer – baker" the direction is reversed on the right (place/person : product).' },

    // ---- V3 synonym / antonym (Q7–9) ----
    { block: 'V3', q: 'Asked about the missing funds, the minister gave an evasive answer and quickly changed the subject.', word: 'evasive', options: ['indirect', 'aggressive', 'lengthy', 'humorous'], answer: 0, optionsB: ['brief', 'candid', 'calm', 'formal'], answerB: 1, explain: 'evasive = avoiding a direct reply (indirect); opposite = candid (open, frank).' },
    { block: 'V3', q: 'The festival attracted a diverse audience, from teenagers to retired farmers.', word: 'diverse', options: ['large', 'varied', 'loyal', 'noisy'], answer: 1, optionsB: ['small', 'quiet', 'uniform', 'faithful'], answerB: 2, explain: 'diverse = varied; opposite = uniform (all alike). "small" is the opposite of "large", not of "diverse".' },
    { block: 'V3', q: 'After the long drought, the harvest in the southern provinces was meagre.', word: 'meagre', options: ['late', 'bitter', 'scanty', 'costly'], answer: 2, optionsB: ['abundant', 'early', 'sweet', 'cheap'], answerB: 0, explain: 'meagre = scanty, very small in amount; opposite = abundant.' },

    // ---- V4 inconsistent part (Q10–14) ----
    { block: 'V4', text: 'In many countries, voting is voluntary, and turnout in some elections falls below fifty per cent. Australia, by contrast, has made voting compulsory in federal elections since 1924. Citizens who fail to vote without a valid reason must pay a small fine. As a result, turnout in Australian federal elections regularly exceeds ninety per cent. Supporters argue that compulsory voting makes parliament more representative of the whole population. Since the fine was introduced, however, fewer Australians have taken part in elections than before. Critics reply that forcing people to vote does not make them better informed.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['As a result, turnout in Australian federal elections regularly exceeds ninety per cent.', 'Supporters argue that compulsory voting makes parliament more representative of the whole population.', 'Since the fine was introduced, however, fewer Australians have taken part in elections than before.', 'Critics reply that forcing people to vote does not make them better informed.'], answer: 2, explain: 'The text says the compulsory vote (with the fine) raised turnout above ninety per cent; a fall in participation contradicts this.' },
    { block: 'V4', text: "Vincent van Gogh is now one of the most famous painters in history. Wealthy collectors competed fiercely for his paintings while he was still alive. He painted more than eight hundred canvases in just over ten years, yet he sold hardly any of them and lived largely on money from his brother Theo. Only after his death in 1890 did his reputation begin to grow, thanks partly to the efforts of Theo's widow, Johanna. Today, his works sell for tens of millions of dollars at auction.", q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['Wealthy collectors competed fiercely for his paintings while he was still alive.', 'He painted more than eight hundred canvases in just over ten years, yet he sold hardly any of them and lived largely on money from his brother Theo.', "Only after his death in 1890 did his reputation begin to grow, thanks partly to the efforts of Theo's widow, Johanna.", 'Today, his works sell for tens of millions of dollars at auction.'], answer: 0, explain: 'He sold hardly any paintings and became famous only after his death, so collectors could not have competed for his work during his lifetime.' },
    { block: 'V4', text: 'The Moon always shows the same face to the Earth. This happens because it rotates around its own axis exactly once during each orbit around our planet. Scientists call this phenomenon tidal locking. Since the Moon does not rotate at all, we can never see its far side from the Earth. The far side was first photographed in 1959 by the Soviet probe Luna 3. Many other moons in the Solar System are tidally locked to their planets as well.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['The Moon always shows the same face to the Earth.', 'This happens because it rotates around its own axis exactly once during each orbit around our planet.', 'Scientists call this phenomenon tidal locking.', 'Since the Moon does not rotate at all, we can never see its far side from the Earth.'], answer: 3, explain: 'The second sentence explains that the Moon does rotate (once per orbit); claiming it does not rotate at all contradicts it.' },
    { block: 'V4', text: 'Potatoes were brought to Europe from South America in the sixteenth century. At first, many Europeans distrusted them, and in some regions they were fed only to animals. Over time, however, farmers discovered that potatoes produced more calories per hectare than wheat or rye. This made them an important protection against famine. Because potatoes yield so little food from a field, they were soon grown mainly in rich regions with plenty of land. Their popularity spread especially quickly in Ireland and Prussia. Today, potatoes are among the most widely grown crops in the world.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['At first, many Europeans distrusted them, and in some regions they were fed only to animals.', 'Because potatoes yield so little food from a field, they were soon grown mainly in rich regions with plenty of land.', 'Their popularity spread especially quickly in Ireland and Prussia.', 'Today, potatoes are among the most widely grown crops in the world.'], answer: 1, explain: 'The text says potatoes give more calories per hectare than grain; a low yield contradicts this.' },
    { block: 'V4', text: 'Psychologists have long studied the so-called bystander effect. In a number of experiments, people who believed they were the only witness to an emergency helped quickly. When participants thought that several other people had also noticed the problem, they were much slower to react. One explanation is that responsibility seems to be shared among everyone present, so each individual feels less obliged to act. The more witnesses there are, therefore, the more likely it is that any single person will step in. Some researchers, however, point out that in real-life street situations, groups do sometimes help effectively.', q: 'Which of the following parts of the text is not consistent with its overall meaning?', options: ['In a number of experiments, people who believed they were the only witness to an emergency helped quickly.', 'One explanation is that responsibility seems to be shared among everyone present, so each individual feels less obliged to act.', 'The more witnesses there are, therefore, the more likely it is that any single person will step in.', 'Some researchers, however, point out that in real-life street situations, groups do sometimes help effectively.'], answer: 2, explain: 'The experiments show that more witnesses make each person slower to help; the "therefore" sentence reverses this.' },

    // ---- V5 inference (Q15–20) ----
    { block: 'V5', text: 'In the town council election, every party that received at least 5% of the votes won at least one seat. The Green Party, which took part in the election, won no seats.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Every party that received less than 5% of the votes won no seats.', 'The Green Party received no votes at all.', 'Most parties won at least one seat.', 'The Green Party received less than 5% of the votes.'], answer: 3, explain: 'Had the Greens received 5% or more, they would have won a seat. The rule says nothing about parties below 5% in general (option A reverses it).' },
    { block: 'V5', text: 'All the paintings in the exhibition were painted before 1900. None of the paintings painted before 1850 is a landscape. The exhibition includes several landscapes.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['At least one painting in the exhibition was painted in 1850 or later.', 'Most of the paintings in the exhibition are landscapes.', 'All landscapes painted after 1850 are shown in the exhibition.', 'None of the paintings in the exhibition was painted before 1850.'], answer: 0, explain: 'The landscapes in the exhibition cannot be from before 1850, so they were painted between 1850 and 1899. Other paintings may still be older.' },
    { block: 'V5', text: 'The observatory is open to the public only on clear nights. It was open to the public last Friday.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['The observatory is open to the public on every clear night.', 'Last Friday, the observatory had more visitors than usual.', 'The night last Friday was clear.', 'The observatory was closed to the public last Saturday.'], answer: 2, explain: '"Only on clear nights": an open night must have been clear. A reverses the condition.' },
    { block: 'V5', text: 'A bakery sells rye bread and wheat bread. Every loaf of rye bread costs more than any loaf of wheat bread. Yesterday, Martin bought one loaf of rye bread and Klára bought two loaves of wheat bread.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Martin paid more than Klára.', "Martin's loaf cost more than either of Klára's loaves.", 'Klára paid more than Martin.', 'Rye bread is more popular than wheat bread.'], answer: 1, explain: 'Each rye loaf costs more than any wheat loaf. The totals cannot be compared (two cheaper loaves may cost more or less than one expensive one).' },
    { block: 'V5', text: 'In a study, participants who slept less than six hours a night made more errors in a memory test than those who slept eight hours. The two groups were of similar age and education.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Sleeping less than six hours a night damages the memory of every person.', 'Participants who slept seven hours made fewer errors than those who slept six hours.', 'Older participants slept less than younger ones.', 'In the study, the participants who slept eight hours made fewer errors in the memory test than those who slept less than six hours.'], answer: 3, explain: 'Only the comparison between the two groups is stated; A overgeneralises, B and C add information not in the text.' },
    { block: 'V5', text: 'In this country, a person must be at least 18 years old to vote and at least 21 years old to stand for parliament. Nobody over 70 may be appointed as a judge.', q: 'Which of the following statements can be inferred from the text with certainty?', options: ['Every 21-year-old citizen is a member of parliament.', 'A 19-year-old may stand for parliament.', 'Anyone who meets the age requirement for standing for parliament also meets the age requirement for voting.', 'Judges must be at least 21 years old.'], answer: 2, explain: 'Anyone aged 21 or more is also at least 18. No minimum age for judges is given.' },

    // ---- V6 long text (Q21–26) ----
    { block: 'V6', q: 'How do the plants in the Copenhagen farm receive nutrients?', options: ['from soil brought in from nearby fields', 'from water flowing past their roots', 'from the light of special lamps', 'from fertiliser sprayed onto their leaves'], answer: 1, explain: 'First paragraph: the roots sit in a thin stream of water enriched with nutrients.' },
    { block: 'V6', q: 'According to the text, why do vertical farms need no pesticides?', options: ['The plants are harvested before pests appear.', 'The water is collected and reused.', 'The farms are built inside cities.', 'The plants grow indoors, protected from pests.'], answer: 3, explain: 'Second paragraph: because the plants grow indoors, they are protected from pests.' },
    { block: 'V6', q: 'What happened in 2022 according to the text?', options: ['Several vertical farming companies went bankrupt after electricity prices rose.', 'The Copenhagen farm moved into a former car factory.', 'Vertical farms in Europe stopped using LED lamps.', 'Vertical farms started growing wheat and rice.'], answer: 0, explain: 'Third paragraph.' },
    { block: 'V6', q: 'Why are leafy greens and herbs well suited to vertical farming?', options: ['They need more light than other crops.', 'They provide more calories than staple crops.', 'They grow quickly, are light, and almost the whole plant can be sold.', 'They can be transported for several days without damage.'], answer: 2, explain: 'Fourth paragraph.' },
    { block: 'V6', q: 'Which of the following is mentioned as a way of reducing the energy costs of vertical farms?', options: ['growing staple crops instead of herbs', 'using sunlight from glass roofs', 'reducing the number of levels', 'running the lamps mainly at night'], answer: 3, explain: 'Last paragraph: some farms run their lamps at night, when electricity is cheaper.' },
    { block: 'V6', q: 'Which two of the following statements are true according to the text?\n1) The Copenhagen farm uses up to ninety-five per cent less water than a field producing the same crop.\n2) Experts expect vertical farms to replace traditional agriculture.\n3) Lamps and air-conditioning can make up more than half of a vertical farm\'s running costs.\n4) Wheat is one of the crops best suited to vertical farming.', options: ['1 and 2', '1 and 3', '2 and 4', '3 and 4'], answer: 1, explain: '2 is false (the economist says they will not replace it), 4 is false (staple crops would be hopelessly expensive).' },

    // ---- A1 graph (Q27–29) ----
    { block: 'A1', q: 'In how many of the years was the wheat harvest larger than the barley and rapeseed harvests combined?', options: ['1', '2', '3', '4'], answer: 1, explain: 'Barley + rapeseed: 12, 12, 18, 16, 10. Wheat: 12, 14, 10, 16, 18 → larger only in 2021 and 2024 (2020 and 2023 are equal).' },
    { block: 'A1', q: 'What percentage of the total harvest of all three crops in 2023 was wheat?', options: ['40 %', '45 %', '50 %', '55 %'], answer: 2, explain: '2023 total: 16 + 10 + 6 = 32; 16 / 32 = 50 %.' },
    { block: 'A1', q: 'What was the average annual wheat harvest in the years 2020 to 2024?', options: ['14,000 tonnes', '14,500 tonnes', '15,000 tonnes', '16,000 tonnes'], answer: 0, explain: '(12 + 14 + 10 + 16 + 18) / 5 = 70 / 5 = 14 thousand tonnes.' },

    // ---- A2 table (Q30–32) ----
    { block: 'A2', q: 'In how many districts was the turnout at least 70 %?', options: ['2', '3', '4', '5'], answer: 1, explain: 'Turnout: North 60 %, South 80 %, East 50 %, West 70 %, Centre 80 % → South, West, Centre.' },
    { block: 'A2', q: 'What percentage of all votes cast in the five districts together went to Party X?', options: ['25 %', '28 %', '30 %', '33 %'], answer: 2, explain: 'Votes cast: 110,000; Party X: 6 + 8 + 6 + 9 + 4 = 33 thousand → 33,000 / 110,000 = 30 %.' },
    { block: 'A2', q: 'In which district did Party X receive votes from the largest proportion of all registered voters?', options: ['North', 'East', 'West', 'South'], answer: 3, explain: 'North 6/40 = 15 %, South 8/25 = 32 %, East 6/30 = 20 %, West 9/50 = 18 %, Centre 4/20 = 20 % → South.' },

    // ---- A3 quantitative comparison (Q33–38) ----
    { block: 'A3', template: 'quant', text: 'A spacecraft travels 1,200 km in 4 minutes at a constant speed.', left: 'its speed in kilometres per second', right: '4.5', answer: 0, explain: '4 minutes = 240 s; 1,200 / 240 = 5 km/s > 4.5.' },
    { block: 'A3', template: 'quant', text: 'x is an integer and −3 < x < 2.', left: 'x³', right: 'x²', answer: 3, explain: 'x ∈ {−2, −1, 0, 1}: x = −2 gives −8 < 4, but x = 0 or x = 1 gives equality.' },
    { block: 'A3', template: 'quant', left: '0.3²', right: '0.3', answer: 1, explain: '0.3² = 0.09 < 0.3.' },
    { block: 'A3', template: 'quant', text: 'A recipe for 4 people needs 300 g of flour. Jana cooks the same recipe for 6 people.', left: 'the amount of flour Jana needs', right: '480 g', answer: 1, explain: '300 / 4 · 6 = 450 g < 480 g.' },
    { block: 'A3', template: 'quant', text: 'The average of three numbers is 12. Two of the numbers are 10 and 11.', left: 'the third number', right: '15', answer: 2, explain: '3 · 12 = 36; 36 − 10 − 11 = 15.' },
    { block: 'A3', template: 'quant', text: 'a and b are positive numbers and a > b.', left: 'a / b', right: 'b / a', answer: 0, explain: 'a / b > 1 and b / a < 1 for all positive a > b.' },

    // ---- A4 data sufficiency (Q39–40) ----
    { block: 'A4', template: 'suff', q: 'Three friends paid a restaurant bill together. How much was the bill?', s1: 'Petr paid half of the bill.', s2: 'The other two friends paid equal amounts, and Petr paid 600 CZK more than each of them.', answer: 2, explain: '(1) gives no amount. (2): Petr = x + 600, bill = 3x + 600, x unknown. Together: each of the others paid a quarter, so 1/2 − 1/4 = 1/4 of the bill = 600 → 2,400 CZK.' },
    { block: 'A4', template: 'suff', q: 'n is a positive integer. Is n divisible by 6?', s1: 'n is divisible by 3.', s2: 'n is divisible by 12.', answer: 1, explain: '(1): 3 no, 6 yes — not sufficient. (2): 12 = 6 · 2, so n is always divisible by 6.' },

    // ---- A5 word problems (Q41–45) ----
    { block: 'A5', q: 'A concert hall has 600 seats. Three quarters of the seats were sold, and two fifths of the sold tickets were sold at a student discount. How many tickets were sold at full price?', options: ['240', '270', '300', '360'], answer: 1, explain: 'Sold: 450; discounted: 2/5 · 450 = 180; full price: 450 − 180 = 270.' },
    { block: 'A5', q: 'A farmer can harvest a field alone in 6 days; his son would need 12 days. How many days do they need if they work together?', options: ['3', '3.5', '4', '9'], answer: 2, explain: '1/6 + 1/12 = 3/12 = 1/4 of the field per day → 4 days.' },
    { block: 'A5', q: 'A satellite orbits the Earth once every 90 minutes. How many complete orbits does it make in 3 days?', options: ['36', '42', '45', '48'], answer: 3, explain: '3 · 24 · 60 = 4,320 minutes; 4,320 / 90 = 48.' },
    { block: 'A5', q: 'A parliament has 200 members. The governing coalition has 30 more seats than the opposition, and every member belongs to one of the two. How many seats does the opposition have?', options: ['85', '90', '115', '170'], answer: 0, explain: 'o + (o + 30) = 200 → o = 85.' },
    { block: 'A5', q: 'In a survey, 60 % of respondents read news online, 45 % read printed newspapers and 20 % do both. What percentage of respondents read neither?', options: ['5 %', '15 %', '20 %', '35 %'], answer: 1, explain: 'At least one: 60 + 45 − 20 = 85 %; neither: 15 %.' },

    // ---- A6 mathematisation (Q46–48) ----
    { block: 'A6', q: 'A museum charges 150 CZK per adult and 90 CZK per child. A group of n people, c of whom are children, paid 2,820 CZK in total. Which equation describes the situation?', options: ['150n + 90c = 2,820', '150c + 90(n − c) = 2,820', '150(n + c) + 90c = 2,820', '150(n − c) + 90c = 2,820'], answer: 3, explain: 'There are n − c adults paying 150 CZK and c children paying 90 CZK.' },
    { block: 'A6', q: 'Function f is defined by f(x) = x² − 4x. For which positive x does f(x) = 12 hold?', options: ['6', '4', '3', '2'], answer: 0, explain: 'x² − 4x − 12 = 0 → (x − 6)(x + 2) = 0 → x = 6 (x = −2 is not positive).' },
    { block: 'A6', q: 'Which expression should be put in place of the question mark to make the equality valid?\n(a + 2b)² − (a − 2b)² = ?', options: ['8ab', '4ab', '8b²', '0'], answer: 0, explain: '(a² + 4ab + 4b²) − (a² − 4ab + 4b²) = 8ab.' },

    // ---- A7 logic set 1 (Q49–51) — solutions (Mon→Fri): DEACB, EDACB, DECAB, EDCAB ----
    { block: 'A7', q: 'Which of the following could be the order of the bands from Monday to Friday?', options: ['Drift, Echo, Comet, Aurora, Blaze', 'Echo, Drift, Aurora, Blaze, Comet', 'Aurora, Drift, Echo, Comet, Blaze', 'Drift, Comet, Echo, Aurora, Blaze'], answer: 0, explain: 'B: Comet on Friday. C: Aurora on Monday. D: Drift and Echo not on consecutive days.' },
    { block: 'A7', q: 'Which of the following must be true?', options: ['Echo plays on Monday.', 'Comet plays on Wednesday.', 'Blaze plays on Friday.', 'Aurora plays on the day directly before Comet.'], answer: 2, explain: 'Monday cannot be Aurora (condition 4), Blaze (it plays after Aurora) or Comet (Wed/Thu), so Drift or Echo plays on Monday and the other on Tuesday. Aurora, Comet and Blaze take Wednesday–Friday; Comet is not on Friday and Blaze is after Aurora, so Blaze plays on Friday.' },
    { block: 'A7', q: 'If Comet plays on the day directly after Echo, on which day does Aurora play?', options: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], answer: 2, explain: 'Echo must be on Tuesday and Comet on Wednesday (order Drift, Echo, Comet, Aurora, Blaze), so Aurora plays on Thursday.' },

    // ---- A8 logic set 2 (Q52–54) — solutions: Hana Rome 4, Jana Madrid 5; Igor Berlin 3 & Karel Paris 2, or Igor Paris 2 & Karel Berlin 3 ----
    { block: 'A8', q: 'Which of the following could be true?', options: ['Karel wrote 5 articles.', 'Hana reports from Berlin.', 'Jana wrote 3 articles.', 'Igor reports from Paris.'], answer: 3, explain: 'Hana (4) must be in Rome, Jana (Madrid) wrote 5, and Igor and Karel share Berlin (3) and Paris (2) in either way.' },
    { block: 'A8', q: 'Who reports from Rome?', options: ['Hana', 'Igor', 'Jana', 'Karel'], answer: 0, explain: 'Hana is not in Paris and not in Madrid (Jana). If she were in Berlin (4), Paris would have 3; Igor cannot be in Rome (Rome > Igor), so Karel would be in Rome with more than Igor’s 3, i.e. 5 — but Karel must have fewer than Jana. So Hana reports from Rome.' },
    { block: 'A8', q: 'If Karel wrote more articles than Igor, from which city does Igor report?', options: ['Paris', 'Berlin', 'Madrid', 'Rome'], answer: 0, explain: 'Igor and Karel have 2 and 3 articles (Paris and Berlin). Karel > Igor means Karel 3 (Berlin), Igor 2 (Paris).' },
  ],
}
