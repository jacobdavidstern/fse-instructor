// Event Handling & Bubbling Practice - Starter Version
const output = document.querySelector('#output');

function log(message) {
  output.innerHTML += message + '<br>';
  output.scrollTop = output.scrollHeight;
}
// log to "Event Log"
log('What was added?');

// Event Handler Basics - addEventListener()
// Add click event listener to btn1
// select the button 1st
// create the listener
// Click events fire when user presses and releases a mouse button on an element
// Use addEventListener() method to attach the event
document.querySelector('#btn1').addEventListener('click', function () {
  log('Button 1 clicked!');
});

// Add mouseover event listener to btn2
// Mouseover events fire when the mouse pointer enters an element
// This is useful for hover effects and interactive feedback
document.querySelector('#btn2').addEventListener('mouseover', function () {
  log('Button 2 hovered!');
});

// Add keydown event listener to text input
// Keydown events fire when a key is pressed down (before it's released)
// Useful for capturing user input in real-time
document
  .querySelector('#text-input')
  .addEventListener('keydown', function (event) {
    log('Key pressed: ' + event.key);
  });

// Event Object
// Access event object and use event.target filters to clicks inside buttons
// Add event listener that shows which button was clicked
// Use event.target to identify which specific element triggered the event
// Event delegation allows handling events on multiple child elements from parent
// Check if the clicked element is a button using event.target.tagName
document
  .querySelector('#container')
  .addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      log(
        'Clicked: ' +
          event.target.textContent +
          ' (target: ' +
          event.target.id +
          ')'
      );
    }
  });

// Test
// Event preventDefault
// Prevent form submission
// Add form submit event listener with preventDefault
// Submit events fire when a form is submitted
// preventDefault() stops the default browser behavior (page refresh)
// This allows you to handle form data with JavaScript instead
document
  .querySelector('#demo-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    log('Form submission prevented!');
    const inputValue = document.querySelector('#text-input').value;
    log('Input value: ' + inputValue);
  });

// Event Bubbling and stopPropagation
// Demonstrate event bubbling
document.querySelector('#container').addEventListener('click', function () {
  log('Container clicked (bubbling)');
});

// Add event listeners to show bubbling
// Event bubbling means events travel up from child to parent elements
// Add click listeners to both container and box to see bubbling in action
// Use stopPropagation() to prevent the event from bubbling up
document.querySelector('#box').addEventListener('click', function (event) {
  log('Box clicked (bubbling)');
  // Uncomment next line to stop bubbling:
  // event.stopPropagation();
});

// Event Delegation
// Add new buttons dynamically
let buttonCount = 3;

// Add event listener to "Add New Button"
// This demonstrates creating new elements dynamically
// Use createElement() to create new button elements
// Use appendChild() to add them to the DOM
document.querySelector('#btn3').addEventListener('click', function () {
  buttonCount++;
  const newButton = document.createElement('button');
  newButton.textContent = 'Button ' + buttonCount;
  newButton.id = 'btn' + buttonCount;
  document.querySelector('#box').appendChild(newButton);
  log('New button added: ' + newButton.id);
});

// Remove Event Listener
// Demonstrate removeEventListener()
function removableHandler() {
  log('Removable handler called!');
}

// Add removable event listener
// Attach the removableHandler function to the remove button
// Use a named function (not anonymous) so it can be removed later
// Anonymous functions cannot be removed because you can't reference them

document
  .querySelector('#remove-listener-btn')
  .addEventListener('click', removableHandler);

// Add another listener to remove the first one
// Add a double-click event listener that removes the single-click listener
// Add double-click listener to remove the single-click listener
document
  .querySelector('#remove-listener-btn')
  .addEventListener('dblclick', function () {
    document
      .querySelector('#remove-listener-btn')
      .removeEventListener('click', removableHandler);
    log('Event listener removed! Try clicking the button again.');
  });

// Named arrow functions can be removed from events using removeEventListener
// const handleClick = (e) => {
//   console.log('clicked');
// };
// element.addEventListener('click', handleClick);
// element.removeEventListener('click', handleClick);
