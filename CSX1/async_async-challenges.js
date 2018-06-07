// Challenge 1
// console.log('I am at the beginning of the code');
// setTimeout(function() {
//   console.log('I am in the setTimeout callback function')}, 3000);

// console.log('I am at the end of the code');

// Challenge 2
function forEach(arr, cb){
  var result;
  for(var i = 0; i < arr.length; i++){
    result = cb(arr[i]);
  }
}
const delays = [2000, 5000, 0, 3500];
console.log(delays);

function delayLog(delayTime, i){ 
  console.log("printing element " + i)
}

setTimeout(forEach(delays, delayLog()), 3000)





// Challenge 3
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  // Add code here
}

// Also add code here


// Challenge 4
// Add code here

// /* Uncomment the following line and click 'run' to test your work */
// limitedInterval(() => console.log('repeating'), 1000, 5500); // should log 'repeating' once per second, five times.


// Challenge 5
// Add code here

// /* Uncomment the following lines and click 'run' to test your work */

// function sayHi() {
//   console.log('hi');
// }
// function sayBye() {
//   console.log('bye');
// }
// function sayHowdy() {
//   console.log('howdy');
// }

// runInOrder([sayHi, sayBye, sayHowdy], [2000, 5000, 3000]);

/*
should log:
'hi' (after 2 seconds)
'bye' (5 seconds after 'hi')
'howdy' (3 seconds after 'bye')
*/
