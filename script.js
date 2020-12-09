const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

// Set Date Input Min with Today'S Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Take Values From Form Input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = this[0].value;
    countdownDate = this[1].value;
    console.log(countdownTitle, countdownDate);
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);