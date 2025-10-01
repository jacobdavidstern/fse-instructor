# JavaScript Calculator Project - Assessment Rubric

### **Must Have (Required for Passing):**

**Implementation Requirements**

- [x] Implement handleInput() function to route all button clicks (C, =, numbers, operators)
- [x] Create four arithmetic functions: add(), subtract(), multiply(), divide()
- [x] Implement handleNumber() to process number input (0-9) with state management
- [x] Implement handleOperator() to store operator (+, -, \*, /) and prepare for second number
- [x] Implement executeOperation() using if/else statements to call correct arithmetic function
- [x] Implement resetCalculator() to clear all state variables with "C" button
- [x] Use state variables: firstOperand, operator, shouldResetDisplay
- [x] Use the functions: setDisplay()
- [x] Handle one operation at a time
- [x] Keep functions to a maximum of 50 lines of code.

**Logs and Debugging:**

- [x] Use console.log for successful operations
- [x] Use at least one console.error
- [x] Use at least one console.warn

### Functional Requirements

- [x] No JavaScript errors in browser console
- [x] Calculator performs one operation at a time
- [x] Can successfully add, multiply, subtract, and divide
- [x] Clear button resets calculator state
- [x] Display shows current number or result
- [x] Addition works
- [x] Subtraction works
- [x] Multiplication works
- [x] Division works

### **Could Have (Bonus Points):**

- Implement handleDecimal() for decimal point input
- CE button functionality (Clear Entry)
- Add floating point calculations
- Prevention of multiple decimal points
- Using equals will repeat the calculation again
  (10 - 1 = 9, hitting equals again returns 8, hitting equals again returns 7)
