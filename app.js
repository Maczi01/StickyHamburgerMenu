console.log('Working');

const navbar = document.querySelector('.navbar');
const content = document.querySelector('.content');
const distanceBeetweennavbarAndWindow = Math.floor(navbar.getBoundingClientRect().top);
const paddingTop = 50;
const side = document.querySelector('.side');
const hamburger = document.querySelector('.navbar__hamburger');
const navbar__item = document.querySelectorAll('.navbar__item');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        side.classList.add('side--visible');
        side.classList.remove('side');
    } else {
        side.classList.remove('side--visible');
        side.classList.add('side');
    }
});

window.addEventListener('scroll', () => {
    const distance = window.pageYOffset;
    if (distance >= distanceBeetweennavbarAndWindow) {
        navbar.classList.add('navbar--top')
        content.style.paddingTop = `${paddingTop + navbar.clientHeight}px`
    } else {
        navbar.classList.remove('navbar--top')
        content.style.paddingTop = `${paddingTop}px`
    }
});

hamburger.addEventListener('click', () => {
    navbar__item.forEach(e => {
        e.classList.toggle('navbar__item--visible')
    })
});
