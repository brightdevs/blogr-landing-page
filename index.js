function toggleNav() {
  const overlay = document.getElementById('myNav');
  const burger = document.getElementById('burger');

  if (!hasClass(burger, 'active')) {
    removeClass(overlay, 'hide');
    addClass(burger, 'active');
    overlay.style.width = '100%';
    updateBackgroundImage(burger, './images/icon-close.svg');
  } else {
    addClass(overlay, 'hide');
    removeClass(burger, 'active');
    overlay.style.width = '0%';
    updateBackgroundImage(burger, './images/icon-hamburger.svg');
  }
}

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function hasClass(element, className) {
  return element.classList.contains(className);
}

function updateBackgroundImage(element, image) {
  element.style.backgroundImage = 'url(' + image + ')';
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 480) {
    const overlay = document.getElementById('myNav');
    const burger = document.getElementById('burger');
    addClass(overlay, 'hide');
    removeClass(burger, 'active');
    overlay.style.width = '0%';
    updateBackgroundImage(burger, './images/icon-hamburger.svg');
  }
});
