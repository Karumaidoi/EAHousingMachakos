const textarea = document.querySelector('.textarea');

// CKEDITOR.replace(textarea);

//
const btn = document.querySelectorAll('.section-products2__grid-content-btn');
btn.forEach(btn => btn.addEventListener('click', function(e) {
    if(e.target.classList.contains('heart')) {
        // console.log(e.target);

        e.target.style.fill = '#e67e22';
    }
}))

