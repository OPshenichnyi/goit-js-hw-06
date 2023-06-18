const greatBtn = document.querySelector('[data-create]');  // Отримуємо доступ до тегу button через дата атрибуту data-create
const removBtn = document.querySelector('[data-destroy]'); // Отримуємо доступ до тегу button через дата атрибуту data-destroy

const numGreatEl = document.querySelector('#controls > input'); // Отримуємо доступ до тегу input через id="controls" батківського div 
const divEl = document.querySelector('#boxes') // Отримуємо доступ до тегу div через id="boxes" 

greatBtn.addEventListener('click', (evt) => { // Встановлюємо прослуховувач на кнопку створення та створюємо функцію 
  destroyBoxes() // Викликаємо функцію destroyBoxes котра очищає список елементів на випадок якщо вони були там створенні
  createBoxes(numGreatEl.value) // Потім викликаємо функцію createBoxes Що створює та додає елементи 
});

removBtn.addEventListener('click', destroyBoxes); // Викликаємо функцію destroyBoxes котра очищає список елементів 


function createBoxes(amount) { // Функція що створює теги дів і задає їм рандомний колір 
  let str = ''; // Змінна в яку на етапі ітерації буде додаватись код у вигляді рядка
  let size = 20; // Змінна в яку на етапі ітерації буде додаватись розмір для стилю size
  for (let i = 1; i <= amount; i += 1){ // Створюємо цикл for в який буде переданно значення numGreatEl під час виклику функції 
    size += 10; // На кожному циклі ітерації додаємо + 10 до лічильника size
    str += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`; // Додаємо рядок в змінну str
  }
  divEl.insertAdjacentHTML('afterbegin', str); // За допомогою методу insertAdjacentHTML додаємо елементи в середину тега div
}

function destroyBoxes() { // Функція очищує батьківський елемент 
  return divEl.innerHTML = ''; // відправляємо за допомогою метода innerHTML порожній рядок тим самим видаляємо дочірні елементи в div
};

function getRandomHexColor() { // Функція рандомного вибору коду кольору 
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};











