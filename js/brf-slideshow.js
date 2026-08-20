// Slideshow with indicators //

function initSlideshow(container){
    const slides = container.querySelectorAll(".brf-slideshow");
    const dots = container.querySelectorAll(".brf-dot");
    let slideIndex = 0;

    function showDiv(n){
        slideIndex = (n + slides.length) % slides.length; // wraps both directions
        slides.forEach((s, i) => s.style.display = i === slideIndex ? "block" : "none");
        dots.forEach((d, i) => d.classList.toggle("w3-white", i === slideIndex));
    }

    container.querySelectorAll("[data-slide-dir]").forEach(btn => {
        btn.addEventListener("click", () => showDiv(slideIndex + Number(btn.dataset.slideDir)));
    });

    container.querySelectorAll("[data-slide-to]").forEach(btn => {
        btn.addEventListener("click", () => showDiv(Number(btn.dataset.slideTo) - 1));
    });

    showDiv(0);
}

document.querySelectorAll(".brf-slideshow-container").forEach(initSlideshow);