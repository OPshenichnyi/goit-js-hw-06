const buttonDecrement = document.querySelector('#counter button[data-action="decrement"]'); // Підключаємо за допомогою ід та атрибуту button мінус

const buttonIncrement = document.querySelector('#counter button[data-action="increment"]'); // Підключаємо за допомогою ід та атрибуту button плюс

const spanCounter = document.querySelector('#value'); // Підключаємо за допомогою ід тег span

let count = 0; // Cтворюємо змінну count куди помістимо результат підрахунку 

buttonDecrement.addEventListener('click', sub); // Добавляємо слухача події click на buttonDecrement та викликаємо функцію sub

function sub() {
    count = count - 1; // При виклику функції робимо віднімання 1 від змінної count
    spanCounter.textContent = count; // Відправляємо результат в тег span
};

buttonIncrement.addEventListener('click', add); // Добавляємо слухача події click на buttonIncrement та викликаємо функцію add

function add() { 
    count = count + 1; // При виклику функції робимо додавання 1 до змінної count
    spanCounter.textContent = count; // Відправляємо результат в тег span
};
