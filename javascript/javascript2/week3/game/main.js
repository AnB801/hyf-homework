//html
const buttonStart = document.querySelector('start-button')
const leftFild = document.getElementById('left-fild')
const rightFild = document.getElementById('right-fild')

const inputField = document.getElementById('timeOfGame')
const infoField = document.querySelector('#info')

const startButton = document.querySelector('#start-button')
const pressL = document.querySelector('#l')
const pressS = document.querySelector('#s')

//count
let countL = 0
let countS = 0

const keyUpListener = function (event) {
  if (event.key.toLowerCase() === 's') {
    countS++
    pressS.innerHTML = countS
    infoField.innerHTML = ''
  } else if (event.key.toLowerCase() === 'l') {
    countL++
    pressL.innerHTML = countL
    infoField.innerHTML = ''
  } else {
    infoField.innerHTML = 'Press either S or L'
  }
}

startButton.onclick = function (event) {
  pressL.innerHTML = ''
  pressS.innerHTML = ''
  infoField.innerHTML = ''
  const inputFieldValue = inputField.value
  if (inputFieldValue != 0) {
    startButton.innerHTML = 'Play'
    setTimeout(() => {
      document.removeEventListener('keyup', keyUpListener)
      if (countL > countS) {
        console.log('Left win')
        infoField.innerHTML = 'Left win'
      } else if (countL < countS) {
        console.log('Right win')
        infoField.innerHTML = 'Right win'
      } else if ((countL > 0 || countS > 0) && countL === countS) {
        console.log('Draw')
        infoField.innerHTML = `Draw`
      } else if (countL === 0 && countS === 0) {
        infoField.innerHTML = `Start pressing`
      }
      inputField.value = ''
      countL = 0
      countS = 0
    }, inputFieldValue * 1000)
    document.addEventListener('keyup', keyUpListener)
  } else {
    infoField.innerHTML = 'Please enter duration of the game'
  }
}
