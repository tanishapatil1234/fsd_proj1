/**
 * One simple JavaScript feature: show a thank-you message
 * when the user submits the contact form (instead of
 * actually sending the form somewhere).
 */

// Wait until the page has loaded, then run our code
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var messageEl = document.getElementById('form-message');

  if (!form || !messageEl) return;

  // When the form is submitted, show a message and prevent default submit
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Don't reload the page or navigate away

    var nameInput = document.getElementById('name');
    var name = nameInput ? nameInput.value.trim() : '';

    if (name) {
      messageEl.textContent = 'Thanks, ' + name + '! Your message was received.';
    } else {
      messageEl.textContent = 'Thanks! Your message was received.';
    }

    messageEl.style.display = 'block';
  });
});
