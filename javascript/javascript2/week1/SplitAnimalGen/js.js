const body = document.querySelector('body')

const dropdown = document.querySelector('select')

const inputField = document.querySelector('input')

const button = document.querySelector('button')

const outputPar = document.createElement('p')

body.appendChild(outputPar)

function getAnimal() {
  const anim = [
    'dog',
    'cat',
    'mouse',
    'bull',
    'Hemichordate',
    'Chimpanzee',
    'banan',
    'crow',
    'tiger',
    'bear',
  ]
  const spirit = ['fast', 'slow', 'tal', 'little', 'nuts', ' funny', 'bunny']
  let spiritAnimal = `The ${
    spirit[Math.floor(Math.random() * spirit.length)]
  } ${anim[Math.floor(Math.random() * anim.length)]}`
  return spiritAnimal
}

function inputListener(event) {
  const name = inputField.value
  if (name === '') {
    outputPar.innerHTML = 'Enter your name'
    button.innerHTML = 'Click me'
  } else {
    let spiritAnimal = getAnimal()
    outputPar.innerHTML = `${name} - ${spiritAnimal}`
    button.innerHTML = 'Get a new name'
  }
}
// Clear func
function clearEventListeners() {
  document.getElementsByTagName('button')[0].onclick = null
  document.getElementsByTagName('input')[0].oninput = null
  document.getElementsByTagName('input')[0].onmouseover = null
}

dropdown.onchange = function (event) {
  const chosenValue = dropdown.value
  switch (chosenValue) {
    case 'click':
      clearEventListeners()
      button.onclick = inputListener
      break

    case 'hover':
      clearEventListeners()
      inputField.onmouseover = inputListener
      break
    case 'typing':
      clearEventListeners()
      inputField.oninput = inputListener
  }
}
