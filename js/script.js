'use strict'


const btn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const modalpane = document.querySelector(".modal-details");


btn.addEventListener('click', function(){
console.log("am clicked !!!!!");
overlay.classList.remove('hidden');
modalpane.classList.remove('hidden');
});

closeBtn.addEventListener('click', function(){
    console.log("am clicked !!!!!");
    overlay.classList.add('hidden');
    modalpane.classList.add('hidden');
 });