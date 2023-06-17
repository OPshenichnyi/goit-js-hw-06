const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery') // Отримуємо доступ тегу ul через class="gallery"


const markup = images.map((image) => `<li class='image'><img src="${image.url}" alt="${image.alt} width="200" height="200""></li>`).join('');
// Ітеруєммо масив обєктів за допомогою функції map підставляючи атрибути url та alt та обєдмуємо їх в рядок за допомогою метода join
//! Додатково задав ширину та висоту картинкам 

listEl.insertAdjacentHTML('beforeend', markup); // Додаємо наш рядок з атрибутами HTML за допомогою метода insertAdjacentHTML 