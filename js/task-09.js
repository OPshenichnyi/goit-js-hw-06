const btnChangeColor = document.querySelector('.change-color');// Знаходимо елемент button за допомогою class="change-color"
const body = document.querySelector('body'); // Знаходимо елемент body за допомогою назви тегу body
const typeColor = document.querySelector('.color'); // Знаходимо елемент span за допомогою class="color"

btnChangeColor.addEventListener('click', handlerChange); //Додаємо слухача подій на елемент button та передаємо в функцію обробник події

function handlerChange(evt) { // Сворюємо функцію що буде оброблювати події отримані від слухача 
  let colorRandom = `${getRandomHexColor()}`; // Задаємо значення  background в змінну звертаючись до функції getRandomHexColor 
  body.style.background = colorRandom; // Задаємо значення  background в стилі елементу body 
  typeColor.textContent = colorRandom; // Задаємо значення textContent в елементі span 
};

function getRandomHexColor() { // Функція що рандомно генерує код кольору в форматі HEX
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};