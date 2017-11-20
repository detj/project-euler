/**
 * Non-abundant sums
 * 
 * https://projecteuler.net/problem=23
 */
const uniq = require('uniq')
const getDivisors = require('../node_modules/get-divisors/dist/getDivisors')
const LIMIT = 28123

/**
 * Sum an array of integers
 * 
 * @param {Array} arr Array of integers to sum
 */
const sum = arr => arr.reduce((a, b) => a + b, 0)

/**
 * Check if a number is abundant or not
 * 
 * @param {Number} n Number to check for abundancy
 * @return {Number}
 */
const isAbundant = n => {
  const divisors = getDivisors(n)
  divisors.pop()
  if (!divisors.length) return false

  return sum(divisors) > n
}

/**
 * Find all abundant numbers upto limit
 * 
 * @param {Number} limit Upper limit of search operation
 */
function findAbundants(limit) {
  let i = 1
  const abundants = []

  while(i <= limit) {
    if (isAbundant(i)) abundants.push(i)
    ++i
  }

  return abundants
}

function run() {
  const nums = []
  const final = []
  const abundants = findAbundants(LIMIT)

  for (let i = 0; i < abundants.length; ++i) {
    for (let j = 0; j < abundants.length; ++j) {
      const sum = abundants[i] + abundants[j]
      if (sum >= 0 && sum <= LIMIT) nums.push(sum)
    }
  }

  const numsAsSum = uniq(nums)

  for (let i = 0; i < LIMIT; ++i) {
    if (numsAsSum.indexOf(i) < 0) final.push(i)
  }

  return sum(final)

}

console.time('took')
console.log(run())
console.timeEnd('took')