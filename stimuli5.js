var headline_stimuli = [
  {
    text: "More frequent wildfires predicted globally due to climate change",
    topic: "Climate Change",
    info: true,
    length: 9,
    code: "AT1",
  },
  {
    text: "Glaciers are losing ice at an accelerating pace",
    topic: "Climate Change",
    info: true,
    length: 8,
    code: "AT2",
  },
  {
    text: "Rising temperatures threaten collapse of Atlantic Ocean current",
    topic: "Climate Change",
    info: true,
    length: 8,
    code: "AT4",
  },
  {
    text: "Average ocean temperatures have surged in past years",
    topic: "Climate Change",
    info: true,
    length: 8,
    code: "AT5",
  },
  {
    text: "Record-breaking high temperatures increase risk of droughts globally",
    topic: "Climate Change",
    info: true,
    length: 8,
    code: "AT6",
  },
  {
    text: "Increasing average temperatures set to amplify flood risks globally",
    topic: "Climate Change",
    info: true,
    length: 9,
    code: "AT7",
  },
  {
    text: "Global temperatures driven by natural weather cycles, not carbon emissions",
    topic: "Climate Change",
    info: false,
    length: 10,
    code: "AF1",
  },
  {
    text: "Glacier growth of up to 9 percent observed in Antarctica",
    topic: "Climate Change",
    info: false,
    length: 10,
    code: "AF2",
  },
  {
    text: "Climate trends caused by shifting ocean currents, unrelated to human activity",
    topic: "Climate Change",
    info: false,
    length: 11,
    code: "AF3",
  },
  {
    text: "Average number of global wildfires gradually decreasing in recent years",
    topic: "Climate Change",
    info: false,
    length: 10,
    code: "AF4",
  },
  {
    text: "Human activity not responsible for extreme weather events",
    topic: "Climate Change",
    info: false,
    length: 8,
    code: "AF5",
  },
  {
    text: "Carbon emissions proven to have little impact on climate overall",
    topic: "Climate Change",
    info: false,
    length: 11,
    code: "AF7",
  },
  {
    text: "COVID-19 vaccine boosters show stronger defense against Omicron variants",
    topic: "Vaccination",
    info: true,
    length: 9,
    code: "BT1",
  },
  {
    text: "Single dose of COVID-19 vaccine reduces risk of Long COVID",
    topic: "Vaccination",
    info: true,
    length: 10,
    code: "BT2",
  },
  {
    text: "COVID-19 vaccination prevents severe illness effectively",
    topic: "Vaccination",
    info: true,
    length: 6,
    code: "BT3",
  },
  {
    text: "COVID-19 vaccination during pregnancy: no negative effects on newborns",
    topic: "Vaccination",
    info: true,
    length: 9,
    code: "BT4",
  },
  {
    text: "Overwhelming majority of US doctors are fully vaccinated against COVID-19",
    topic: "Vaccination",
    info: true,
    length: 10,
    code: "BT5",
  },
  {
    text: "Hospitalization rates much lower among those vaccinated against COVID-19",
    topic: "Vaccination",
    info: true,
    length: 9,
    code: "BT7",
  },
  {
    text: "Lack of medical consensus: doctors divided on COVID-19 safety",
    topic: "Vaccination",
    info: false,
    length: 9,
    code: "BF1",
  },
  {
    text: "Increase in reported severe COVID-19 vaccine side-effects",
    topic: "Vaccination",
    info: false,
    length: 8,
    code: "BF2",
  },
  {
    text: "COVID-19 vaccination linked to higher rates of infertility",
    topic: "Vaccination",
    info: false,
    length: 8,
    code: "BF3",
  },
  {
    text: "Natural infection as effective against COVID-19 as vaccine",
    topic: "Vaccination",
    info: false,
    length: 8,
    code: "BF4",
  },
  {
    text: "COVID-19 vaccines may alter patients' DNA",
    topic: "Vaccination",
    info: false,
    length: 6,
    code: "BF5",
  },
  {
    text: "COVID-19 vaccination may lead to long-term health problems",
    topic: "Vaccination",
    info: false,
    length: 8,
    code: "BF6",
  },
  {
    text: "GMO crops generally safe for the environment",
    topic: "GMO",
    info: true,
    length: 7,
    code: "CT2",
  },
  {
    text: "No long-term negative health effects from GMO food consumption",
    topic: "GMO",
    info: true,
    length: 9,
    code: "CT3",
  },
  {
    text: "Animal studies support safety of GMO crops for consumption",
    topic: "GMO",
    info: true,
    length: 9,
    code: "CT4",
  },
  {
    text: "Scientific consensus indicates GMO foods are safe",
    topic: "GMO",
    info: true,
    length: 7,
    code: "CT5",
  },
  {
    text: "GMO foods shown to be safe for human consumption",
    topic: "GMO",
    info: true,
    length: 9,
    code: "CT6",
  },
  {
    text: "GMO foods pass rigorous regulatory review",
    topic: "GMO",
    info: true,
    length: 6,
    code: "CT7",
  },
  {
    text: "Doubts emerge over GMO foods' safety amid long-term health risks",
    topic: "GMO",
    info: false,
    length: 10,
    code: "CF1",
  },
  {
    text: "Allergic reactions reported following GMO food consumption",
    topic: "GMO",
    info: false,
    length: 8,
    code: "CF2",
  },
  {
    text: "Nutritional value of GMO foods lower compared to natural foods",
    topic: "GMO",
    info: false,
    length: 10,
    code: "CF3",
  },
  {
    text: "Consuming GMO foods shown to affect human DNA",
    topic: "GMO",
    info: false,
    length: 8,
    code: "CF5",
  },
  {
    text: "Regular GMO food consumption leads to hormonal disruptions",
    topic: "GMO",
    info: false,
    length: 8,
    code: "CF6",
  },
  {
    text: "Regular consumption of GMO foods weakens immune system",
    topic: "GMO",
    info: false,
    length: 8,
    code: "CF7",
  },
  {
    text: "5G's radio frequency fields do not cause health hazards",
    topic: "5G",
    info: true,
    length: 9,
    code: "DT1",
  },
  {
    text: "No scientific evidence of health risks from 5G radiation exposure",
    topic: "5G",
    info: true,
    length: 10,
    code: "DT2",
  },
  {
    text: "5G not causally linked to adverse health effects",
    topic: "5G",
    info: true,
    length: 8,
    code: "DT3",
  },
  {
    text: "Consensus: 5G radiation within guidelines poses no health threat",
    topic: "5G",
    info: true,
    length: 10,
    code: "DT4",
  },
  {
    text: "5G networks do not have 'enormous impact' on immune system",
    topic: "5G",
    info: true,
    length: 10,
    code: "DT6",
  },
  {
    text: "No harmful effects anticipated with rollout of 5G",
    topic: "5G",
    info: true,
    length: 8,
    code: "DT7",
  },
  {
    text: "5G technology linked with increased cancer risk",
    topic: "5G",
    info: false,
    length: 7,
    code: "DF1",
  },
  {
    text: "5G radiation approaching harmful levels globally",
    topic: "5G",
    info: false,
    length: 6,
    code: "DF2",
  },
  {
    text: "Surge in reports of headaches after 5G launch",
    topic: "5G",
    info: false,
    length: 8,
    code: "DF3",
  },
  {
    text: "5G increases COVID-19 spread by weakening immune system",
    topic: "5G",
    info: false,
    length: 8,
    code: "DF4",
  },
  {
    text: "Call for stricter 5G rules after discovery of new health risks",
    topic: "5G",
    info: false,
    length: 11,
    code: "DF5",
  },
  {
    text: "New link found between 5G radiation and mental health problems",
    topic: "5G",
    info: false,
    length: 10,
    code: "DF6",
  },
  {
    text: "Officials confirm 2020 voting systems were in no way compromised",
    topic: "Voter Fraud",
    info: true,
    length: 10,
    code: "ET2",
  },
  {
    text: "Minimal voter fraud cases in 2020, no impact on final results",
    topic: "Voter Fraud",
    info: true,
    length: 11,
    code: "ET3",
  },
  {
    text: "Investigation into voting machines shows no evidence of tampering",
    topic: "Voter Fraud",
    info: true,
    length: 9,
    code: "ET4",
  },
  {
    text: "Officials from both parties certify 2020 election results",
    topic: "Voter Fraud",
    info: true,
    length: 8,
    code: "ET5",
  },
  {
    text: "Security of 2020 election systems validated by independent observers",
    topic: "Voter Fraud",
    info: true,
    length: 9,
    code: "ET6",
  },
  {
    text: "Courts have dismissed multiple lawsuits of alleged electoral fraud in 2020",
    topic: "Voter Fraud",
    info: true,
    length: 11,
    code: "ET7",
  },
  {
    text: "Audit raises concerns over delayed mail-in ballots in 2020 election",
    topic: "Voter Fraud",
    info: false,
    length: 10,
    code: "EF1",
  },
  {
    text: "2020 ballots cast under dead people's names confirm election irregularities",
    topic: "Voter Fraud",
    info: false,
    length: 10,
    code: "EF2",
  },
  {
    text: "Millions of illegal votes found in 2020, pointing to widespread fraud",
    topic: "Voter Fraud",
    info: false,
    length: 11,
    code: "EF3",
  },
  {
    text: "Concerns about voting machine issues: votes flipped to different candidates",
    topic: "Voter Fraud",
    info: false,
    length: 10,
    code: "EF5",
  },
  {
    text: "Numerous unverified signatures detected on mail-in ballots in 2020",
    topic: "Voter Fraud",
    info: false,
    length: 9,
    code: "EF6",
  },
  {
    text: "Voter registration errors cast doubt on integrity of 2020 election",
    topic: "Voter Fraud",
    info: false,
    length: 10,
    code: "EF7",
  },
];

