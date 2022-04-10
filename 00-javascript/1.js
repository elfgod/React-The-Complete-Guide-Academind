console.log('##########')
console.log('Let VS Const')
let myName = 'Max'
console.log(myName)

myName = 'Goku'
console.log(myName)

const myName2 = 'Vegeta'
// This will throw an error cannot reassign a constant
// myName2 = 'Gohan'

console.log('##########')
console.log('Arrow Functions')

// No more issues with this keyword!
// function myFunc() {
//   ...
// }

// const myFunc2 = () => {
//   ...
// }

// With 1 argument
const printMyname = (name) => {
  console.log(name)
}
printMyname('Goku')

const printMyname2 = (name, age) => {
  console.log(name, age)
}
printMyname2('Goku', 35)

const multiply = (number) => {
  return number * 2
}
multiply(2)

// One line arrow function
const multiply2 = (number) => number * 2
multiply2(2)

console.log('##########')
console.log('Exports & Imports (Modules)')

// person.js
// const person = {
//   name: 'Goku',
// }

// export default person

// utility.js
// export const clean = () => { ... }
// export const baseData = 10

// app.js
// import person from './person.js'
// import prs from './person.js'

// import { baseData } from './utility.js'
// import { clean } from './utility.js'

// Imports default and ONLY export of the file
// Name in the receiving file is up to you

// default export
// import person from './person.js'
// import prs from './person.js'

// named export
// import { smth } from './utility.js'
// import { smth as Smth } from './utility.js'
// import * as bundled from './utility.js'

// You choose the name
// Name is defined by export

console.log('##########')
console.log('Classes')

class Person {
  name = 'Goku'
  call = () => {
    console.log('Calling')
  }
}

// Usage ( constructor functions anyone? ):
// const myPerson = newPerson()
// myPerson.call()

// Inheritance:
// class Person extends Master

class Human {
  constructor() {
    this.gender = 'male'
  }
  printGender() {
    console.log(this.gender)
  }
}

// Call the super constructor, to extend another class
// if you using a constructor
class Persona extends human {
  constructor() {
    super()
    this.name = 'Goku'
    this.gender = 'female'
  }
  printMyname() {
    console.log(this.name)
  }
}

const person = new Persona()
person.printMyname() // "Goku"
person.printGender() // "female"

console.log('##########')
console.log('Classes, Properties, & Methods')

// Properties are like "variables" attached to classes / objects
ES6:
// constructor() {
//   this.myProperty = 'value'
// }
ES7:
// myProperty = 'value'

// Methods are like "functions attached to classes / objects"
ES6:
// myMethod() {...}

ES7:
// myMethod = () => {...}

class Human {
  gender = 'male'

  printGender = () => {
    console.log(this.gender);
  }
}

class Persona extends Human {
  name = 'Max'
  gender = 'female'

  printMyName = () => {
    console.log(this.name);
  }
}

const person = newPersona()
person.printMyname() // "Goku"
person.printGender() // "female"

console.log('##########')
console.log('Spread & Rest Operators')

// Spread: Used to split up array elements OR object properties
const newArray = [ ...oldArray, 1, 2]
const newObject = { ...oldObject, newProp: 5 }

// Rest: Used to merge a list of function arguments into an array
function sortArfs(...args) {
  return args.sort()
}

// Spread
const numbers = [1, 2, 3]
const newNumbers = [ ...numbers, 4, 5 ]

console.log(numbers, 4, 5) // [[1, 2, 3], 4, 5]
console.log(newNumbers) // [1, 2, 3, 4, 5]

// Another example
const person = {
  name: 'Goku',
}

const newPerson = {
  ...person,
  age: 35,
}

console.log(newPerson);

// Rest
const filter = (...args) => {
  return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3, 4, 5)) // [1]

console.log('##########')
console.log('Destructuring')

// Easily extract array elements or object properties and
// store them in variables

// Array Destructuring
[a, b] = ['hello', 'world']
console.log(a) // hello
console.log(b) // world

// Object Destructuring
// {name} = {name: 'Goku', age: 35}
console.log(name) // Goku
console.log(age) // 35

const numbers = [1, 2, 3]
// [num1, num2] = numbers
// [num1, , num3] = numbers
console.log(num1, num3) // 1 3);

console.log('##########')
console.log('Reference and Primitive Types')

// Primitive types:
// This will copy the value
const number = 1
const number2 = number

console.log(number2)

// Reference types:
// This copys the memory address of person object to secondPerson
const person = {
  name: 'Goku',
}
const secondPerson = person
console.log(secondPerson) // 'Goku'
person.name = 'Vegeta'
console.log(secondPerson) // 'Vegeta'

// To fix this, use the spread operator
// Copying the object nos just the memory address pointer

const secondPerson = { ...person }

console.log('##########')
console.log('Refreshing Array Functions')

const numbers = [1, 2, 3]
const doubleNumArray = numbers.map(num => num {
  return num * 2
})

console.log(numbers) // [1, 2, 3]);
console.log(doubleNumArray) // [2, 4, 6]);
