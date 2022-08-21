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

const dropdown = document.getElementsByClassName('dropdown-btn');

for (let i = 0; i < dropdown.length; i++) {
  const element = dropdown[i];
  element.addEventListener('click', function () {
    console.log(element);
    // add class selected
    element.classList.toggle('selected');
    const dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('hide');

    // remove from other dropdowns
    const dropdowns = document.getElementsByClassName('dropdown-btn');
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i] !== element) {
        dropdowns[i].classList.remove('selected');
        dropdowns[i].nextElementSibling.classList.add('hide');
      }
    }
  });
}
