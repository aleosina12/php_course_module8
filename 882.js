const button = document.querySelector('button[type="submit"]');
const inputt = document.querySelector('input');

button.addEventListener('click', updateValue);

function updateValue(e) {
    event.preventDefault();
  alert ("Спасибо за нажатие на нашу замечательную кнопку. Значение вашего поля — " + inputt.value);
  };