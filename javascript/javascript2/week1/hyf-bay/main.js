console.log('Script loaded')
const products = getAvailableProducts()
console.log(productsUl)

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i]
    const listItem = document.createElement('li')
    //titel
    const titel = document.createElement('h1')
    titel.innerHTML = product.name
    listItem.appendChild(titel)
    //price
    const price = document.createElement('p')
    price.innerHTML = `Price: ${product.price}`
    listItem.appendChild(price)
    // rating
    const rating = document.createElement('p')
    rating.innerHTML = `Rating: ${product.rating}`
    listItem.appendChild(rating)

    productsList.appendChild(listItem)
  }
}

//anoder
// function renderProducts(products) {
//   products.forEach((product) => {
//     const li = document.createElement('li')

//     let shipsToHTML = ''
//     product.shipsTo.forEach((country) => (shipsToHTML += `<li>${country}</li>`))

//     li.innerHTML = `
//             <ul>
//                 <li>${product.name}</li>
//                 <li>${product.price}</li>
//                 <li>${product.rating}</li>
//                 <ul class="ships-to">${shipsToHTML}</ul>
//             </ul>
//         `
//     productsUl.appendChild(li)
//   })
// }
// // 2.2 Searching for products
// window.onload = function (input) {
//   products.sort((a, b) => b.rating - a.rating)
//   renderProducts(products)
// }

renderProducts(products)
