const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients') // Знаходимо елемент до якого будемо додавати 


const element = ingredients.map((item) => { // Перебираємо масив елементів 
  const creat = document.createElement('li') // На кожній ітерації створюємо елемент li
  creat.textContent = item; // На кожній ітерації задаємо текстовий контент елементу
  return creat // Додаємо в масив element створений елемент
});

listEl.append(...element); //Розпилюємо елементи з масиву та приєднуємо до вибраного елементу listEl

