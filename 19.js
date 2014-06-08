// http://projecteuler.net/problem=19
console.time('Time');
var day = 3600 * 24 * 1000;
var thirty = day * 30;
var thirtyOne = thirty + day;
var twentyEight = thirty - (day * 2);
var twentyNine = thirty - day;
var date;
var sundayCount = 0;
var thirtyOneMonths = [0, 2, 4, 6, 7, 9, 11];
var thirtyMonths = [3, 5, 8, 10];
var year;

var start = new Date(1901, 0, 1).getTime();
var end = new Date(2000, 11, 31).getTime();

var i = start;

while(i < end) {

  date = new Date(i);

  if (date.getDay() === 0) {
    ++sundayCount;
  }

  if (!!~thirtyOneMonths.indexOf(date.getMonth())) {
    i = i + thirtyOne;
  } else if (!!~thirtyMonths.indexOf(date.getMonth())) {
    i = i + thirty;
  } else {
    // feb
    year = date.getFullYear();

    if (year % 4 === 0 || year % 400 === 0) {
      // leap year
      i = i + twentyNine;
    } else {
      // non leap year
      i = i + twentyEight;
    }
  }

}

console.timeEnd('Time');
console.log('Total Sundays in 20th Century:', sundayCount);