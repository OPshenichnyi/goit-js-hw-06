const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients') // Знаходимо елемент до якого будемо додавати 

for (const item of ingredients) { // Перебираємо масив елементів 
  const lastItem = document.createElement('li') // На кожній ітерації створюємо елемент li
  lastItem.textContent = item; // На кожній ітерації задаємо текстовий контент елементу
  listEl.append(lastItem); // На кожній ітерації приєднуємо елемент із значенням до вибраного елементу 
}
