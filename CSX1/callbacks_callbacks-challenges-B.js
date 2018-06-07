//Challenge 4
function reduce(array, callback, initialValue) {
  var result = 0;
  for (let i=0; i<array.length; i++){
     result = callback(result, array[i]); 
  }
  return result;
}
var nums = [4, 1, 3, 0];
var addAll = function(a, b) { return a + b; }
console.log(reduce(nums, addAll, 0));    //-> 8

//Challenge 5

/// With Reduce
function intersection(arrayOfArrays) {
  let arrayNum = 0;
  arrayOfArrays.forEach(function(element){arrayNum++});
  let results = arrayOfArrays.reduce(function(arrays,nums) {
    for (let i=0;i<nums.length;i++) {
    if (nums[i] in arrays){
      arrays[nums[i]]++
    }
    else {arrays[nums[i]] = 1;
    }}
    return arrays;
  },{})
  
  var keysNums = Object.keys(results).map(Number)
  var valsNums = Object.values(results).map(Number);
 
  let newPushedArray = [];
  for (let i=0;i<valsNums.length;i++){
    if (valsNums[i] === arrayNum){
      newPushedArray.push(keysNums[i])
    }
  }
  return newPushedArray
}

/// With Filter ///
// let myArray = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]];
// let intersect = (array, [f, ...r] = array) => f.filter(num => r.every(_a => _a.includes(num)));
// console.log(intersect(myArray));

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));  // should log: [5, 15]


//Challenge 6
function union(arrOfArrays) {
  let flatArray = arrOfArrays.reduce((acc,val) => Array.isArray(val) ? acc.concat(union(val)) : acc.concat(val), []);
  return flatArray.filter(function(elem,pos,arr) {
    return arr.indexOf(elem) == pos;
  });
}0;

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Challenge 7
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'later', 'HELLO'], function(str) { return str.toUpperCase(); }));

// should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

//Challenge 8
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));

// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

