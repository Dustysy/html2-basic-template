// import noUiSlider from './nouislider/nouislider.js';
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';
/*range range__bar range__toggle*/
/*filter-form__price-wrapper filter-form__price filter-form__price-input */
const range = document.querySelector(".range__wrapper");
const minToggle = document.querySelector(".range__toggle--min")
const maxToggle = document.querySelector(".range__toggle--max")
const minInput = document.querySelector(".js-price-min")
const maxInput = document.querySelector(".js-price-max")

const minPrice = minInput.min;
const maxPrice = maxInput.max;

const minValue = minInput.value;
const maxValue = maxInput.value;

const initRange = () => {
  noUiSlider.create(range, {
    start: [minValue, maxValue],
    connect: true,
    range: {
        'min': minPrice,
        'max': maxPrice
    }
  });
}
export { initRange }