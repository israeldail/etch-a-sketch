const wrapper = document.querySelector('.wrapper');
const clear = document.querySelector('.newGrid');

clear.style.background = "white"
clear.style.marginBottom = "15px"
clear.style.cursor = "pointer"

clear.addEventListener('click', () => {
  reset()
})

function reset() {
  let number = prompt("Enter a number to resize. 1-100");
  let parsed = parseInt(number);
  wrapper.style.gridTemplateColumns = `repeat(${parsed}, 1fr)`;
  wrapper.style.gridTemplateRows = `repeat(${parsed}, 1fr)`;
  makeGrid(parsed);
}

function makeGrid(screenSize) {
  for (let i = 0; i < screenSize * screenSize; i++) {
    let square = document.createElement('div');
    square.style.background = "white"
    wrapper.appendChild(square);

    //change background color of a square on hover
    square.addEventListener('mouseover', e => {
      square.style.backgroundColor = "black";
    })


    //function to reset the grid
    function clearGrid() {
      clear.addEventListener('click', e => {
        square.style.backgroundColor = "white"
      })
    }
    clearGrid();
  }
  wrapper.style.gridTemplateColumns = `repeat(${screenSize}, 1fr)`;
  wrapper.style.gridTemplateRows = `repeat(${screenSize}, 1fr)`;

}

makeGrid(16);






