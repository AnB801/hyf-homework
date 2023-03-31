// 1 Programming Basics

let x
for (x = 10; x < 40; x++) {
  if (x % 5 == 0 && x % 3 == 0) {
    console.log(x + ' Jackpot!')
  } else if (x % 3 == 0) {
    console.log(x + ' This is divisible by 3')
  } else if (x % 5 == 0) {
    console.log(x + ' This is divisible by 5')
  } else {
    console.log(x)
  }
}

// 2 DOM manipulation
let body = document.querySelector('body')
let button = document.createElement('button')
button.appendChild(document.createTextNode('Button'))
button.onclick = function () {
  const h1 = createElement('h1')
  h1.innerHTML = 'This is an h1 tag'
  body.appendChild(h1)
}

// 3. Async API calls

async function test() {
  const api = `https://catfact.ninja/fact`
  const response = await fetch(api)
  const data = await response.json()
  for (let i = 0; i < 3; i++) {
    console.log(data.answer)
  }
}
test()

// 4.
class Product {
  constructor(price, name) {
    this.price = price
    this.name = name
    function logProduct() {
      console.log(name + ' is ' + price + ' kr')
    }
  }
}
new Product('Hello', 500)
