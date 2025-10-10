console.log('Connected');

// Select the form element
const jobApplicationForm = document.querySelector('#job-application');

// Listen for the submit event on the form, and prevent the default action
jobApplicationForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // ^^^^^^^^^^^^^^^^^^^
  // Prevent traditional form submission
  // typically, you would take all of the data from the form and send it in an
  // API request to a server, where it would be stored for later retrieval in
  // a database we haven't gone over this so lets look at the data.

  // Log element to which form is bound, <form id="job-application" …>
  console.log('currentTarget', event.currentTarget);
  // FormData object to easily access form data
  const experienceInput = event.currentTarget.elements.experience;
  // Log input element, <input type="text" name="experience" …>
  console.log('experience input', experienceInput);
  // Log input value, e.g. "5 years of experience in windows development"
  console.log('experience input value', experienceInput.value);

  if (!validateExperience(experienceInput.value)) {
    alert('Your experience is invalid');
  } else {
    console.log('Form submitted!');
  }
});

// validateExperience() rejects (returns false) experience that mentions windows
function validateExperience(text) {
  if (text.toLowerCase().includes('windows')) {
    return false;
  }
  return true;
}
// https://developer.mozilla.org/en-US/docs/Web/API/FormData
