"use strict"
// selecting elements
let headingTag = document.querySelector('h2');
let decBtn = document.querySelector('.dec');
let incBtn = document.querySelector('.inc');
let resBtn = document.querySelector('.res')
let determinant = 0

// logic
// decrease
function Decrease(){
    determinant --
    headingTag.innerText = determinant

}

decBtn.addEventListener('click',Decrease)


function increase(){
    determinant ++
    headingTag.innerText = determinant

}

incBtn.addEventListener('click',increase)



resBtn.addEventListener('click',function(){
    determinant = 0;
    headingTag.textContent = determinant

})