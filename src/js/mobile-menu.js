import { changeSliderImg } from "./slider.js";

const refs = {
    burgerBtn: document.querySelector('#burger'),
    menu: document.querySelector('#mobile-menu'),
    closeBtn: document.querySelector('#cross'),
}

export const { burgerBtn, menu, closeBtn } = refs;
let timerId1 = null;

burgerBtn.addEventListener('click', burgerBtnClickHandler);
closeBtn.addEventListener('click', closeBtnClickHandler);

function burgerBtnClickHandler() {
    menu.classList.remove('hidden');
    burgerBtn.classList.add('hidden');
}

function closeBtnClickHandler() {
    menu.classList.add('hidden');
    burgerBtn.classList.remove('hidden');
    timerId1 = setInterval(changeSliderImg, 2000);
}

export {timerId1};