// const OrderName = 'First order'
// console.log(OrderName)

// let JasonStr = JSON.stringify(OrderName)
// console.log(JasonStr)

// let v = JSON.parse(JasonStr)
// console.log(v)

// let OrderId = 1
// let Price = 100
// let ListOfDrinks = {
//   cola: 1,
//   viski: 0.5,
// }

// console.log(JSON.stringify(ListOfDrinks))

// let OrderExtras = {
//   ice: 2,
// }

// const jasonSTR = `{"OrderName":
// {"Order name" :"First order"},
//   "OrderId" : 1,
// "Order list" :
// [
//     {"cola":1,
//     "viski":0.5},
//     {"Extras": {"ice": 2,
//   "lemon": 0}}
// ]
// }`

// // const austr = fetch('http://api.open-notify.org/astros.json')
//   .then((response) => response.json())
//   .then((names) => console.log(austr.name))

fetch('http://api.open-notify.org/astros.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data.people)
    // console.log(data.people.forEach(element => {
    //     console.log(element.name)
    console.log(people.forEach((element) => {
        console.log(element.name)
    })}