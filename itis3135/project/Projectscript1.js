document.addEventListener("DOMContentLoaded", function() {
    // Form validation for contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert("All fields are required!");
                event.preventDefault();
            } else {
                const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                if (!email.match(emailPattern)) {
                    alert("Please enter a valid email address.");
                    event.preventDefault();
                }
            }
        });
    }
});

$(function() {
    $("#date").datepicker();
});

$(document).ready(function() {
    $("#contactForm").on("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        $.ajax({
            url: 'your-server-endpoint', // Replace with your server-side script URL
            type: 'POST',
            data: $(this).serialize(), // Serialize form data
            success: function(response) {
                $('#responseMessage').html('<p>Thank you for your message!</p>');
            },
            error: function() {
                $('#responseMessage').html('<p>There was an error sending your message. Please try again.</p>');
            }
        });
    });
});
