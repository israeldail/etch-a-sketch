const wrapper = document.querySelector('.wrapper');

function createTable() {
  for (let i = 0; i < 192; i += 1) {
    const createDiv = document.createElement('div');
    wrapper.appendChild(createDiv);
  }
}

createTable();