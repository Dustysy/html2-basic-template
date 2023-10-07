/* в этот файл добавляет скрипты*/
const toggle = document.querySelector(".js-toggle-button");
const siteNav = document.querySelector(".nav__site-list");

const onToggleClick = () => {
  siteNav.classList.toggle("nav__site-list--open")
}
toggle.addEventListener('click', onToggleClick)