// Flight booking fullname function

function getFullname(firstname, surname, userFormatName, sex) {
  if (userFormatName == true && sex == 'male') {
    console.log('Lord ' + firstname + ' ' + surname)
  } else if (userFormatName == true && sex == 'female') {
    console.log('Ledi ' + firstname + ' ' + surname)
  } else {
    console.log(firstname + ' ' + surname)
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

// Weather wear
// Пироверка на номер!! Когда будешь исправлять домашку обрати на єто внимание
// function temp(teMp) {
//   if (typeof(teMp) != Number)
// или так пока не ясно if (typeof(teMp) != "Number") {
//     return "Must be a number"
//   }
// }
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
    if (studentName != ' ') {
      return 'Student name can`t be empty'
    } else if (studentName === 'Quine' && class07Students.length == 6) {
      let removeStudent = class07Students.pop()
      class07Students.unshift()
      console.log('Dont forget add ' + `${removeStudent}` + ' to another group')
    } else if (studentName == class07Students[i]) {
      return 'Student alreadi exist'
    } else if (class07Students.length >= 6) {
      return 'A-a you can`t add  students ' + `${studentName}`
    }
    class07Students.push(studentName)
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
getNumberOfStudents()

// //Candy helper
// function addCandy(candyType, weight) {
//   candyType = 'sweet' || 'chocolate' || 'toffee' || 'chewing-gum'
//   weight = Number
// }

// let amountToSpend = Math.random() * 100

// function canBuyMoreCandy() {}
// boughtCandy
