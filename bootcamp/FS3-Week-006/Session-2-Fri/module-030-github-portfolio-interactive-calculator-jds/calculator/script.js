// ===================================================================
// DO NOT MODIFY THE CODE BELOW - Call or reference them in your code as needed
// ===================================================================

// Takes in a number and updates the readonly display input
function setDisplay(value) {
  const display = document.getElementById('display');
  display.value = String(parseFloat(value));
}

// Gets the value from the readonly display input
// Returns a number
// Doesn't need to be used but can help you verify
// the current value on the display
function getDisplay() {
  const display = document.getElementById('display');
  //parseFloat changes the string into a number we can use
  return display.value;
}

//Set up display to show zero when starting
setDisplay(0);

console.log('Initial value of display: ', getDisplay());

// ===================================================================
// DO NOT MODIFY THE CODE Above - Call or reference them in your code as needed
// ===================================================================

/**
 * Main input handler called from HTML buttons
 * This function receives ALL button clicks and routes them to the appropriate handler
 * @param {string} input - The input value from button clicks
 */

let input = '';
let operand1 = '';
let operand2 = '';
let operator = '';
let result = null;
let shouldResetDisplay = false;

function handleInput(input) {
  console.log(`Button clicked: ${input}`);

  if (isNumber(input)) {
    handleNumber(input);
  } else if (input === '.') {
    handleDecimal();
  } else if (isOperator(input)) {
    operator = input;
  } else if (input === '=') {
    executeOperation();
  } else if (input === 'C') {
    resetCalculator();
  }
}

/**
 * Handles number input (0-9)
 * @param {string} number - The number that was clicked
 */
function handleNumber(number) {
  // This function should update the display with setDisplay
  // for example, if we have the number 9 already and are adding another 7
  if (shouldResetDisplay) {
    operand1 = '';
    operand2 = '';
    operator = '';
    shouldResetDisplay = false;
  }

  if (!operator) {
    operand1 += number;
    setDisplay(operand1);
  } else {
    operand2 += number;
    setDisplay(operand2);
  }
}

/**
 * Handles decimal point input - This is an Optional Stretch
 */
function handleDecimal() {
  // Make sure you don't add multiple decimal points to one number

  if (!operator) {
    if (!operand1.includes('.')) {
      operand1 += '.';
      setDisplay(operand1);
    }
  } else {
    if (!operand2.includes('.')) {
      operand2 += '.';
      setDisplay(operand2);
    }
  }
}

/**
 * Executes the calculation when = is pressed
 */
function executeOperation() {
  // Use if/else statements to call the right operation function
  // Handle the result and any errors
  //  const result = parseFloat(operand1) + parseFloat(operand2);

  const num1 = parseFloat(operand1);
  const num2 = parseFloat(operand2);

  if (!operand1 || !operand2 || !operator) {
    console.warn('Attempted execution with incomplete input');
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error');
    return;
  }

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      console.log('Division by zero error');
      result = 'Error';
    } else {
      result = num1 / num2;
    }
  }

  setDisplay(result);
  shouldResetDisplay = true;
  resetOperands(true); // enable chaining if result is valid
}

/**
 * Resets the calculator (C button)
 */
function resetCalculator() {
  // Reset all state variables and display
  resetOperands();
  result = null;
  setDisplay(0);
}

function isNumber(input) {
  return !isNaN(input);
}

function isOperator(input) {
  return ['+', '-', '*', '/'].includes(input);
}

function resetOperands(chain = false) {
  operand1 = chain && result !== 'Error' ? String(result) : '';
  operand2 = '';
  operator = '';
}
