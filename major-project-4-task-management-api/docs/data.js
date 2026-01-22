// data.js
// In-Memory Storage (Deprecated)
// Before integrating optional MongoDB, the API used an in-memory data store.
// The original implementation is preserved for reference.

const bcrypt = require('bcrypt');

let userIdCounter = 1;
let taskIdCounter = 1;

const users = [
  {
    id: userIdCounter++,
    username: 'admin',
    email: 'admin@test.com',
    password: bcrypt.hashSync('hashedpassword', 10),
    role: 'admin',
    createdAt: new Date(),
  },
];
console.log(`Users: ${JSON.stringify(users, null, 2)}`);

const tasks = [];

module.exports = {
  users,
  tasks,
  counters: {
    userIdCounter,
    taskIdCounter,
  },
};
