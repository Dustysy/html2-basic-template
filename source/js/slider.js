
const productSlider = document.querySelector('.product-slider');
const products = document.querySelectorAll('.product-slider__wrapper');

const buttonPrev = document.querySelector('.slider-button-prev');
const buttonNext = document.querySelector('.slider-button-next');
const paginationButtons = document.querySelectorAll('.slider-pagination__button');

const productStyles = ['#f3ebe1', '#eae6fc', '#e5e6e8']

buttonPrev.disabled = true;

const isActive = (item) => item.classList.contains('product-slider__wrapper--active');

const onButtonPrevClick = () => {
  for(let i = products.length - 1; i < products.length; i--) {
    if (isActive(products[i])) {
      products[i].classList.remove('product-slider__wrapper--active');
      products[i-1].classList.add('product-slider__wrapper--active');

      if(products[i - 1] === products[0]) {
        buttonPrev.disabled = true;
        buttonNext.disabled = false;
      } else {
        buttonPrev.disabled = false;
        buttonNext.disabled = false;
      }

      productSlider.style.backgroundColor = productStyles[i-1];

      paginationButtons[i].classList.remove('slider-pagination__button--current')
      paginationButtons[i-1].classList.add('slider-pagination__button--current')
      break
    }
  }
}

const onButtonNextClick = () => {
  for(let i = 0; i < products.length; i++) {
    if (isActive(products[i])) {
      products[i].classList.remove('product-slider__wrapper--active');
      products[i+1].classList.add('product-slider__wrapper--active');

      if(products[i + 1] === products[products.length - 1]) {
        buttonNext.disabled = true;
        buttonPrev.disabled = false;
      } else {
        buttonNext.disabled = false;
        buttonPrev.disabled = false;
      }

      productSlider.style.backgroundColor = productStyles[i+1]

      paginationButtons[i].classList.remove('slider-pagination__button--current')
      paginationButtons[i+1].classList.add('slider-pagination__button--current')
      break
    }
  }
}

const onPaginationButtonClick = (evt) => {
  for (let k = 0; k < paginationButtons.length; k++) {
    if(evt.target === paginationButtons[k]) {
      for (let i = 0; i < products.length; i++) {
        if(isActive(products[i])) {
          products[i].classList.remove('product-slider__wrapper--active');
          products[k].classList.add('product-slider__wrapper--active');
          paginationButtons[i].classList.remove('slider-pagination__button--current')
          paginationButtons[k].classList.add('slider-pagination__button--current')
          productSlider.style.backgroundColor = productStyles[k]

          if(products[k] === products[1]) {
            buttonPrev.disabled = false;
              buttonNext.disabled = false;
          } else if(products[k] === products[products.length - 1]) {
              buttonNext.disabled = true;
              buttonPrev.disabled = false;
          } else if(products[k] === products[0]) {
              buttonPrev.disabled = true;
              buttonNext.disabled = false;
          }
        }
      }
    }
  };
}

const chooseSlide = () => {
  paginationButtons.forEach((sliderButton) => {
    sliderButton.addEventListener('click', onPaginationButtonClick)
  });
}

const showPrevSlide = () => {
  buttonPrev.addEventListener('click', onButtonPrevClick);
}

const showNextSlide = () => {
  buttonNext.addEventListener('click', onButtonNextClick);
}

export {
  chooseSlide,
  showPrevSlide,
  showNextSlide
};
