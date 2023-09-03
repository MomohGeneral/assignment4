"use strict"
let heading = document.querySelector('h1');
let inc1Btn = document.querySelector('.inc1');
let inc2Btn = document.querySelector('.inc2');
let inc3Btn = document.querySelector('.inc3');
let determinant = 0



function increase(){
    determinant ++
    heading.innerText = determinant

}

inc1Btn.addEventListener('click',increase);


function increase2(){
    determinant +=2
    heading.innerText = determinant

}

inc2Btn.addEventListener('click',increase2);


function increase3(){
    determinant +=3
    heading.innerText = determinant 

}

inc3Btn.addEventListener('click',increase3);

// =================================================================================================
let guest = document.querySelector('zero2');
let inc4Btn = document.querySelector('.inc4');
let inc5Btn = document.querySelector('.inc5');
let inc6Btn = document.querySelector('.inc6');
let guestDeterminant = 0



function increase4(){
    guestDeterminant ++
    guest.innerText = guestDeterminant

}

inc4Btn.addEventListener('click',increase4);


function increase5(){
    guestDeterminant +=2
    guest.innerText = guestDeterminant

}

inc5Btn.addEventListener('click',increase5);


function increase6(){
    guestDeterminant +=3
    guest.innerText = guestDeterminant

}

inc6Btn.addEventListener('click',increase6);