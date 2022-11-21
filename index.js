const container = document.querySelector('.container');
function makeGrid(size) {
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    grid.remove();
  });
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  for (c = 0; c < (size * size); c++) {
    let grid = document.createElement("div");
    container.appendChild(grid).className = "grid";
  };
  document.getElementById("black").addEventListener("click", colorBlack);
  };
  
function colorBlack() {
  // make the button style change on click here
  let button = document.getElementById("black");
  button.classList.toggle("button-toggle");
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
  makeGrid(this.value);
}

  makeGrid(16);