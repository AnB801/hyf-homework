const inputNumbers = process.argv.slice(2).map(Number)
// slice(2), 2 because 0 and 1 index takes service information

//check that the entered number is a number
for (let i = 0; i < inputNumbers.length; i++) {
  if (isNaN(inputNumbers[i])) {
    console.log(`${process.argv[i + 2]} is not a number!`)
  }
}

const average = inputNumbers.reduce((a, b) => a + b) / inputNumbers.length
console.log(average)
