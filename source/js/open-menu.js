const toggle = document.querySelector(".js-toggle-button");
const siteNav = document.querySelector(".nav__site-list");

const onToggleClick = () => {
  siteNav.classList.toggle("nav__site-list--open")
}

const openMenu = () => {
  toggle.addEventListener('click', onToggleClick)
}

export { openMenu };
