const inptSymbols = document.querySelector('#validation-input'); // Отримую доступ до тега input через id="validation-input" 

inptSymbols.addEventListener('blur', handlerQuery); // Добавляємо прослуховувач на подію blur та передаємо результат в обробниhandlerQuery

function handlerQuery(evt) {

    if (evt.currentTarget.value.length === Number(inptSymbols.dataset.length)) // Якщо довжина введенного в інпут тексту відповідає довжині атрибуту input  data-length="6" 
    {
        inptSymbols.classList.add('valid'); // Додаємо class ='valid'
        inptSymbols.classList.remove('invalid'); // Видаляємо клас class ='invalid' на випадок того якщо був введений не вірно пароль і присвоєний class ='invalid'

    } else { 
        inptSymbols.classList.add('invalid');// Додаємо class ='invalid'
        inptSymbols.classList.remove('valid');// Видаляємо клас class ='valid' на випадок того якщо був введений вірний пароль і присвоєний class ='valid'

    };
};

