// Challenge 1
let num = 5;
if (num > 2) {num = num * 2}

// uncomment the below line to check your work
 console.log(num) // -> should print 10


// Challenge 2
let newNum = 1;
if (newNum < 2){newNum = newNum *2}

// uncomment the below line to check your work
console.log(newNum) // -> should print 2;


// Challenge 3
if(num % 2 === 0 ) 
console.log(true)
 else  console.log(false)


// Challenge 4
let checkMe = [1, 2, 3];
if (checkMe.length > 5) console.log(true)
else console.log(false)


// Challenge 5
let isDivisibleBy4 = 24;
if (isDivisibleBy4 % 4 === 0) console.log(true);
else console.log(false);


// Challenge 6
let count = -2;
let count2 = 3;
  var i = 0;
  while (i < 4){ (count = count + 3), (count2 = count2 +3), i++}

// uncomment the below line to check your work
console.log('count: ' + count + ', count2: ' + count2) // -> should print 10 and 15

// Challenge 7
var addThis = 0;
var sum = 0;
for (var i=0; i < 10; i++)(addThis+=i)
console.log(sum = addThis)


// Challenge 8
let countDown = 10;
for (var i=10; i>0; i--){countDown--}
// uncomment the below line to check your work
console.log(countDown) // -> should print 0;

// Challenge 9
let increaseByTwo = [1, 2, 3, 4, 5];
for (var i=0; i < increaseByTwo.length; i++) {increaseByTwo[i]+=2};

// uncomment the below line to check your work
console.log(increaseByTwo) // -> should print [3, 4, 5, 6, 7];

// Challenge 10
for (var i=0; i < increaseByTwo.length; i++){if (increaseByTwo[i] >=5) {increaseByTwo[i] *= 10}}// uncomment the below line to check your work
console.log(increaseByTwo) // -> should print [3, 4, 50, 60, 70];


// Challenge 11
let fillMe = [];
for (var i=0; i <= 10; i++){fillMe.push(i)}
// uncomment the below line to check your work
console.log(fillMe) // -> should print [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Challenge 12
let modifiedFillMe = [];
for (var i=11; i >= 0; i--) {if (fillMe[i] % 2 === 0) modifiedFillMe.push(fillMe[i])}
 
// uncomment the below line to check your work
console.log(modifiedFillMe) // -> should print [10, 8, 6, 4, 2, 0]

// Challenge 13
let checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};
for (const prop in checkObj){
  // if (typeof checkObj.foundNum !== undefined) {
  //   console.log('Found Type!')
  // };
  if (checkObj.hasOwnProperty('foundNum') ){ 
    console.log('Found!')
  };
  if (!checkObj.hasOwnProperty('foundNum')){ 
    console.log('Does not exist!')
  };
}
                           

// Challenge 14
let objToArray = [];
for(let y in checkObj) 
  if (checkObj[y] >= 2) objToArray.push( checkObj[y] );
console.log (objToArray);

// Challenge 15
for(var i= 0; i < objToArray.length; i++){
  if (i % 6 === 0) console.log('true')
}

// Challenge 16
let nestedArr = [];
for (let i=0; i < 4; i++){
  nestedArr.push (['loop' + [i], i ] );
}
console.log(nestedArr)

// Challenge 17
var loopNumbers = {};
for (i = 0; i < nestedArr.length; i++){
  loopNumbers [nestedArr[i][0]] = nestedArr[i][1];
}
console.log(loopNumbers)

// Challenge 18

var size = 0, prop;
for(prop in loopNumbers){
  if (loopNumbers.hasOwnProperty(prop)) size++;  
}
  console.log('This is the number of properties: ' + size);
 // console.log(loopNumbers.length)


// Challenge 19
let possibleIterable = [4, 3, 9, 6, 23];
  for(i=0; i < possibleIterable.length; i++){
    if(possibleIterable[i] > 3) console.log('Number is: ' + possibleIterable[i]);
  }

// Challenge 20
let total = 0;
let sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};

for(let x in sumMe){
    x = Object.values(sumMe);
    console.log (x);
  // var filtered = x.filter(function (item) {
  // return (parseInt(item) == item);
  // for(let i=0; i < x.length; i++){
  //   x = x.filter(x[i] !== isNaN)};
//console.log(filtered);
console.log(total = x.reduce(function(a,b) {return a+b}));

//console.log('this is ' + total);
}
  
//console.log(y)



// for(x in sumMe){
//   if (Object.values(sumMe) );      
//    total = newArray.reduce(a,b){a+b};    
//   console.log(total)
//       console.log(sumMe[key] + sumMe[key - 1]);
//  console.log (newSum.reduce(a, b){return a+b}, 0);
// }