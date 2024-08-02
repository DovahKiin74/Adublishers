document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.testimonial-slides');
    const prevButton = document.querySelector('.slider-nav.prev');
    const nextButton = document.querySelector('.slider-nav.next');
    const slideCount = document.querySelectorAll('.testimonial-slide').length;
    let currentIndex = 0;

    function updateSlidePosition() {
        const offset = -currentIndex * 100; // Slide width is 100%
        slides.style.transform = `translateX(${offset}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlidePosition();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlidePosition();
    }

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    // Initialize the slider
    updateSlidePosition();
});
