const rangeSlider = document.querySelector(".range__wrapper");
const minInput = document.querySelector(".js-price-min")
const maxInput = document.querySelector(".js-price-max")

const DEFAULT__VALUES = {
  minPrice: 0,
  maxPrice: 1000,
  start: 0,
  end: 900,
  step: 1
}

const initRange = () => {
  noUiSlider.create(rangeSlider, {
    start: [DEFAULT__VALUES.start, DEFAULT__VALUES.end],
    connect: true,
    range: {
        'min': DEFAULT__VALUES.minPrice,
        'max': DEFAULT__VALUES.maxPrice
    },
    step: DEFAULT__VALUES.step
  });
}

const onSliderUpdate = () => {
  const sliderValue = rangeSlider.noUiSlider.get();
  minInput.value = Math.floor(sliderValue[0]);
  maxInput.value = Math.floor(sliderValue[1]);
};


const updateSlider = () => {
  rangeSlider.noUiSlider.on('update', onSliderUpdate);
};

export { initRange, updateSlider }
