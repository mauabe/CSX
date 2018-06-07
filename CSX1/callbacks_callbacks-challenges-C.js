console.log('Hello, world!');


// Challenge 9
function majority(array, callback) {
  let numArr = [];
  let result = numArr.push(callback(array));
  //let num = numArr.filter( true)
  console.log(numArr);
  //reduce(acc, arr) function(){return acc + arr};
  if (num > array.length / 2){ return true;}
  else {return false;}
}

// To check if you've completed it, uncomment these lines!
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 10
function prioritize(array, callback) {

}

// To check if you've completed it, uncomment these lines!
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 11
function countBy(array, callback) {

}

// To check if you've completed it, uncomment these lines!
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
//   if (num % 2 === 0) return 'even';
//   else return 'odd';
// })); // should log: { odd: 3, even: 2 }


// Challenge 12
function groupBy(array, callback) {

}

// To check if you've completed it, uncomment these lines!
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 13
function goodKeys(obj, callback) {

}

// To check if you've completed it, uncomment these lines!
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']