// Challenge 1
// ADD CODE HERE
for (let  i=1; i <=5; i++){
console.log(i)
}

// Challenge 2
let synonyms = ['fantastic', 'wonderful', 'great'];
for (let i = 0; i<synonyms.length; i++){
console.log("Have a " + synonyms[i] + " day!");
}
//Your loop should be logging:
// Have a fantastic day!
// Have a wonderful day!
// Have a great day!

// Challenge 3
let firstNames = ["Jon", "Arya", "Jamie"];
let lastNames = ["Snow", "Stark", "Lannister"];
let places = ["The Wall", "Winterfell", "Kings Landing"];

for (let i = 0; i < firstNames.length; i++)
for (let i = 0; i < lastNames.length; i++)
for (let i = 0; i< places.length; i++)
{
console.log("My name is " + firstNames[i] + " " + lastNames[i]+ " and I am from "+ places[i] )
};

// Loop through your arrays and log:
// My name is Jon Snow and I am from The Wall
// My name is Arya Stark and I am from Winterfell
// My name is Jamie Lannister and I am from Kings Landing 