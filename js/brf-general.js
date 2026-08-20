

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

