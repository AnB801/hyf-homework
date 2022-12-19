console.log('When will we be there??')
const travelInformation = {
  speed: 100,
  destinationDistance: 432,
}

function counterTravelTime(object) {
  const reminder = object.destinationDistance % object.speed
  const minutes = Math.round((reminder * 60) / object.speed)
  const hours = (object.destinationDistance - reminder) / object.speed
  return `${hours} hours and ${minutes} minutes `
}

const travelTime = counterTravelTime(travelInformation)
console.log(travelTime) // 8 hours and 38 minutes

const travelInformation1 = {
  speed: 50,
  destinationDistance: 432,
}
function countTravelTime1(travelInformation1) {
  const kmMin = travelInformation1.speed / 60
  const travelTimeInMin1 = travelInformation1.destinationDistance / kmMin
  let minutes = travelTimeInMin1 % 60
  const hours = (travelTimeInMin1 - minutes) / 60
  minutes = Math.round(minutes)
  return `${hours} hours and ${minutes} minutes`
}
const travelTime1 = countTravelTime1(travelInformation1)
console.log(travelTime1)

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

// console.log(logOutSeriesText(seriesDurations))

const notes = []

function saveNote(content, id) {
  notes.push({ content: content, id: id })
}
saveNote('Pick up groceries', 1)
saveNote('Do laundry', 2)

console.log(notes) // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id == notes[i].id) {
      return notes[i]
    } else if (id === null || isNaN(id)) {
      return `Error line`
    }
  }
}

const firstNote = getNote(1)
console.log(firstNote) // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  notes.forEach((i) => {
    console.log(
      `The note with id: ${i.id}, has the following note text: ${i.content}`
    )
  })
}

logOutNotesFormatted() // should log out the text below

//   CactusIO-interactive (Smart phone usage app)

// addActivity("23/7-18", "Youtube", 30);

// function addActivity (date, activity, duration) {
//     // date = Date.parse()
//     date = date.toString()
//     activity = activity.toString()
//     duration = duration.Number()
// }

/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/
