/* в этот файл добавляет скрипты*/
import { openMenu } from './open-menu.js'
import { chooseSlide, showPrevSlide, showNextSlide } from './slider.js';
import { initRange, updateSlider } from './range.js';

openMenu();

chooseSlide();
showPrevSlide();
showNextSlide();

initRange();
updateSlider();
