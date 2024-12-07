// Select the appointment button, close button, and form
const appointmentBtn = document.getElementById('appointment-btn');
const appointmentForm = document.getElementById('appointment-form');
const closeBtn = document.getElementById('close-btn');

// Add event listener to the button to display the form when clicked
appointmentBtn.addEventListener('click', function() {
    appointmentForm.style.display = 'block'; // Show the form
});

// Add event listener to the close button to hide the form when clicked
closeBtn.addEventListener('click', function() {
    appointmentForm.style.display = 'none'; // Hide the form
});