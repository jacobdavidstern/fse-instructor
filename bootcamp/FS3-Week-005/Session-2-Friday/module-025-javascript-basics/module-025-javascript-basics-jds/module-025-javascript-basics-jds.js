// JavaScript Basics Practice - Starter Version
// Run this file in Quokka.js or JavaScript REPL for real-time feedback

console.log('=== JavaScript Basics Practice ===');

// Exercise 1: Variable Declarations vs Initializations
// Learn the difference between declaring and initializing variables

// TODO: Declare a variable without initializing it using let
let hello;

// TODO: Log the variable to see what undefined looks like
console.log(hello);

// TODO: Now initialize the variable with your name
hello = 'jacob';

// TODO: Log it again to see the difference
console.log(hello);

// TODO: Try declaring a const without initialization (this will cause an error)
// Uncomment the line below to see what happens:
// const PI; // 'const' declarations must be initialized. ts (1155) [Ln 23, Col 7]

// TODO: Declare and initialize a const properly with the value 3.14159
const pi = 3.14159;
console.log('Exercise 1 completed!');

// Exercise 2: Primitive Data Types
// Work with different data types and explore their typeof

// TODO: Create a number variable for age
let age = 0;

// TODO: Create a string variable for first name
let firstName = 'jacob';

// TODO: Create a boolean variable for isStudent
let isStudent = true;

// TODO: Create a variable but don't assign it a value (to see undefined)
let world;

// TODO: Create a variable and explicitly set it to null
let helloWorld = null;

// TODO: Use typeof to check the data type of each variable
// Example: console.log("age type:", typeof age);
console.log('age:', age, '- type:', typeof age);
console.log('firstName:', firstName, '- type:', typeof firstName);
console.log('isStudent:', isStudent, '- type:', typeof isStudent);
console.log('world:', world, '- type:', typeof world);
console.log('helloWorld:', helloWorld, '- type:', typeof helloWorld);

console.log('Exercise 2 completed!');

// Exercise 3: String Operations
// Practice string concatenation and template literals

// TODO: Create two string variables for first and last name
let first = 'John';
let last = 'Deere';

// TODO: Concatenate them using the + operator
let fullName = first + ' ' + last;

// TODO: Create a greeting message using template literals (backticks)
console.log(`Hello, ${first} ${last}!`);

// TODO: Get the length of your full name string
console.log('Length of full name:', fullName.length);

// TODO: Convert first name to uppercase
console.log('First name uppercase:', first.toUpperCase());

// TODO: Convert last name to lowercase
console.log('Last name lowercase:', last.toLowerCase());

console.log('Exercise 3 completed!');

// Exercise 4: Variable Assignment and Reassignment
// Practice changing variable values

// TODO: Create a let variable called score with initial value 0
let score = 0;

// TODO: Log the initial score
console.log(score);

// TODO: Reassign score to 100
score = 100;

// TODO: Log the updated score
console.log(score);

// TODO: Create a const variable called maxScore set to 100
const maxScore = 100;

// TODO: Try to reassign maxScore (this will cause an error)
// Uncomment the line below to see what happens:
// maxScore = 200;

console.log('Exercise 4 completed!');

// Exercise 5: Variable Assignment Creates New Containers
// Understand how variables are independent containers

// TODO: Create a variable originalScore with value 85
let originalScore = 85;

// TODO: Create a new variable copiedScore and assign originalScore's value to it
let copiedScore = originalScore;
// TODO: Log both variables to see they have the same value
console.log(copiedScore, originalScore);
console.log(
  'originalScore:',
  originalScore,
  'copiedScore:', // ✅ correct
  copiedScore
);

// TODO: Now change copiedScore to 95
copiedScore = 95;

// TODO: Log both variables again - notice originalScore stays the same!
// This shows each variable is its own independent "container"
console.log(
  'originalScore:',
  originalScore,
  'copiedScore:', // ✅ correct
  copiedScore
);

console.log('Exercise 5 completed!');
console.log(
  'All exercises completed! Run the complete version to see solutions.'
);
