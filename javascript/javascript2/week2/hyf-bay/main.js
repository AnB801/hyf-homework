console.log('Script loaded')

const products = getAvailableProducts()
const productsUl = document.querySelector('section.products ul')
console.log(productsUl)

function renderProducts(products) {
  products.forEach((product) => {
    const li = document.createElement('li')

    let shipsToHTML = ''
    product.shipsTo.forEach((country) => (shipsToHTML += `<li>${country}</li>`))

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `
    productsUl.appendChild(li)
  })
}

window.onload = function (event) {
  products.sort((a, b) => b.rating - a.rating)
  renderProducts(products)
}
const productSearch = document.querySelector('#productSearch')
const priceSearch = document.querySelector('#priceSearch')
const dropdown = document.querySelector('select')

renderProducts(products)

function renderFilterProducts() {
  const productSearchValue = productSearch.value.trim()
  const priceSearchValue = priceSearch.value.trim()
  const dropdownValue = dropdown.value
  const sortingExpensive = (a, b) => b.rating - a.rating
  const sortingCheapest = (a, b) => a.price - b.price

  const foundProducts = products
    .filter(
      (product) =>
        productSearchValue === '' || product.name.includes(productSearchValue)
    )
    .filter(
      (product) => priceSearchValue === '' || product.price <= +priceSearchValue
    )
    .sort(dropdownValue === 'EXPENSIVE' ? sortingExpensive : sortingCheapest)
  renderProducts(foundProducts)
}

productSearch.oninput = renderFilterProducts
priceSearch.oninput = renderFilterProducts
dropdown.onchange = renderFilterProducts

const clearButton = document.querySelector('#clear')

clearButton.onclick = function (event) {
  priceSearch.value = ''
  productSearch.value = ''
  dropdown.selectedIndex = 0
  renderProducts(products)
}
