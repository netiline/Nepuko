var numbers = []; // Array to store random numbers
var calledNumbers = []; // Array to store called numbers
var lines = 0; // Number of bingo lines
var gameOver = false;

function startGame() {
    numbers = generateRandomNumbers(1, 50, 25);
    calledNumbers = [];
    lines = 0;
    gameOver = false;
    createBingoBoard();
}

function createBingoBoard() {
    var board = document.getElementById('bingo-board');
    board.innerHTML = '';

    for (var i = 0; i < 25; i++) {
        var cell = document.createElement('li');
        cell.className = 'bingo-cell';
        cell.textContent = numbers[i];
        cell.addEventListener('click', function() {
            if (!gameOver && !calledNumbers.includes(Number(this.textContent))) {
                calledNumbers.push(Number(this.textContent));
                this.classList.add('called-number');
                checkBingo();
            }
        });
        board.appendChild(cell);
    }
}
function generateRandomNumbers(min, max, count) {
    var numbers = [];
    while (numbers.length < count) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function checkBingo() {
    var cells = document.getElementsByClassName('bingo-cell');
    var rowNumbers = [];
    var colNumbers = [];
    var diagNumbers = [[], []];

    for (var i = 0; i < 5; i++) {
        var row = [];
        var col = [];
        for (var j = 0; j < 5; j++) {
            row.push(Number(cells[i * 5 + j].textContent));
            col.push(Number(cells[j * 5 + i].textContent));
        }
        rowNumbers.push(row);
        colNumbers.push(col);
        diagNumbers[0].push(Number(cells[i * 6].textContent));
        diagNumbers[1].push(Number(cells[i * 4 + 4].textContent));
    }
}

function checkLines(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i].every(num => calledNumbers.includes(num))) {
            lines++;
        }
    }
    return lines >= 5;
}

function callNumber() {
    if (!gameOver) {
        if (calledNumbers.length === 25) {
            alert('All numbers called! Game Over!');
            gameOver = true;
            return;
        }

        var randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * numbers.length);
        } while (calledNumbers.includes(numbers[randomIndex]));

        calledNumbers.push(numbers[randomIndex]);

        var cells = document.getElementsByClassName('bingo-cell');
        for (var i = 0; i < cells.length; i++) {
            if (Number(cells[i].textContent) === numbers[randomIndex]) {
                cells[i].classList.add('called-number');
                break;
            }
        }

        alert('Called Number: ' + numbers[randomIndex]);
        checkBingo();
    } else {
        alert('Game Over! Start a new game.');
    }
}

startGame();