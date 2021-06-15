function colorPallete() {
  const divColorPalette = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const createPalette = document.createElement('div');
    createPalette.className = 'color';
    divColorPalette.appendChild(createPalette);
  }
}
colorPallete();
const color1 = document.querySelectorAll('.color')[0];
const color2 = document.querySelectorAll('.color')[1];
const color3 = document.querySelectorAll('.color')[2];
const color4 = document.querySelectorAll('.color')[3];
// const color5 = document.querySelectorAll('.color')[4];

color1.style.background = 'black';
color1.className = 'color selected';
color2.style.background = 'blue';
color3.style.background = 'yellow';
color4.style.background = 'green';
// color5.style.background = 'white';

function oneSelected(event) {
  const selectedElement = document.querySelector('.selected');
  window.onload = color1;
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

const divPixelBoard = document.querySelector('#pixel-board');

divPixelBoard.addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  const color = getComputedStyle(selected).background;
  const evento = event;
  evento.target.style.background = color;
});

color1.addEventListener('click', oneSelected);
color2.addEventListener('click', oneSelected);
color3.addEventListener('click', oneSelected);
color4.addEventListener('click', oneSelected);
// color5.addEventListener('click', oneSelected);

function pixelBoard() {
  for (let index = 0; index < 25; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    divPixelBoard.appendChild(createPixel);
  }
}

function createButtonReset(buttoName) {
  const buttonContainer = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  const buttonNewID = 'clear-board';

  newButton.innerHTML = buttoName;
  newButton.id = buttonNewID;
  buttonContainer.appendChild(newButton);
}

function resetPallet() {
  const getButtonReset = document.querySelector('.buttons-container');
  getButtonReset.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

resetPallet();
createButtonReset('Limpar');
pixelBoard();

// (X)
//  resetPallet);
// const getPixels = getComputedStyle(getButtonReset).reset();
// getPixels.addEventListener('onclick', resetPallet);
