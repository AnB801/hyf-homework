// 1.1

setTimeout(() => console.log('Log out'), 2500)

//1.2

function someFunc(delay, stringToLog) {
  setTimeout(() => console.log(stringToLog), delay * 1000)
}
someFunc(5, 'This string logged after 5 sec')
someFunc(10, 'This string logged after 10 sec')

//1.3
const button = document.querySelector('.button')

button.addEventListener('click', () => {
  setTimeout(() => console.log('Called after 5 seconds'), 5000)
})

//1.4
function earthLogger() {
  console.log('Earth')
}
function saturnLogger() {
  console.log('Saturn')
}
function planetLogFunction(callBackFunction) {
  callBackFunction()
}

planetLogFunction(earthLogger)
planetLogFunction(saturnLogger)

//1.5
function getMyLocation() {
  const buttonLocation = document.querySelector('.local')
  text = document.createElement('p')
  body = document.querySelector('body')
  buttonLocation.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((positions) => {
      const latitude = positions.coords.latitude
      const longitude = positions.coords.longitude
      body.appendChild(
        text
      ).innerHTML = `This is your latitude ${latitude}<br/> This is your longitude ${longitude}`
    })
  })
}
getMyLocation()

//1.7
function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000)
}
runAfterDelay(4, function () {
  console.log(`should be logged after 4 second`)
})

//1.8
window.ondblclick = () => {
  console.log('Double click!')
}

//1.9
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  logFunnyJoke = function () {
    console.log('Ha Ha')
  }

  logBadJoke = function () {
    console.log('this is bad')
  }

  if (shouldTellFunnyJoke) {
    logFunnyJoke()
  } else {
    logBadJoke()
  }
}
jokeCreator(true)
jokeCreator(false)
