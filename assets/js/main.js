/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');


navToggle?.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
})




/*=============== REMOVE MENU MOBILE ===============*/
navClose?.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
})

/*=============== SWIPER HOME ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 10 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header');
}
window.addEventListener('scroll', bgHeader);

/*=============== SHOW SCROLL UP ===============*/

const scrollUpButton = () => {
    if (!scrollUpButton) return;

    const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUpButton);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');
console.log(sections);
const scrollActive = () => {
    const scrollDown = window.scrollY;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (sectionLink) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionLink.classList.add('active-link');
            }
            else {
                sectionLink.classList.remove('active-link');
            }
        }
    });
    
}

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
}

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    })
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const elementsToReveal = document.querySelectorAll('.reveal-me');
elementsToReveal.forEach(el => { observer.observe(el) });