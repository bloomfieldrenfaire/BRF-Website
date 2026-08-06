

// Toggle Mobile Menu //

function mobileMenu(){
	var x = document.getElementById("mobileMenu");
	if (x.className.indexOf("w3-show") == -1){
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}

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

// Accordian Show/Hide content //

function myAccordion(btn){
	var panel = btn.nextElementSibling;
	if (panel.className.indexOf("w3-show") == -1){
		panel.className += " w3-show";
		panel.previousElementSibling.className += " w3-dark-grey";
	} else {
		panel.className = panel.className.replace(" w3-show", "");
		panel.previousElementSibling.className = panel.previousElementSibling.className.replace(" w3-dark-grey", "");
	}
}