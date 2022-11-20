const container = document.querySelector('.container');
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let grid = document.createElement("div");
      container.appendChild(grid).className = "grid";
    };
    colorBlack()
  };

  function colorBlack() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = 'black';
    });
  });
  }

var slider = document.getElementById("myRange");
var output = document.getElementById("grid-size");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

  makeGrid(16, 16);