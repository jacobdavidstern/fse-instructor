// allows you to take all of the passed parameters and put them into a single list

// rest parameter syntax - ... before a variable to collect all of the parameters
// passed to a function

function add(...theValues) {
  // let  theValues =[1,3,10,12,15]
  let total = 0;
  for (const element of theValues) {
    total += element;
  }
  console.log('total was', total);
}

add(1, 3, 10, 12, 15);

// Note: rest parameter must be the last parameter in the function definition and is opposite of spread operator, aggregates singles vs disaggregates multiples

// Spread Operator — Expansion
// Used when building arrays, objects, or function calls by spreading out elements.
// // Arrays:
// ```
// const nums = [1, 2, 3];
// const moreNums = [...nums, 4, 5]; // [1, 2, 3, 4, 5]
// ```
// // Objects:
// ```
// const base = { a: 1 };
// const extended = { ...base, b: 2 }; // { a: 1, b: 2 }
// ```
// // Function calls, referencing function add, above:
// ```
// const args = [10, 20];
// add(...args); // same as add(10, 20)
// ```
