const allListEl = document.querySelector('#categories') // Знаходжу елемент за допомогою ID

const listEl = allListEl.children // Отримую псевдомасив дочірніх вузлів-елементів 
console.log('Number of categories:', listEl.length); // Виводжу в консоль кількість елементів псевдомасиву

const list = [...listEl].forEach((element) => { // Розпилю псевдо масив та перебираю його  
    [...element.children].forEach((element) => { // Розпилю повторно отриманий псевдо масив для того щоб отримати доступ до його вкладених елементів
        if (element.tagName === "H2") { // Якщо тег відпоповідає тегу Н2 
            console.log('Category:', element.textContent); // Виводжу в консоль textContent
        } if (element.tagName === "UL") { // Якщо тег відпоповідає тегу UL
            console.log('Elements:', element.children.length) // Виводжу в консоль кількість вкладених його елементів
        }
    });
});

