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
    const activ = 'fishing'
    voiceAss.toDo.push(activ)
  } else if (comand === 'Add singing in the shower to my todo') {
    const activ = 'singing in the shower'
    voiceAss.toDo.push(activ)
  } else if (comand === 'Remove fishing from my todo') {
    voiceAss.toDo.shift()
  } else if (comand === 'What is on my todo?') {
    return voiceAss.toDo
  } else if (comand === 'What day is it today?') {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const toDay = new Date()
    const day = toDay.getDate()
    const month = months[toDay.getMonth()]
    const year = toDay.getFullYear()
    return `Today is the ${day}. of ${month} ${year}`
    //   } else if (
    //     comand.includes('+') ||
    //     comand.includes('-') ||
    //     comand.includes('*') ||
    //     comand.includes('/')
    //   ) {
    //   }
  }
}
getReply('Hello my name is Benjamin')

console.log(getReply('Hello my name is Benjamin'))
console.log(getReply('What is my name'))
console.log(getReply('Add fishing to my todo'))
console.log(getReply('Add singing in the shower to my todo'))
console.log(getReply('Remove fishing from my todo'))
console.log(getReply('What is on my todo?'))
console.log(getReply('What day is it today?'))
// console.log(getReply('4+5'))
// console.log(getReply('4*5'))
// console.log(getReply('6-2'))
// console.log(getReply('10/2'))
