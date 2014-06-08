// http://projecteuler.net/problem=21
console.time('Time');
var limit = 10000;
var result = [];
var pair;

for (var i = limit; i > 0; --i) {
  pair = amicable(i);
  if (pair.length) {
    if (!!!~result.indexOf(pair[0])) {
      result.push(pair[0]);
    } else if(!!!~result.indexOf(pair[1])) {
      result.push(pair[1]);
    }
  }
}

console.log('Sum of all amicable numbers under %d is %d', limit, sum(result));
console.timeEnd('Time');

function amicable(a) {
  var b = sum(divisors(a));
  var result = [];
  if (sum(divisors(b)) === a && a !== b) {
    result.push(a);
    result.push(b);
  }

  return result;
}

function divisors(n) {
  var result = [];
  for(var i = 1; i < n; ++i) {
    if (n % i === 0) result.push(i);
  }

  return result;
}

function sum(items) {
  var result = 0;
  for (var i = 0, len = items.length; i < len; ++i) {
    result = result + items[i];
  }

  return result;
}