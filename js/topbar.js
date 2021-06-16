'use strict';

const dissmissBar = document.querySelector('.upper-note');
const dissmissBtn = document.querySelector('.upper-note__icon');

dissmissBtn.addEventListener('click', function() {
    dissmissBar.remove();
});