var headline_fillers = [
  {
    text: "Self-driving car technology advances with successful urban trials",
    topic: "Tech",
    info: "FILLER",
    length: 8,
    code: "F1",
  },
  {
    text: "New AI algorithm enhances smartphone battery life by 40 percent",
    topic: "Tech",
    info: "FILLER",
    length: 10,
    code: "F2",
  },
  {
    text: "New coding language simplifies artificial intelligence development",
    topic: "Tech",
    info: "FILLER",
    length: 7,
    code: "F3",
  },
  {
    text: "Augmented reality glasses enter mass production for consumer market",
    topic: "Tech",
    info: "FILLER",
    length: 9,
    code: "F4",
  },
  {
    text: "Biometric security features become standard in consumer electronics",
    topic: "Tech",
    info: "FILLER",
    length: 8,
    code: "F5",
  },
  {
    text: "Researchers develop contact lenses that can zoom in and out with a blink",
    topic: "Tech",
    info: "FILLER",
    length: 13,
    code: "F6",
  },
  {
    text: "Foldable devices gain market share as flexible display technology advances",
    topic: "Tech",
    info: "FILLER",
    length: 11,
    code: "F7",
  },
  {
    text: "Transparent solar cells advance power generation through windows",
    topic: "Tech",
    info: "FILLER",
    length: 8,
    code: "F8",
  },
  {
    text: "Smart fabric development allows for integration of electronics in clothing",
    topic: "Tech",
    info: "FILLER",
    length: 10,
    code: "F9",
  },
  {
    text: "AI-powered language translation reaches near-human accuracy",
    topic: "Tech",
    info: "FILLER",
    length: 6,
    code: "F10",
  },
  {
    text: "Scientists create self-healing concrete that could revolutionize construction",
    topic: "Science",
    info: "FILLER",
    length: 8,
    code: "G1",
  },
  {
    text: "Astronomers confirm Earth-sized planet in habitable zone of Alpha Centauri",
    topic: "Science",
    info: "FILLER",
    length: 10,
    code: "G2",
  },
  {
    text: "Scientists discover plant species that can absorb pollutants from air",
    topic: "Science",
    info: "FILLER",
    length: 10,
    code: "G3",
  },
  {
    text: "New AI system predicts earthquakes with 90% accuracy one week in advance",
    topic: "Science",
    info: "FILLER",
    length: 12,
    code: "G4",
  },
  {
    text: "New gene therapy successfully reverses aging in mice",
    topic: "Science",
    info: "FILLER",
    length: 8,
    code: "G5",
  },
  {
    text: "Analysis of Neanderthal teeth shows they were primarily vegetarians",
    topic: "Science",
    info: "FILLER",
    length: 9,
    code: "G6",
  },
  {
    text: "New imaging technique reveals hidden chamber in Great Pyramid of Giza",
    topic: "Science",
    info: "FILLER",
    length: 11,
    code: "G7",
  },
  {
    text: "Research finds plastic-eating bacteria can break down ocean waste in weeks",
    topic: "Science",
    info: "FILLER",
    length: 11,
    code: "G8",
  },
  {
    text: "Study of ancient asteroids confirms solar system is 4.6 billion years old",
    topic: "Science",
    info: "FILLER",
    length: 12,
    code: "G9",
  },
  {
    text: "Study finds regular meditation increases brain gray matter",
    topic: "Science",
    info: "FILLER",
    length: 8,
    code: "G10",
  },
  {
    text: "Nanorobots precisely deliver cancer medication to tumor sites",
    topic: "Medicine",
    info: "FILLER",
    length: 8,
    code: "H1",
  },
  {
    text: "Artificial pancreas device improves blood sugar control in diabetes",
    topic: "Medicine",
    info: "FILLER",
    length: 9,
    code: "H2",
  },
  {
    text: "Brain-computer implant helps paralyzed patients communicate",
    topic: "Medicine",
    info: "FILLER",
    length: 6,
    code: "H3",
  },
  {
    text: "Personalized medicine advances with DNA reading breakthroughs",
    topic: "Medicine",
    info: "FILLER",
    length: 7,
    code: "H4",
  },
  {
    text: "Stem cell therapy reverses heart damage for chronic heart disease patients",
    topic: "Medicine",
    info: "FILLER",
    length: 11,
    code: "H5",
  },
  {
    text: "New Alzheimer's vaccine slows cognitive decline by 40% in clinical trials",
    topic: "Medicine",
    info: "FILLER",
    length: 11,
    code: "H6",
  },
  {
    text: "First 3D-printed liver successfully transplanted in human patient",
    topic: "Medicine",
    info: "FILLER",
    length: 8,
    code: "H7",
  },
  {
    text: "AI-assisted tool detects skin cancer with 95% accuracy",
    topic: "Medicine",
    info: "FILLER",
    length: 8,
    code: "H8",
  },
  {
    text: "New gene therapy cures colorblindness in 80% of treated patients",
    topic: "Medicine",
    info: "FILLER",
    length: 10,
    code: "H9",
  },
  {
    text: "New antibiotic effectively treats 90% of drug-resistant bacterial infections",
    topic: "Medicine",
    info: "FILLER",
    length: 9,
    code: "H10",
  },
  {
    text: "Global investment in renewable energy surpasses fossil fuels for the first time",
    topic: "Economy",
    info: "FILLER",
    length: 12,
    code: "I1",
  },
  {
    text: "E-commerce sales account for 50% of all retail purchases in 2024",
    topic: "Economy",
    info: "FILLER",
    length: 11,
    code: "I2",
  },
  {
    text: "Gig economy workers gain improved benefits in new legislation",
    topic: "Economy",
    info: "FILLER",
    length: 9,
    code: "I3",
  },
  {
    text: "Remote work policies boost productivity in multiple industries",
    topic: "Economy",
    info: "FILLER",
    length: 8,
    code: "I4",
  },
  {
    text: "Circular economy initiatives reduce waste in manufacturing sector",
    topic: "Economy",
    info: "FILLER",
    length: 8,
    code: "I5",
  },
  {
    text: "Cryptocurrency adoption by major banks drives Bitcoin to new peak",
    topic: "Economy",
    info: "FILLER",
    length: 10,
    code: "I6",
  },
  {
    text: "Remote work policies boost productivity in multiple industries",
    topic: "Economy",
    info: "FILLER",
    length: 8,
    code: "I7",
  },
  {
    text: "Space tourism industry takes off with successful commercial flights",
    topic: "Economy",
    info: "FILLER",
    length: 9,
    code: "I8",
  },
  {
    text: "Asteroid mining startup secures first government contract for rare metals",
    topic: "Economy",
    info: "FILLER",
    length: 10,
    code: "I9",
  },
  {
    text: "Universal basic income experiment in California shows reduction in poverty",
    topic: "Economy",
    info: "FILLER",
    length: 10,
    code: "I10",
  },
];

for (let i = 0; i < headline_stimuli.length; i++) {
  if (
    headline_stimuli[i].topic == "GMO" ||
    headline_stimuli[i].topic == "5G" ||
    headline_stimuli[i].topic == "Voter Fraud"
  ) {
    headline_stimuli[i].flipped = true;
  } else {
    [];
    headline_stimuli[i].flipped = false;
  }
}

headline_stimuli.forEach(function (item) {
  item.characters = item.text.length;
});

// Calculate highest, lowest, and mean number of characters
var charactersArray = headline_stimuli.map(function (item) {
  return item.characters;
});

var highest = Math.max(...charactersArray);
var lowest = Math.min(...charactersArray);
var sum = charactersArray.reduce(function (total, num) {
  return total + num;
}, 0);
var mean = sum / charactersArray.length;
