const joinEA = document.querySelector('.joinfree');
const signIn = document.querySelector('.signin');
const removeModal = document.querySelector('.cancel');

const signModal = document.querySelector('.sign-in-modal');
const signInBox = document.querySelector('.sign-in-modal__content');


joinEA.addEventListener('click', function(e) {
    e.preventDefault();

    signModal.classList.remove('sendaway');
    signInBox.classList.remove('transformx')
})

signIn.addEventListener('click', function(e) {
    e.preventDefault();

    signModal.classList.remove('sendaway');
    signInBox.classList.remove('transformx')
})

removeModal.addEventListener('click', function() {
    signModal.classList.add('sendaway');
    signInBox.classList.add('transformx')
})

//Toast
const toastBtn = document.querySelector('.prods');
const toast = document.querySelector('.toasts');

toastBtn.addEventListener('click', () => createNotification());

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerHTML = 'No items in your cart'

    toast.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000)
}