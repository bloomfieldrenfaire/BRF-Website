// Countdown Timer //

// Format: new Date(year, monthIndex(0-based), day, hour, minute)
const targetDate = new Date(2027, 6, 24, 13, 0, 0); // July 24, 2027, 01:00 pm (local time)

const daysEl = document.getElementById('js-days');
const hoursEl = document.getElementById('js-hours');
const minutesEl = document.getElementById('js-minutes');
const secondsEl = document.getElementById('js-seconds');
const debugEl = document.getElementById('js-debug');
const countdownEl = document.getElementById('js-countdown');

function pad(n) {
	return String(n).padStart(2, '0');
}

function updateCountdown() {
	const now = new Date();
	const diffMs = targetDate - now;

	if (diffMs <= 0) {
		countdownEl.innerHTML = '<div class="brf-finished">🎉 Time reached!</div>';
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