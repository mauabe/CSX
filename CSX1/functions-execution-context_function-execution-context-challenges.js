// Challenge 1

function addTwo(num){
  return num +2;
}
// Uncomment these to check your work!
console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12

// Challenge 2
function addS (str) {
  return str + "s";
}
// Uncomment these to check your work!
console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'


// Challenge 3

const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(3);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true


// Challenge 4

let calls = "";

function jerry(str) {
  calls += 'Jerry';
  return kramer() + george() + elaine()
  // ADD CODE HERE? JerryKramerGeorgeElaine
}
function george(str) {
    calls += 'George';
//      return 'George';
}
function elaine(str) {
    calls += 'Elaine';
    // ADD CODE HERE?
  // return 'Elaine';
}
function kramer(str) {
    calls += 'Kramer';
    // ADD CODE HERE?
}

// Uncomment these to check your work!
jerry();
console.log(calls); // should log: 'JerryKramerGeorgeElaine'