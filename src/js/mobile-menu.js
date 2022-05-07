const refs = {
    burgerBtn: document.querySelector('#burger'),
    menu: document.querySelector('#mobile-menu'),
    closeBtn: document.querySelector('#cross'),
}

const { burgerBtn, menu, closeBtn } = refs;

burgerBtn.addEventListener('click', burgerBtnClickHandler);
closeBtn.addEventListener('click', closeBtnClickHandler);

function burgerBtnClickHandler() {
    menu.classList.remove('hidden');
    burgerBtn.classList.add('hidden');
}

function closeBtnClickHandler() {
    menu.classList.add('hidden');
    burgerBtn.classList.remove('hidden');
}