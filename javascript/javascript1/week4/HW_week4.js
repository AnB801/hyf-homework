let voiceAss = {
  name: 0,
  toDo: [],
}

function getReply(comand) {
  if (comand === 'Hello my name is Benjamin') {
    voiceAss.name = 'Benjamin'
    return 'Nice to meet you Benjamin'
  } else if (comand === 'What is my name') {
    return `Your name is ${voiceAss.name}`
  } else if (comand === 'What is my name' && voiceAss.name == 0) {
    return `You haven't told me yet`
  } else if (comand === 'Add fishing to my todo') {
    toDo[0] = 'fishing'
  } else if (comand === 'Add singing in the shower to my todo') {
    toDo[1] = "singing in the shower"
  }
  else if (comand === 'Remove fishing from my todo') {
      dell [0].comand 
      
    toDo.push('singing in the shower')
}

getReply('Hello my name is Benjamin')

console.log(getReply('Hello my name is Benjamin'))
console.log(getReply('What is my name'))
// console.log(voiceAss.name)
