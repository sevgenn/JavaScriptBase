'use strict';

// 1. получить объект модального окна с классом .wrap
let wrap = document.querySelector(".wrap");
console.log(wrap);

// 2. получить тег span, используемый для закрытия окна
let spanHide = document.getElementById('spanHide');
console.log(spanHide);
// id добавил для разнообразия, чтобы обратиться другим способом


// 3. получить кнопку, используемую для показа модального окна
let btn = document.querySelector('button');
console.log(btn);

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
btn.addEventListener('click', hideShow);

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
spanHide.addEventListener('click', hideShow);

function hideShow() {
    if (wrap.classList) {
        wrap.classList.toggle('hidden');
    }
}
