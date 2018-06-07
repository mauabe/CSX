//Challenge 4
function addByX(x) {
  var result = function inner(num){num + x }
 inner()
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
var addByTwo(1)
// now call addByTwo with an input of 2


//Challenge 5
function once(func) {
  return func
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(5));  //should log 7
// console.log(onceFunc(10));  //should log 7
// console.log(onceFunc(9001));  //should log 7


//Challenge 6
function after(count, func) {

}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


//Challenge 7
function delay(func, wait) {

}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
// var count = 0;
// var delayedFunc = delay(() => count++, 1000);
// delayedFunc();
// console.log(count); 												 // should print '0'
// setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
