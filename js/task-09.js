const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const typeColor = document.querySelector('.color')

btnChangeColor.addEventListener('click', handlerChange)

function handlerChange(evt) {
  body.style.background = `${getRandomHexColor()}`;
  typeColor.textContent = `${getRandomHexColor()}`;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};