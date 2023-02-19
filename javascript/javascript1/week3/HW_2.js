// 1. Item array removal
const names = [
  'Peter',
  'Ahmad',
  'Yana',
  'kristina',
  'Rasmus',
  'Samuel',
  'katrine',
  'Tala',
]
const nameToRemove = 'Ahmad'
let name1 = names
name1 = name1.filter((i) => i != nameToRemove)
console.log(name1) // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// 2.When will we be there??

console.log('When will we be there??')
const travelInformation = {
  speed: 100,
  destinationDistance: 432,
}

function counterTravelTime(object) {
  const reminder = object.destinationDistance % object.speed
  const minutes = Math.floor((reminder * 60) / object.speed)
  const hours = (object.destinationDistance - reminder) / object.speed
  return `${hours} hours and ${minutes} minutes `
}

const travelTime = counterTravelTime(travelInformation)
console.log(travelTime) // 8 hours and 38 minutes

// 2.1.Series duration of my life

console.log('Series duration of my life')
const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: 'Sons of Anarchy',
    days: 2,
    hours: 21,
    minutes: 0,
  },
  {
    title: 'Vikings',
    days: 2,
    hours: 17,
    minutes: 16,
  },
]

let arr = []
function logOutSeriesText() {
  const age = 80
  ageInHours = age * 365 * 24
  seriesDurations.forEach((i) => {
    let timeInHours = i.days * 24 + i.hours + (i.minutes % 60)
    let timeOfLife = (timeInHours * 100) / ageInHours
    console.log(`${i.title} took ${timeOfLife.toFixed(4)}% of my life.`)
    arr.push(timeOfLife)
  })
}
logOutSeriesText()
function sumTotal(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}
console.log(`In total that is ${sumTotal(arr).toFixed(4)} %  of my life`)

// 3.Smart-ease - Back to the basics!

console.log('Step 3: Smart-ease - Back to the basics!')
const notes = []

function saveNote(content, id) {
  notes.push({ content: content, id: id })
}
saveNote('Pick up groceries', 1)
saveNote('Do laundry', 2)

console.log(notes)

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i]
    } else if (id === null || isNaN(id)) {
      return `Error line`
    }
  }
}

const firstNote = getNote(1)
console.log(firstNote)

// 3.1 Log out notes

function logOutNotesFormatted() {
  notes.forEach((i) => {
    console.log(
      `The note with id: ${i.id}, has the following note text: ${i.content}`
    )
  })
}

logOutNotesFormatted()

// 4.CactusIO-interactive (Smart phone usage app) optional
// 4.1 Adding an activity
const activities = []
function addActivity(date, activity, durations) {
  activ = {
    date: date,
    activity: activity,
    durations: durations,
  }
  activities.push(activ)
}

addActivity('23/7-18', 'Youtube', 30)
addActivity('23/7-18', 'Youtube', 30)
addActivity('23/7-18', 'Youtube', 30)
console.log(activities)

// 4.2 Show my status
let limitToTelefon = 100
function showStatus(arr, lim) {
  let totalDur = 0
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      totalDur += arr[i].durations
    }
    console.log(
      `You have added ${arr.length} activities. They amount to ${totalDur} min. of usage`
    )
  } else if (lim < limitToTelefon) console.log(`No more telefons!`)
}

showStatus(activities)
