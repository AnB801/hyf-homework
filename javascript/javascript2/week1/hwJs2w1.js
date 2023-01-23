// 1.1. Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium']
// notThisFunctionName(danishWords) // returns 'ø'

function getShortestWord(danishWords) {
  let shortestWorld = 0
  for (let i = 0; i < danishWords.length; i++) {
    if (danishWords[i].length > shortestWorld) {
      shortestWorld = danishWords[i]
    }
  }
  return shortestWorld
}
console.log(getShortestWord(danishWords))
// I think everything is correct here, but for some reason it returns bill ((

// 1.2. Find and count the Danish letters
const danishString = 'Jeg har en blå bil'
notThisFunctionName(danishString) // returns {total: 1, å: 1}

const danishString2 = 'Blå grød med røde bær'
notThisFunctionName(danishString2) // returns {total: 4, æ: 1, ø: 2, å: 1}

// 2. Spirit animal name generator
// 2.1. Markup time!
