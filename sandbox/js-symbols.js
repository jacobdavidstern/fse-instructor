const isInternal = Symbol('isInternal');

const user = {
  name: 'Jacob',
  age: 30,
  [isInternal]: true,
};

// Regular property access
console.log(user.name); // "Jacob"

// Symbol property access
console.log(user[isInternal]); // true

// Symbols are not shown in for...in or Object.keys
for (let key in user) {
  console.log(key); // "name", "age" — but not "isInternal"
}

console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(isInternal) ]

/*
The Symbol itself is the key, and its practical value is its identity, not its payload.

Symbols as keys: What matters is who they are, not what they hold
When you do:

javascript
const isInternal = Symbol("isInternal");
user[isInternal] = true;
You're not creating a key with a meaningful name—you're creating a unique, non-colliding identity. The "isInternal" description is just a debugging label. It doesn’t affect behavior, and it’s not retrievable programmatically.
*/
