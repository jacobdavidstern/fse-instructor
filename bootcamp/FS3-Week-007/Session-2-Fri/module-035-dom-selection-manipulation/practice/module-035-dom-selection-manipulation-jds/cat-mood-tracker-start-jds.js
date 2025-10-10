// DOM Selection and Manipulation Practice - Cat Mood Tracker (Simple & Funny!)

// Cat names for generating new cats
// prettier-ignore
const catNames = [
  'Whiskers',
  'Mr. Fluffington',
  'Princess Mittens',
  'Sir Pounce-a-lot',
  'Captain Whiskers',
  'Lady Furriton',
  'Professor Meowington',
  'Duchess Fuzzycoat',
];

// Helper object to map moods to emoji: addNewCat(), changeCatMood()
// Example: catFace.textContent = moodEmoji[newMood] || '';
const moodEmoji = {
  happy: '😸',
  grumpy: '😾',
  sleepy: '😴',
};

// DOM Selection Methods Practice
// Select important elements using querySelector() and querySelectorAll()
const catGrid = document.querySelector('.cat-grid'); // Note: . for class
const addCatBtn = document.querySelector('#add-cat-btn');
const prependCatBtn = document.querySelector('#prepend-cat-btn');
const removeLastCatBtn = document.querySelector('#remove-last-cat-btn');
const makeAllHappyBtn = document.querySelector('#make-all-happy-btn');
const makeAllGrumpyBtn = document.querySelector('#make-all-grumpy-btn');
const randomMoodsBtn = document.querySelector('#random-moods-btn');

// Stats elements
const happyCountDisplay = document.querySelector('#happy-count');
const grumpyCountDisplay = document.querySelector('#grumpy-count');
const sleepyCountDisplay = document.querySelector('#sleepy-count');

// Element Content Manipulation
// Note: .closest more resilient than .parentElement
function changeCatMood(button, newMood) {
  const catCard = button.closest('.cat-card');

  // Button is inside mood-buttons, which is inside cat-card. Cat-face is sibling
  // of button, so scope query to parent .cat-card, which contains cat-face.
  const catFace = button.closest('.cat-card').querySelector('.cat-face');

  const catMoodText = button.closest('.cat-card').querySelector('.cat-mood');

  // moodEmoji: Helper to map moods to emoji: addNewCat(), changeCatMood()
  catFace.textContent = moodEmoji[newMood] || '';

  catMoodText.textContent = capitalizeFirstLetter(newMood);

  catCard.setAttribute('cat-mood', newMood);

  catCard.classList.remove('happy', 'grumpy', 'sleepy');
  catCard.classList.add(newMood);

  updateMoodStatistics();
}

// Create cat card element and return it (Utility function)
// Used in addNewCat() and addCatToStart()
function createCatCard() {
  const newCatCard = document.createElement('div');

  const moods = ['happy', 'grumpy', 'sleepy'];
  const moodEmojis = { happy: '😸', grumpy: '😾', sleepy: '😴' };
  const randomName = getRandomItem(catNames);
  const randomMood = getRandomItem(moods);
  const moodText = capitalizeFirstLetter(randomMood);

  newCatCard.classList.add('cat-card', randomMood);
  newCatCard.setAttribute('data-mood', randomMood);

  newCatCard.innerHTML = `
    <div class="cat-face">${moodEmojis[randomMood]}</div>
    <h3 class="cat-name">${randomName}</h3>
    <p class="cat-mood">${moodText}</p>
    <div class="mood-buttons">
      <button onclick="changeCatMood(this, 'happy')">😸 Happy</button>
      <button onclick="changeCatMood(this, 'grumpy')">😾 Grumpy</button>
      <button onclick="changeCatMood(this, 'sleepy')">😴 Sleepy</button>
      <button onclick="removeCat(this)" class="remove-btn">🗑️ Remove</button>
    </div>
  `;

  return newCatCard;
}

// DOM Structure Manipulation
// Create a new cat card element using createElement(); Similar to addCatToStart()
function addNewCat() {
  const card = createCatCard();
  console.log(catGrid); // Should not be null
  console.log(catGrid.children.length); // Should increment
  catGrid.appendChild(card);
  console.log(catGrid); // Should not be null
  console.log(catGrid.children.length); // Should increment
  updateMoodStatistics();
}

// DOM Structure Manipulation
// Add cat to the beginning of the list; Similar to addNewCat()
function addCatToStart() {
  const card = createCatCard();
  catGrid.prepend(card);
  updateMoodStatistics();
}

// Remove the last cat from the list
function removeLastCat() {
  const allCats = catGrid.querySelectorAll('.cat-card');
  {
    if (allCats.length > 0) {
      const lastCat = allCats[allCats.length - 1];
      lastCat.remove();
    }
  }
  updateMoodStatistics();
}

// Remove individual cat (called from onclick in HTML)
function removeCat(button) {
  const catCard = button.closest('.cat-card');
  catCard.remove();
  updateMoodStatistics();
}

// Attribute and Style Manipulation
function makeAllCatsHappy() {
  const allCats = catGrid.querySelectorAll('.cat-card');
  allCats.forEach((element) => {
    changeCatMood(element, 'happy');
  });
  updateMoodStatistics();
}

function makeAllCatsGrumpy() {
  const allCats = catGrid.querySelectorAll('.cat-card');
  allCats.forEach((element) => {
    changeCatMood(element, 'grumpy');
  });
  updateMoodStatistics();
}

function randomizeCatMoods() {
  const moods = ['happy', 'grumpy', 'sleepy'];
  const allCats = catGrid.querySelectorAll('.cat-card');
  allCats.forEach((element) => {
    const randomMood = getRandomItem(moods);
    changeCatMood(element, randomMood);
  });
  updateMoodStatistics();
}

function updateMoodStatistics() {
  const happyCats = catGrid.querySelectorAll('[data-mood="happy"]');
  const grumpyCats = catGrid.querySelectorAll('[data-mood="grumpy"]');
  const sleepyCats = catGrid.querySelectorAll('[data-mood="sleepy"]');

  happyCountDisplay.textContent = happyCats.length;
  grumpyCountDisplay.textContent = grumpyCats.length;
  sleepyCountDisplay.textContent = sleepyCats.length;
}

//Helper Functions - Do not edit

function init() {
  setupEventListeners();
  updateMoodStatistics();
}

init();

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Capitalize first letter of string
function capitalizeFirstLetter(inputString) {
  // just return empty string if we get garbage input
  if (!inputString || typeof inputString !== 'string') {
    return '';
  }

  // grab the first letter and uppercase it
  const firstCharacter = inputString.charAt(0);
  const uppercaseFirstCharacter = firstCharacter.toUpperCase();
  // get everything else after the first letter
  const restOfString = inputString.slice(1);
  // stick them back together
  const capitalizedString = uppercaseFirstCharacter + restOfString;

  return capitalizedString;
}

// Event Listeners
function setupEventListeners() {
  // Add click event listeners to control buttons
  if (addCatBtn) addCatBtn.addEventListener('click', addNewCat);
  if (prependCatBtn) prependCatBtn.addEventListener('click', addCatToStart);
  if (removeLastCatBtn)
    removeLastCatBtn.addEventListener('click', removeLastCat);
  if (makeAllHappyBtn)
    makeAllHappyBtn.addEventListener('click', makeAllCatsHappy);
  if (makeAllGrumpyBtn)
    makeAllGrumpyBtn.addEventListener('click', makeAllCatsGrumpy);
  if (randomMoodsBtn)
    randomMoodsBtn.addEventListener('click', randomizeCatMoods);

  console.log('Event listeners set up successfully!');
}
