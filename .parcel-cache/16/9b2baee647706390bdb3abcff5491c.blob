const catBtn = document.querySelector('.header-nav__bottom-left');
const catModal = document.querySelector('.categories');
const closeModal1 = document.querySelector('.btnModalClose');
const linksCat = document.querySelector('.linksCat');
const allLinks = document.querySelectorAll('.linkCat');

catBtn.addEventListener('click', function() {
    catModal.classList.remove('hidden')
})

closeModal1.addEventListener('click', function() {
    catModal.classList.add('hidden')
})

allLinks.forEach(link => link.addEventListener('click', function(e) {
    e.preventDefault();

    const id = link.getAttribute('href');
    console.log(id);

    catModal.classList.add('hidden')

    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
}))

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        catModal.classList.add('hidden')
    }
})


//
const learnLink = document.querySelector('.learn');

learnLink.addEventListener('click', function(e) {
    e.preventDefault();

    const id = learnLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
})


