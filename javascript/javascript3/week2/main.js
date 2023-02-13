const currencyFromSelect = document.getElementById('currency-from')
const currencyToSelect = document.getElementById('currency-to')
const currencyToGet = document.getElementById('currency-get')
const amountInput = document.getElementById('amount')
const resultDiv = document.getElementById('result')

let exchangeRates
let currencies

// Make a request to the API to get exchange rates
fetch('https://open.er-api.com/v6/latest/USD')
  .then((response) => response.json())
  .then((data) => {
    exchangeRates = data.rates
    currencies = Object.keys(exchangeRates)
    // Populate the options for currencyFromSelect and currencyToSelect
    currencies.forEach((currency) => {
      const fromOption = document.createElement('option')
      fromOption.value = currency
      fromOption.textContent = currency
      currencyFromSelect.appendChild(fromOption)

      const toOption = document.createElement('option')
      toOption.value = currency
      toOption.textContent = currency
      currencyToSelect.appendChild(toOption)
    })
  })

// Calculate the result whenever the amount, currency from or currency to changes
amountInput.addEventListener('input', calculateResult)
currencyFromSelect.addEventListener('change', calculateResult)
currencyToSelect.addEventListener('change', calculateResult)

function calculateResult() {
  const amount = amountInput.value
  const currencyFrom = currencyFromSelect.value
  const currencyTo = currencyToSelect.value

  // Check if all the required data is available
  if (
    !amount ||
    !exchangeRates ||
    !currencies.includes(currencyFrom) ||
    !currencies.includes(currencyTo)
  ) {
    return
  }

  // Calculate the result
  const exchangeRate = exchangeRates[currencyTo] / exchangeRates[currencyFrom]
  const result = amount * exchangeRate

  // Update the resultDiv with the result
  resultDiv.textContent = result.toFixed(2)
}
