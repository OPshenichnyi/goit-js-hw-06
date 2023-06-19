const inputName = document.querySelector('#name-input'); // Отримуємо доступ до елементу input за допомогою id 
const userName = document.querySelector('#name-output') // Отримуємо доступ до елементу span за допомогою id 

inputName.addEventListener('input', handlerQuery); // Встановлюємо прослуховувач події на inputName та передаємо результи функцію handlerQuery

function handlerQuery(evt) { 
    if (!evt.currentTarget.value.trim()) { // Умова if перевіряє якщо в інпут нічого не введенно то буде виведенно значення за замовчуванням метод trim() прибирає пробіли 
        userName.textContent = 'Anonymous'; //Передаємо в тег span значення за замовчуванням
    } else {
    userName.textContent = evt.currentTarget.value; // В іншому випадку присвоюємо тегу span значення що було введенно в input
    };
};