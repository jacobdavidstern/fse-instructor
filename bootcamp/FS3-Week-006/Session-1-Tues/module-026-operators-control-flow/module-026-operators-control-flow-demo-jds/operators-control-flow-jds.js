// Operators and Control Flow Practice - Starter Version
// Run this file in Quokka.js or JavaScript REPL for real-time feedback

console.log('=== Operators and Control Flow Practice ===');

// Exercise 1: Arithmetic Operators
// Practice basic math operations and operator precedence

// TODO: Create two variables for numbers
let n1 = 1;
let n2 = 2;

// TODO: Perform basic math operations (+, -, *, /, %)
console.log(`basic math ops`);
console.log(`addition: ${n1 + n2}`);
// TODO: Try subtraction
console.log(`subtraction: ${n2 - n1}`);
// TODO: Try multiplication
console.log(`multiply: ${n2 * n1}`);
// TODO: Try division
console.log(`division: ${n2 / n1}`);
// TODO: Try modulus (remainder)
console.log(`remainder: ${n2 % n1}`);

// TODO: Use increment and decrement operators
let counter = 4;
console.log(`increment and decrement ops, postfix`);
// TODO: Increment counter by 1 using ++
counter++;
console.log(`counter after increment: ${counter}`);
// TODO: Decrement counter by 1 using --
counter--;
console.log(`counter after decrement: ${counter}`);

// TODO: Use compound assignment operators
let score = 100;
console.log(`compound assignment ops`);
console.log(`Initial score: ${score}`);
// TODO: Add 50 to score using +=
console.log(`after adding 50: ${(score += 50)}`);
// TODO: Multiply score by 2 using *=
console.log(`after multiplying by 2: ${(score *= 2)}`);
// TODO: Divide score by 3 using /=
console.log(`after dividing by 3: ${(score /= 3)}`);

console.log('Exercise 1 completed!');

// Exercise 2: Comparison Operators
// Practice equality and relational comparisons
let a = 5;
let b = '5';
let c = 10;
console.log(`comparison ops`);
// TODO: Compare using equality (==) - checks value only
console.log(`5 == '5': ${a == b}`);
// TODO: Compare using strict equality (===) - checks value and type
console.log(`5 === '5': ${a === b}`);
// TODO: Try inequality (!=) and strict inequality (!==)
console.log(`5 != '5': ${a != b}`);
console.log(`5 !== '5': ${a !== b}`);
// TODO: Use relational operators (<, >, <=, >=)
console.log(`relational ops`);
console.log(`5 < 10: ${a < c}`);
console.log(`5 > 10: ${a > c}`);
console.log(`5 <= '5': ${a <= a}`);
console.log(`10 >= 5: ${c >= a}`);

console.log('Exercise 2 completed!');

// Exercise 3: Logical Operators
// Practice combining conditions

// TODO: Create variables for logical operator examples
let age = 25;
let hasLicense = true;
let hasInsurance = false;

// TODO: Use AND (&&) operator - both conditions must be true
let canDrive = age >= 18 && hasLicense;
console.log(`Can drive (age >= 18 AND has license): ${canDrive}`);
// TODO: Use OR (||) operator - at least one condition must be true
// let canGetInsurance = age >= 16 || hasInsurance;
console.log(
  `Can get insurance (age >= 16 OR has insurance): ${age >= 16 || hasInsurance}`
);

// TODO: Use NOT (!) operator to negate a boolean
let needsLicense = !hasLicense;
console.log(`Needs license (NOT has license): ${needsLicense}`);

// TODO: Combine multiple logical operators
let canDriveCommercial = age >= 21 && hasLicense && hasInsurance;
console.log(`Can drive commercial vehicle: ${canDriveCommercial}`);
console.log('Exercise 3 completed!');

// Exercise 4: Conditional Statements
// Practice if/else statements, switch statements, and ternary operator

// TODO: Create a temperature variable
let temperature = 75;
console.log(`Temperature is: ${temperature}`);

// TODO: Write an if statement
// TODO: Add an else statement
// TODO: Add else if for multiple conditions

if (temperature > 100) {
  console.log("it's hot outside!");
} else if (temperature < 80) {
  console.log("it's pleasant outside!");
} else if (temperature < 60) {
  console.log("it's cool outside!");
} else {
  console.log("it's cold outside!");
}

// TODO: Use ternary operator for simple condition
// Format: condition ? valueIfTrue : valueIfFalse
let weatherDescription = temperature > 70 ? 'warm' : 'cool';

// Nested ternary (more complex)
let clothing =
  temperature > 80 ? 'shorts' : temperature > 60 ? 'jeans' : 'jacket';

// TODO: Use switch statement for day of the week
// Create a variable for day of the week and a switch statement that prints the day name
let season = 'winter';
switch (season) {
  case 'winter':
    console.log(`It's comfortable in Phoenix`);
    break;
  case 'spring':
    console.log(`It's warming up in Phoenix`);
    break;
  case 'summer':
    console.log(`It's hot in Phoenix`);
    break;
  case 'fall':
    console.log(`It's warm in Phoenix`);
    break;
  default:
    console.log(`invalid season`);
}

console.log('Exercise 4 completed!');

// Exercise 5: Loop Structures
// Practice for loops, while loops, and loop control

// TODO: Create a for loop that counts from 1 to 5
console.log(`for loop counting 1 to 5:`);
for (let i = 1; i < 6; i++) {
  console.log(`count:' ${i}`);
}

// TODO: Create a while loop that counts down from 5 to 1
console.log(`while loop counting down from 5:`);
let n = 5;
while (n >= 0) {
  console.log(`count:' ${n}`);
  n--;
}

// TODO: Challenge - Create a for loop from 1 to 10, but use break to exit when you reach 6
console.log(`for loop counting up with break statement at 6:`);
for (let j = 1; j < 11; j++) {
  console.log(`count:' ${j}`);
  if (j == 6) break;
}

// TODO: Challenge - Create a for loop from 1 to 5, but use continue to skip number 3
console.log(`for loop counting 1 to 5, skipping 3:`);
for (let k = 1; k < 11; k++) {
  if (k == 3) continue;
  console.log(`count:' ${k}`);
}

// TODO: Create a nested loop (loop inside a loop)
console.log(`nested for loop:`);
for (let l = 0; l < 2; l++) {
  for (let m = 0; m < 2; m++) {
    console.log(`l: ${l}, m: ${m}`);
  }
}

console.log('Exercise 5 completed!');
console.log(
  'All exercises completed! Run the complete version to see solutions.'
);
