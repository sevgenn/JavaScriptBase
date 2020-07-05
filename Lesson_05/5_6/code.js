// 5. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

'use strict';

function createChessBoard() {
    const field = document.querySelector('.field');

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            // расставляем цифры
            if (j == 0 && (0 < i && i < 9) || j == 9 && (0 < i && i < 9)) {
                cell.innerText = Math.abs(i - 9);
            }
            // расставляем буквы
            const letters = 'abcdefgh'
            if (i == 0 && (0 < j && j < 9) || i == 9 && (0 < j && j < 9)) {
                cell.innerText = letters.charAt(j - 1);
            }
            //меняем цвет и определяем игровые клетки для расстановки фигур
            if ((j != 0 && j != 9) && (i != 0 && i != 9)) {
                if ((j % 2) && !(i % 2) || !(j % 2) && (i % 2)) {
                    cell.style.backgroundColor = '#fff173';
                    cell.classList.add('game');
                } else {
                    cell.style.backgroundColor = '#824708';
                    cell.classList.add('game');
                }
            }
            field.appendChild(cell);
            cell.style.width = '50px';
            cell.style.textAlign = 'center';
            cell.style.lineHeight = '50px';
            // cell.style.outline = '1px solid black';
            cell.style.fontFamily = 'san-serif';
        }
    }
}

// Не понял, почему код типа     cell.innerHTML = `&#x2655;`
// корректно срабатывает только в обратных кавычках

createChessBoard();

const startCells = document.querySelectorAll('.game');

const figuresWhite = ['&#x2656;', '&#x2658;', '&#x2657;', '&#x2655;', '&#x2654;', '&#x2657;', '&#x2658;', '&#x2656;'];
const figuresBlack = ['&#x265c;', '&#x265e;', '&#x265d;', '&#x265b;', '&#x265a;', '&#x265d;', '&#x265e;', '&#x265c;'];
const pawns = ['&#x2659;', '&#x265f;'];

startCells.forEach(function (cell) {
    for (let i=0; i<64; i++) {
        startCells[i].style.fontSize = '1.3em';
        if (7<i && i<16) {
            startCells[i].innerHTML = pawns[1];
        }
        if (47<i && i<56) {
            startCells[i].innerHTML = pawns[0];
        }
        if (0<=i && i<=7) {
            startCells[i].innerHTML = figuresBlack[i];
        }
        if (56<=i && i<=64) {
            startCells[i].innerHTML = figuresWhite[i-56];
        }
    }

})

