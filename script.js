// Create grid squares
let htmlStyle = window.getComputedStyle(document.querySelector('html'));
let gridSize = parseInt(htmlStyle.getPropertyValue('--columnNum'));
let container = document.querySelector('.container');
function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    //square.style.backgroundColor = 'gray';
    container.appendChild(square);
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'black';
    });
  }
}
createGrid();

// Create grid reset button
function gridPrompt() {
  let childSquare = container.firstChild;
  while (childSquare) {
    container.removeChild(childSquare);
    childSquare = container.firstChild;
  }
  let gridSizeInput = prompt('How many squares per side would you like?');
  if (gridSizeInput == null || gridSizeInput < 1) {
    gridPrompt();
  }
  gridSize = Number(gridSizeInput);
  document.documentElement.style.setProperty('--columnNum', gridSize);
  createGrid();
}
let resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', gridPrompt);