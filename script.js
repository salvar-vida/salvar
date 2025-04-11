// index.html
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
// js for the center section
let currentIndex = 0;
    const slides = document.querySelector('.carousel');
    function nextSlide() {
        currentIndex = (currentIndex + 1) % 3;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    function prevSlide() {
        currentIndex = (currentIndex - 1 + 3) % 3;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    AOS.init(); // Initialize AOS animations

    // Counter Animation
    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll(".counter");
        const speed = 200;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-count");
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    });