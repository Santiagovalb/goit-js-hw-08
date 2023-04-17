const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// load saved data on page load
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  emailInput.value = savedData.email;
  messageInput.value = savedData.message;
}

// save data on input change
form.addEventListener('input', () => {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
});

// submit form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };

  // clear storage and form fields
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  // log data to console
  console.log(data);
});
