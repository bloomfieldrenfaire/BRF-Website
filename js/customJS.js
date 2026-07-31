

// Display Menu //

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on click
menuToggle.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});

// Dynamic Copyright Year //

const startYear = 2026;
const currentYear = new Date().getFullYear();
const yearText = currentYear > startYear ? `${startYear}-${currentYear}` : `${startYear}`;
document.getElementById('copyright-year').textContent = yearText;

// Countdown Timer //

// Format: new Date(year, monthIndex(0-based), day, hour, minute)
const targetDate = new Date(2027, 6, 24, 13, 0, 0); // July 24, 2027, 01:00 pm (local time)

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const debugEl = document.getElementById('debug');
const countdownEl = document.getElementById('countdown');

function pad(n) {
	return String(n).padStart(2, '0');
}

function updateCountdown() {
	const now = new Date();
	const diffMs = targetDate - now;

	if (diffMs <= 0) {
		countdownEl.innerHTML = '<div class="finished">🎉 Time reached!</div>';
		debugEl.textContent = 'Target was: ' + targetDate.toString();
		clearInterval(timer);
		return;
	}

	const totalSeconds = Math.floor(diffMs / 1000);
	const days = Math.floor(totalSeconds / 86400);
	const hours = Math.floor((totalSeconds % 86400) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	daysEl.textContent = days;
	hoursEl.textContent = pad(hours);
	minutesEl.textContent = pad(minutes);
	secondsEl.textContent = pad(seconds);

 	debugEl.textContent =
	'now: ' + now.toString() + ' | target: ' + targetDate.toString() + ' | diffMs: ' + diffMs;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);