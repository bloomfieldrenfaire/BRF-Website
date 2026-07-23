

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

// The Below is old stuff //


// Document Last Modified //

	function getLastMod(){	
		document.getElementById("lastMod").innerText = document.lastModified;
		clearTimeout(getLastMod); // Kill our setTimeout to stop calling this	
	}

