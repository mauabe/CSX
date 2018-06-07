console.log('Hello, world!');


// Challenge 1
function subtractTwo(num) {
  return num - 2;
}
//console.log(subtractTwo(9)) // it works!!!!

function map(array, callback) {
  const newArray = [];
  for(let i = 0; i<array.length; i++){
    newArray.push(callback(array[i]));
    }
  return newArray
}
console.log(map([3, 4, 5], subtractTwo));  //this works!!!

//Mejin Example: 
// const numArr = [10, 20, 30];
// console.log(map(numArr, function(num) { return num > 10; }));


// Challenge 2
function forEach(array, callback) {
  var result;
  for (let i = 0; i < array.length; i++) {
    result = callback(array[i]);
  }
} 

var alphabet = [];
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log('This is Challenge 2:'); 
console.log(alphabet); //prints 'abcd'
// var numbers = [];
// var moreNumbers = [5,6,7,8];
// forEach(moreNumbers, function(elem) {
//   numbers += elem;
// });
// console.log(numbers);

// Challenge 3
function mapWith(array, callback) {
  var newWithArray = [];
  forEach(array, function(elem) {
    newWithArray.push(callback(elem));
  });
  return newWithArray; 
}

console.log('This is challenge3:');
console.log(mapWith([3, 4, 5], subtractTwo));  
console.log(mapWith([8, 9, 10], subtractTwo));  
