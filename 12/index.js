/**
 * Highly divisible triangular number
 * 
 * https://projecteuler.net/problem=12
 */

const getDivisors = require('../node_modules/get-divisors/dist/getDivisors')

function getLength(val) {
  return getDivisors(val).length
}

function triangle(index, value) {
  return value + index
}

function run() {
  let index = 7
  let val = 28

  while(getLength(val) < 500) {
    ++index
    val = triangle(index, val)
  }

  console.log(val)
}

console.time('took')
run()
console.timeEnd('took')