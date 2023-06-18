const btnChangeColor = document.querySelector('.change-color');// Знаходимо елемент button за допомогою class="change-color"
const body = document.querySelector('body'); // Знаходимо елемент body за допомогою назви тегу body
const typeColor = document.querySelector('.color'); // Знаходимо елемент span за допомогою class="color"

btnChangeColor.addEventListener('click', handlerChange); //Додаємо слухача подій на елемент button та передаємо в функцію обробник події

function handlerChange(evt) { // Сворюємо функцію що буде оброблювати події отримані від слухача 
  body.style.background = `${getRandomHexColor()}`; // Задаємо значення  background в стилі елементу body звертаючись до функції getRandomHexColor 
  typeColor.textContent = `${getRandomHexColor()}`; // Задаємо значення textContent в елементі span звертаючись до функції getRandomHexColor
};

function getRandomHexColor() { // Функція що рандомно генерує код кольору в форматі HEX
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};