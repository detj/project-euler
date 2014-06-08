// http://projecteuler.net/problem=22
var fs = require('fs');
var data = require('./names').sort();

// indexing starts from 1;
var alphabets = [''];

// indexing starts from 1;
data.unshift([]);

for (var i = 65; i <= 90; ++i) {
  alphabets.push(String.fromCharCode(i));
}

console.time('Time');
console.log('Total Score %d', totalscore(data));
console.timeEnd('Time');

function totalscore(data) {
  var score = 0;
  for (var i = 0, len = data.length; i < len; ++i) {
    score = score + (namescore(data[i]) * i);
  }

  return score;
}

function namescore(name) {
  var score = 0;
  for (var i = 0, len = name.length; i < len; ++i) {
    score = score + alphabets.indexOf(name[i]);
  }

  return score;
}