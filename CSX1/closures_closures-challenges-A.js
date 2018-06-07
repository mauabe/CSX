console.log('Hello, world!');

//Challenge 1
function createFunction() {
  return function sayHello() {
    console.log('hello');
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!


//Challenge 2
function createFunctionPrinter(input) {
  return function printInput(){
    console.log(input)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
printSample();
var printHello = createFunctionPrinter('hello');
printHello();


// Challenge 3
function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();
