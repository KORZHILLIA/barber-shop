import { menu, timerId1 } from "./mobile-menu.js";

const refs = {
  heroSlider: document.querySelector(".slider-box__img"),
  sliderLarge: document.querySelector("#slider-large"),
  sliderMiddle: document.querySelector("#slider-middle"),
  sliderSmall: document.querySelector("#slider-small"),
};

const { heroSlider, sliderLarge, sliderMiddle, sliderSmall } = refs;
let i = 1;

const timerId = setInterval(changeSliderImg, 3000);

export function changeSliderImg() {
    const isMenuHidden = menu.classList.contains("hidden");
    if (!isMenuHidden) {
        clearInterval(timerId) || clearInterval(timerId1);
    }
  if (i > 3) {
    i = 1;
  }
  switch (i) {
    case 1:
      sliderLarge.classList.remove("slider__bar--active");
      sliderSmall.classList.add("slider__bar--active");
      break;
    case 2:
      sliderSmall.classList.remove("slider__bar--active");
      sliderMiddle.classList.add("slider__bar--active");
      break;
    case 3:
      sliderMiddle.classList.remove("slider__bar--active");
      sliderLarge.classList.add("slider__bar--active");
      break;
    }
    
  let img = `./images/mobile/hero/slider-${i}.jpg`;
  heroSlider.src = img;
  heroSlider.alt = `slider-${i}`;
  i += 1;
}
