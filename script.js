// Grab exactly what is written in the HTML id="" attributes
const form = document.getElementById('form');
const emailInput = document.getElementById('email');

// Use querySelector for class names (don't forget the dot!)
const errorIcon = document.querySelector('.error-icon');
const errorText = document.querySelector('.error-text');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Fixed the ariaValueMax typo!
    const emailValue = emailInput.value.trim();

    if (!emailValue || !emailRegex.test(emailValue)) {
        errorIcon.classList.remove('hidden');
        errorText.classList.remove('hidden');

        // Added var() to the CSS variable
        emailInput.style.border = "2px solid var(--primary-red)";
    } else {
        errorIcon.classList.add('hidden');
        errorText.classList.add('hidden');

        emailInput.style.border = "1px solid var(--primary-pink)";

        alert("Success! Thanks for subscribing.");

        emailInput.value = '';
    }
});