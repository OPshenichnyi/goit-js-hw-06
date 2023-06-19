const formEl = document.querySelector('.login-form') // Отримуємо доступ до елементу form за допомогою class="login-form"

formEl.addEventListener('submit', handlerSubmit); //Додаємо слухача подій на елемент form та відправляємо в функцію оброблювач подій handlerSubmit

const user = { // Створюємо обєкт куди будуть записанні данні з що введе користувач 
};

function handlerSubmit(evt) {
    evt.preventDefault(); //Скасовуємо дії браузера за замовчуванням
    const {
        elements: { email, password }  // Виконуємо деструктуризацію за допомогою властивості elements
    } = evt.currentTarget;
    if (!email.value.length || !password.value.length) { // В умові if виконуємо перевірку чи відбувся ввід в поля інпут
        alert('Увага всі поля повинні бути заповнені !!!') // В разі якщо нічого не введенно в одне з полів виведемо попередження в alert
    } else {
        user.email = `${email.value}`; // Створюємо ключ email: та присвоюємо йому значення email.value в обекті user
        user.password = `${password.value}`; // Створюємо ключ password: та присвоюємо йому значення password.value в обекті user
        console.log(user); // Виводимо в консоль лог обєкт user
        formEl.reset() // Очищуємо поля вводу input методом reset
    };
}
