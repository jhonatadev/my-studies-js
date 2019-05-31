// let e const 
{
  var a = 2
  let b = 3
  console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring
const [l, e, ...tras] = 'Jhon'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { nome: n, idade: i } = { nome: 'Ana', idade: 9 }
console.log(n, i)