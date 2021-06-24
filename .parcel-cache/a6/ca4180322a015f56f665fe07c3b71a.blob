'use strict';

const btnLeft = document.querySelector('.btn__slider-left');
const btnRight = document.querySelector('.btn__slider-right');

const slides = document.querySelectorAll('.slide');
console.log(slides);

let currSlide = 0;
const maxSlide = slides.length;

slides.forEach((s,i) => {
    s.style.transform = `translateX(${110 * i}%)`;
})

btnRight.addEventListener('click', function() {

    if(currSlide === maxSlide - 1) {
        currSlide = 0;
    } else {
        currSlide++;
    }

    slides.forEach((s,i) => {
        s.style.transform = `translateX(${110 * (i - currSlide)}%)`;
    })
});

btnLeft.addEventListener('click', function() {
    if(currSlide === 0) {
        currSlide = maxSlide - 1;
    } else {
        currSlide--;
    }

    slides.forEach((s,i) => {
        s.style.transform = `translateX(${110 * (i - currSlide)}%)`;
    })

})

document.addEventListener('keydown', function(e) {
    // console.log(e.key);

    if(currSlide === maxSlide - 1) {
        currSlide = 0;
    } else {

        currSlide++;
    }

    if(e.key === 'ArrowRight') {
        slides.forEach((s,i) => {
            s.style.transform = `translateX(${110 * (i - currSlide)}%)`;
        })
    }
})

document.addEventListener('keydown', function(e) {
    
    if(currSlide === 0) {
        currSlide = maxSlide - 1;
    } else {
        currSlide--;
    }

    if(e.key === 'ArrowLeft') {
        slides.forEach((s,i) => {
            s.style.transform = `translateX(${110 * (i - currSlide)}%)`;
        })
    }
})

//

