console.log('Hello, world!');

// Challenge: Repeater 
var str = "";
function repeater(char, counter) {
  //var counter = 0;
  if (str.length === 5) {return str}
  str += char;
//return str;
  return repeater(char);
}

// To check if you've completed the challenge, uncomment these console.logs!
//console.log(repeater('g'));
console.log(repeater('j' ));
