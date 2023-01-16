// Flight booking fullname function

function getFullname(firstname, surname, userFormatName, sex) {
  if (userFormatName == true && sex == 'male') {
    return 'Lord ' + firstname + ' ' + surname
  } else if (userFormatName == true && sex == 'female') {
    return 'Ledi ' + firstname + ' ' + surname
  } else {
    return firstname + ' ' + surname
  }
}

const fullname1 = getFullname('Benjamin', 'Hughes', false, '')
const fullname2 = getFullname('Mac', 'Donalds', true, 'male')
const fullname3 = getFullname('Barbara', 'Streisand', true, 'female')

// Event application

const Date = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]
let today = 1
function getNewDate(dayAfter) {
  let i = (today + dayAfter) % Date.length
  return Date[i]
}
console.log(getNewDate(150))

function youClothesToWear(tempr) {
  if (tempr >= 30 && tempr <= -10) {
    console.log('Don`t go there')
  } else if (tempr < 30 && tempr >= 10) {
    console.log('shorts and a t-shirt')
  } else if (tempr < 10 && tempr >= 0) {
    console.log("Don't forget your hat")
  } else if (tempr < 0 && tempr > -10) {
    console.log('Are you sure you need to go there?')
  }
}
youClothesToWear(-12)

// Student manager
const class07Students = []

function addStudentToClass(studentName) {
  addStudentToClass.length = 6
  for (
    i = 0;
    i < addStudentToClass.length && addStudentToClass.length < 6;
    i++
  ) {
    if (studentName === ' ') {
      return 'Student name can`t be empty'
    } else if (studentName === 'Quine' && class07Students.length >= 6) {
      class07Students.push(studentName)
    } else if (class07Students.includes(studentName) !== true) {
      if (class07Students.length < 6) {
        class07Students.push(studentName)
      }
    } else if (class07Students.length >= 6) {
      return 'A-a you can`t add  students ' + `${studentName}`
    }
  }
}
addStudentToClass('Anton')
addStudentToClass('Anton B')
addStudentToClass('Anton C')
addStudentToClass('Anton D')
addStudentToClass('Anton E')
addStudentToClass('Anton F')
addStudentToClass('Anton G')
addStudentToClass('Anton H')
addStudentToClass('Quine')

console.log(class07Students)

function getNumberOfStudents() {
  console.log('There are ' + class07Students.length + ' studets in class 07')
}
console.log(getNumberOfStudents())

//Candy helper

const boughtCandyPrices = []
//   candyType = 'sweet' 0.5 || 'chocolate' 0.7 || 'toffee' 1.1  || 'chewing-gum' 0.03
function addCandy(candyType, weight) {
  let cost = 0
  if (candyType === 'sweet') {
    cost = weight * 0.5
    boughtCandyPrices.push(cost)
  } else if (candyType === 'chocolate') {
    cost = weight * 0.7
    boughtCandyPrices.push(cost)
  } else if (candyType === 'toffee') {
    cost = weight * 1.1
    boughtCandyPrices.push(cost)
  } else if (candyType === 'chewing-gum') {
    cost = weight * 0.03
    boughtCandyPrices.push(cost)
  }
}
addCandy('sweet', 10)
addCandy('chocolate', 10)
addCandy('toffee', 10)
addCandy('chewing-gum', 10)
const totalPrice = boughtCandyPrices.map((i) => (x += i), (x = 0)).reverse()[0]
console.log(totalPrice)

let amountToSpend = Math.random() * 100
//  function canBuyMoreCandy() {}
function canBuyMoreCandy(candiesBought, amountToSpend) {
  let sum = 0
  for (i = 0; i < candiesBought.length; i++) {
    sum += candiesBought[i]
  }
  if (sum < amountToSpend) {
    console.log('You can buy more, so please do!')
  } else {
    console.log('Enough candy for you!')
  }
}

canBuyMoreCandy(boughtCandyPrices, amountToSpend)
