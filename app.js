console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Adam";

let lastName = "Brannon";

var age = 46;

// Exercise 2
let fullName = firstName + ' ' + lastName;
let templateFullName = `${firstName} ${lastName}`;

console.log (fullName);
console.log (firstName + ' ' + lastName);
console.log (templateFullName);
//BONUS
console.log(`Hello, my name is ${firstName} ${lastName}, and I am ${age} years old.`);
console.log(`Hello, my name is ${fullName}, and I am ${age} years old. You killed my Father. Prepare to die.`)

//Exercise 3

let city = "Urbana, Ohio";
let pasTime = "bowling";
let myStory = "Hello, my name is "+fullName+", and I am "+age+" years old. I am from "+city+".\nIn my spare time, I enjoy a number of hobbies, I am particularly fond of "+pasTime+".";
let templateMyStory = `Hello, my name is ${fullName}, and I am ${age} years old.
I am from ${city}.
I have a number of hobbies, one of my favorites is ${pasTime}.`;
console.log(myStory);
console.log(templateMyStory);

