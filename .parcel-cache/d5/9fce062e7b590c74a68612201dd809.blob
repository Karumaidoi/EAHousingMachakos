'use strict';

const dissmissBar = document.querySelector('.upper-note');
const dissmissBtn = document.querySelector('.upper-note__icon');
const body  = document.querySelector('.body');




const message = document.createElement('div');
message.classList.add('upper-note');

message.innerHTML = `
 <i class="fa fa-times upper-note__icon" aria-hidden="true"></i>
 <h4>East Africa Housing Limited</h4>
 <p>EA Housing limited is in the front line to support Black communities. <a href="https://www.mhanational.org/issues/black-and-african-american-communities-and-mental-health" target="_blank" rel="noopener noreferrer">Learn more
 </a></p>
`

body.prepend(message);
console.log(message);

document.querySelector('.upper-note__icon').addEventListener('click', function() {
    message.remove();
})