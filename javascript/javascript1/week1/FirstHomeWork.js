// Age-ify (A future age calculator)
console.log('---Age-ify---')
const yearOfBirth = 1985
const yearFuture = 2027

const age = yearFuture - yearOfBirth

console.log('How old will you be in ' + yearFuture + '?')
console.log('You will be ' + age + ' years old in ' + yearFuture)

// Goodboy-Oldboy (A dog age calculator)
console.log('---Goodboy-Oldboy---')

// I didn’t quite understand how dog years lead to human years. But according to the assignment, it is clear that 1 to 7 did so

const dogYearOfBirth = 2015
const dogYearFuture = 2027
const dogYear = dogYearFuture - dogYearOfBirth

const shouldShowResultInDogYears = false
if (shouldShowResultInDogYears) {
  console.log(
    'Your dog will be ' + dogYear * 7 + ' dog years old in ' + dogYearFuture
  )
} else {
  console.log(
    'Your dog will be ' + dogYear + 'human years old in ' + dogYearFuture
  )
}

// Housey pricey (A house price estimator)

console.log('---Housey pricey---')

const PetersHouse = {
  wide: 8,
  higt: 10,
  deep: 10,
  gardenSizeInM2: 100,
}
const housePetersCosts = 2500000
const volumeInMeters1 = PetersHouse.wide * PetersHouse.higt * PetersHouse.deep
const housePricePeters =
  volumeInMeters1 * 2.5 * 1000 + PetersHouse.gardenSizeInM2 * 300

// console.log(housePricePeters)
if (housePricePeters <= housePetersCosts) {
  console.log('Good news Peter, great deal')
} else {
  console.log('I have bad news Peter')
}

const JuliasHouse = {
  wide: 5,
  higt: 8,
  deep: 11,
  gardenSizeInM2: 70,
}
const volumeInMeters2 = JuliasHouse.wide * JuliasHouse.higt * JuliasHouse.deep
const houseJuliaCosts = 1000000
const housePriceJulia =
  volumeInMeters2 * 2.5 * 1000 + JuliasHouse.gardenSizeInM2 * 300

if (housePriceJulia <= houseJuliaCosts) {
  console.log('Lucky Julia, great deal')
} else {
  console.log('Poor, poor Julia you were deceived')
}

// Ez Namey (Startup name generator) Optional

console.log('---Ez Namey---')

const firstWords = [
  'Australia',
  'England',
  'Argentina',
  'Belgium',
  'Brazil',
  'Ghana',
  'Germany',
  'Denmark',
  'Iran',
  'Spain',
]
const randomNumber1 = Math.floor(Math.random() * firstWords.length)

const secondWords = [
  'Cameroon',
  'Canada',
  ' Qatar',
  'Costa Rica',
  'Poland',
  'Portugal',
  'USA',
  'Saudi Arabia',
  'Serbia',
  'France',
]

const randomNumber2 = Math.floor(Math.random() * secondWords.length)

const randomWorldLenght =
  firstWords[randomNumber1].length + secondWords[randomNumber2].length + 1

console.log(
  'The startup: ' +
    firstWords[randomNumber1] +
    ' ' +
    secondWords[randomNumber2] +
    ' contains ' +
    a +
    ' characters'
)
