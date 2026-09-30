const wrapper = document.querySelector('.swiper__wrapper');
const nextBtn = document.querySelector('.btn__next');
const prevBtn = document.querySelector('.btn__prev');

let slides = document.querySelectorAll('.home__article');


// Make first and last clones of slider array

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

wrapper.append(firstClone);
wrapper.prepend(lastClone);

slides = document.querySelectorAll('.home__article');

let currentIndex = 1;
let isTransitioning = false;


function updateSlider(hasAnimation = true) {

    if (!hasAnimation) {
        wrapper.style.transition = 'none'
    }
    else {
        wrapper.style.transition = "transform 0.4s ease-in-out";
    }
    const offset = -currentIndex * 100;

    wrapper.style.transform = `translateX(${offset}%)`;
}

updateSlider(false)

nextBtn.addEventListener('click', () => {
    if (isTransitioning) return;

    isTransitioning = true;
    currentIndex++;
    updateSlider(true);
})

prevBtn.addEventListener('click', () => {
    if (isTransitioning) return;

    isTransitioning = true;
    currentIndex--;
    updateSlider(true);
})

wrapper.addEventListener('transitionend', () => {
    isTransitioning = false;

    if (slides[currentIndex] === firstClone) {
        currentIndex = 1;
        updateSlider(false);
    }

    if (slides[currentIndex] === lastClone) {
        currentIndex = slides.length - 2;
        updateSlider(false);
    }
})