// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Simple form validation
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  var status = document.getElementById('form-status');

  if (name === '' || email === '' || message === '') {
    status.textContent = 'Please fill in all fields.';
    status.style.color = 'red';
  } else {
    status.textContent = 'Thank you for your message!';
    status.style.color = 'green';
    // Here you can add code to send the form data
::contentReference[oaicite:1]{index=1}
 
