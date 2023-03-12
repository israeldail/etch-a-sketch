const wrapper = document.querySelector('.wrapper');
const clear = document.querySelector('.newGrid');

clear.style.background = "white"
clear.style.marginBottom = "15px"
clear.style.cursor = "pointer"

function makeGrid(screenSize) {
  for (let i = 0; i < screenSize * screenSize; i++) {
    let square = document.createElement('div');
    square.classList.add("square");
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

makeGrid(36);






