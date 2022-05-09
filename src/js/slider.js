import { menu, timerId1 } from "./mobile-menu.js";

const refs = {
  hero: document.querySelector(".hero"),
  sliderLarge: document.querySelector("#slider-large"),
  sliderMiddle: document.querySelector("#slider-middle"),
  sliderSmall: document.querySelector("#slider-small"),
};

const { hero, sliderLarge, sliderMiddle, sliderSmall } = refs;
const isMenuHidden = menu.classList.contains('hidden');
let i = 1;

const timerId = setInterval(changeSliderImg, 2000);

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
    
  let backgroundImage = `linear-gradient(to top, rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2)), url('./images/mobile/hero/slider-${i}.jpg')`;
  hero.style.backgroundImage = backgroundImage;
  i += 1;
}
