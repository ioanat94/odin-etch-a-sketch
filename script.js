createGrid(16);
draw();

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearGrid);

let gridSizeSlider = document.getElementById('grid-size');
let gridSize = gridSizeSlider.value;
gridSizeSlider.addEventListener('mouseup', resizeGrid);

function createGrid(gridSize) {
    let drawingBoard = document.getElementById('drawing-board');

    for (i = 0; i < gridSize * gridSize; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        let squareWidth = drawingBoard.offsetWidth / gridSize - 2;
        let squareHeight = drawingBoard.offsetHeight / gridSize - 2;
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareHeight}px`;
        drawingBoard.appendChild(square);
    }
}

function draw() {
    let squares = Array.from(document.getElementsByClassName('square'));
    squares.forEach((square) => {
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = `${document.getElementById('color').value}`;
        });
    });
}

function resizeGrid() {
    document.getElementById('grid-size-value').textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`
    gridSize = gridSizeSlider.value;
    let squares = Array.from(document.getElementsByClassName('square'));
    squares.forEach((square) => {
        square.remove();
    });

    createGrid(gridSize);
    draw();  
}

function clearGrid() {
    let squares = Array.from(document.getElementsByClassName('square'));

    squares.forEach((square) => {
        square.style.backgroundColor = '#eeedde';
    });
}