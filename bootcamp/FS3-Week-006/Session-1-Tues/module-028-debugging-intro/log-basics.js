let importantInfo = 'Data I want to see';

// not ideal way to log
// we can identify what this log is if we have multiple
console.log(importantInfo);

// better ways to log
console.log('We can log out values here: ', importantInfo);
console.log(`${importantInfo} was the value we want`);

// // mini testing

console.log('I expect important info to be xyz: it was: ', importantInfo);

// use warn and log to show different colors in the browser

function openDoor(locked, doorNotReal) {
  if (locked) {
    console.warn('The door was locked');
  }

  if (doorNotReal) {
    console.error('Fake door');
  }

  if (!locked && !doorNotReal) {
    console.log('Door opened successfully');
  }
}

openDoor(true, false); // Logs: "The door was locked"
openDoor(false, true); // Logs: "Fake door"
openDoor(false, false); // Logs: "Door opened successfully"
