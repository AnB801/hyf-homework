//2.1
const myFunction = [
  (String = function () {
    console.log('String')
  }),
  (bulean = function () {
    console.log(true)
  }),
  (number = function () {
    console.log(8)
  }),
]

myFunction.forEach((i) => i())
//2.2
const objFun = {
  String: function () {
    console.log('String')
  },
  bulean: function () {
    console.log(true)
  },
  number: () => {
    console.log(4)
  },
}
//2.3
const object = {
  key: function () {
    console.log('String1')
  },
}

object.key()
