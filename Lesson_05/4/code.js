//4. Сделайте несколько карточек товара.
//При нажатии на кнопку «Подробнее» вместо картинки должен появляться текст с описанием товара.

'use strict';

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        showDescription(event)
    })
})

function showDescription(event) {
    const parent = event.target.parentNode;
    const description = parent.querySelector('.description');
    const img = parent.querySelector('img');
    const button = parent.querySelector('button')

    if (button.innerText === 'Description') {
        description.style.display = 'block';
        img.style.display = 'none';
        button.innerText = 'Cansel'
    } else if (button.innerText === 'Cansel') {
        description.style.display = 'none';
        img.style.display = 'block';
        button.innerText = 'Description';
    }
}
