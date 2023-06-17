const rangeInput = document.querySelector('#font-size-control'); // Отримую доступ до тега input через id="font-size-control" 
const txtOutput = document.querySelector('#text'); // Отримую доступ до тега span через id="text" 

rangeInput.addEventListener('input', handlerRange); // Добавляємо прослуховувач на подію input та передаємо результат в обробник handlerRange

function handlerRange(evt) {
    txtOutput.style.fontSize = `${evt.target.value}px` //Передаємо в style.fontSize  значення повзунка evt.target.value 
}

