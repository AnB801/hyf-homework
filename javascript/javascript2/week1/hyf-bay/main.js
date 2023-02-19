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

renderProducts(products)
