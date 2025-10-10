// ============================================
// GUIDED PRACTICE SESSION 1: Basic Function Conversion
// ============================================
// Regular function declaration
function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}! Welcome to our site.`;
}

// TODO: Convert the greetUser function above into a named arrow function
// Requirements:
// - Use const to declare the function
// - Keep the same parameters (name, timeOfDay)
// - Use curly braces for the function body
// - Keep the return statement
// - Name it: greetUserArrow

// Write your arrow function here:
const greetUserArrow = (name, timeOfDay) => {
  return `Good ${timeOfDay}, ${name}! Welcome to our site.`;
};

// Test your function (uncomment to test):
console.log(greetUserArrow('Alice', 'morning'));

// ============================================
// GUIDED PRACTICE SESSION 2: Math Operations
// ============================================
// Regular function expression
// const calculateAreaArrow = function (length, width, height) {
//   const area = length * width;
//   const volume = area * height;
//   return {
//     surfaceArea: area,
//     volume: volume,
//   };
// };

// TODO: Convert the calculateArea function above into a named arrow function
// Requirements:
// - Use const to declare the function
// - Keep the same parameters (length, width, height)
// - Use curly braces for the function body
// - Keep all the internal calculations
// - Return the same object structure
// - Name it: calculateAreaArrow

// Write your arrow function here:
const calculateAreaArrow = (length, width, height) => {
  const area = length * width;
  const volume = area * height;
  return {
    surfaceArea: area,
    volume: volume,
  };
};

// Test your function (uncomment to test):
// console.log(calculateAreaArrow(5, 3, 2));
console.log(calculateAreaArrow(2, 4, 96));

// ============================================
// GUIDED PRACTICE SESSION 3: Array Processing
// ============================================
// Regular function with array processing
function processStudentGrades(students, passingGrade) {
  const results = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const status = student.grade >= passingGrade ? 'PASS' : 'FAIL';
    results.push({
      name: student.name,
      grade: student.grade,
      status: status,
    });
  }
  return results;
}

// TODO: Convert the processStudentGrades function above into a named arrow function
// Requirements:
// - Use const to declare the function
// - Keep the same parameters (students, passingGrade)
// - Use curly braces for the function body
// - Keep all the logic (loop, conditional, array operations)
// - Return the same results array
// - Name it: processStudentGradesArrow

// Write your arrow function here:
const processStudentGradesArrow = (students, passingGrade) => {
  const results = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const status = student.grade >= passingGrade ? 'PASS' : 'FAIL';
    results.push({
      name: student.name,
      grade: student.grade,
      status: status,
    });
  }
  return results;
};

// Test data (uncomment to test):
const testStudents = [
  { name: 'John', grade: 85 },
  { name: 'Sarah', grade: 92 },
  { name: 'Mike', grade: 67 },
  { name: 'Emma', grade: 78 },
];

// Test your function (uncomment to test):
console.log(processStudentGradesArrow(testStudents, 70));

// ============================================
// BONUS CHALLENGE
// ============================================
// TODO: After completing all three exercises above, try to:
// 1. Compare the syntax differences between regular functions and arrow functions
// Regular Functions

// Declared with function keyword
// Can be named or anonymous
// Has its own this context
// Requires return for output
// Can be hoisted (used before declaration)

// Arrow Functions

// Declared with const and => syntax
// Usually anonymous, assigned to a variable
// Inherits this from surrounding scope
// Allows implicit return (if no {} used)
// Not hoisted—must be declared before use
// 2. Run all the test cases to verify your arrow functions work correctly
// 3. Experiment with different parameter values to see the outputs

// Notes:
// - * Arrow functions with curly braces need explicit return statements
// - Parameters in parentheses are required when you have multiple (or zero) parameters (not required for single parameter)
// - const is the preferred way to declare arrow functions
