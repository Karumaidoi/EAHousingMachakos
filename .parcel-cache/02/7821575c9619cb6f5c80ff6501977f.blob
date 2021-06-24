const navBar = document.querySelector('.header-nav__bottom');
const header = document.querySelector('.header');

const sectionScroll = document.querySelector('.secLink');

const plans = document.querySelector('.plans');
const secPlans = document.querySelector('.section-products');

const backHome = document.querySelector('.home');
const faq = document.querySelector('.faq');
const reviews = document.querySelector('.reviews');


const sticky = function(entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if(entry.isIntersecting) {
        navBar.classList.remove('positioned')
    } else {
        navBar.classList.add('positioned');
    }; 
}

const navObserver = new IntersectionObserver(sticky, {
    root: null,
    threshold: 0,
});

navObserver.observe(header);

//Jump to top Functionality
const btnJump = document.querySelector('.back-to-top');

btnJump.addEventListener('click', function() {
    header.scrollIntoView({behavior: 'smooth'})
})

//Hiding the jump to top btn
const sectionProd = document.querySelector('.section-products');

const hidefun = function(entries,observer) {
    const [entry] = entries;

    if(entry.isIntersecting) {
        btnJump.style.opacity = 0;
    } else {
        btnJump.style.opacity = 1;
    }
}

const secProds = new IntersectionObserver(hidefun, {
    root: null,
    threshold: 0,
    rootMargin: '-100px',
})

secProds.observe(sectionProd);


///links
sectionScroll.addEventListener('click', function(e) {
    e.preventDefault();

    const id = sectionScroll.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
})


plans.addEventListener('click', function(e) {
    e.preventDefault();

    const id = plans.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
})

backHome.addEventListener('click', function(e) {
    e.preventDefault();

    const id = backHome.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
})

faq.addEventListener('click', function(e) {
    e.preventDefault();

    const id = faq.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
})

reviews.addEventListener('click', function(e) {
    e.preventDefault();

    const id = reviews.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
})

//Contact us Modal
const contact = document.querySelector('.contact');
const contactModal = document.querySelector('.customer-support');

const iconClose = document.querySelector('.iconDown');

contact.addEventListener('click', function(e) {
    e.preventDefault();

    contactModal.classList.remove('usecase');
})

iconClose.addEventListener('click', function(e) {

    e.preventDefault();
    contactModal.classList.add('usecase');
})

//


