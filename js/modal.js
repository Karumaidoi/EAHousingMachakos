const btnOpen = document.querySelector('.header-nav__bottom-right-add');
const closeBtn = document.querySelector('.closeBtn');
const cancelBtn = document.querySelector('.btn-cancel');
const btnsInt = document.querySelectorAll('.int');
const modal = document.querySelector('.prod-request-modal');
const btnFind = document.querySelector('.btn-find');
const textArea = document.querySelector('.textarea');

const closeModal = document.querySelector('.align');

const popup = document.querySelector('.prod-request-modal__content-alert');

const spinner = document.querySelector('.prod-request-modal__content-spinner');

btnsInt.forEach(btn => btn.addEventListener('click', function(e) {

    if(btn.classList.contains('btn-active')) {
        btn.classList.remove('btn-active');
    } else {
        btn.classList.add('btn-active');
    }
}))

cancelBtn.addEventListener('click', function(e) {
    btnsInt.forEach(btn => btn.classList.remove('btn-active'))
    textArea.value = '';
})

closeBtn.addEventListener('click', function() {
    modal.classList.add('hidden')
    textArea.value = '';
    // console.log(textArea.value);
})

btnOpen.addEventListener('click', function() {
    modal.classList.remove('hidden')
})

btnFind.addEventListener('click', function(e) {
    spinner.classList.remove('hidden');
    
    setTimeout(() =>  {
        popup.classList.remove('none');
        spinner.classList.add('hidden');
    }, 3000);

    btnFind.style.cursor = 'not-allowed';
})

closeModal.addEventListener('click', function() {
    popup.classList.add('none');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 1000)

    btnsInt.forEach(btn => btn.classList.remove('btn-active'));

    btnFind.style.cursor = 'pointer';
})



