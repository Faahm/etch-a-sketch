const container = document.querySelector(".container");
function makeGrid(size) {
  const grids = document.querySelectorAll(".grid");
  const buttons = document.querySelectorAll(".btn");
  grids.forEach((grid) => {
    grid.remove();
  });
  buttons.forEach((button) => {
    button.classList.remove("button-toggle");
  });
  container.style.setProperty("--grid-rows", size);
  container.style.setProperty("--grid-cols", size);
  for (c = 0; c < size * size; c++) {
    let grid = document.createElement("div");
    grid.style.backgroundColor = "white";
    container.appendChild(grid).className = "grid";
  }
}
document.getElementById("black").addEventListener("click", colorBlack);
document.getElementById("grayscale").addEventListener("click", colorGrayscale);
document.getElementById("rainbow").addEventListener("click", colorRainbow);
document.getElementById("eraser").addEventListener("click", erase);

function colorBlack() {
  // make the button style change on click here
  const otherButtons = document.querySelectorAll(".btn");
  otherButtons.forEach((button) => {
    if (button.id != "black") {
      button.classList.remove("button-toggle");
    }
  });
  let button = document.getElementById("black");
  button.classList.toggle("button-toggle");
  //apply color
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
  });
}
function colorGrayscale() {
  // make the button style change on click here
  const otherButtons = document.querySelectorAll(".btn");
  otherButtons.forEach((button) => {
    if (button.id != "grayscale") {
      button.classList.remove("button-toggle");
    }
  });
  let button = document.getElementById("grayscale");
  button.classList.toggle("button-toggle");
  //apply color
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "#000";
      if (grid.style.opacity >= 0.1) {
        grid.style.opacity = Number(grid.style.opacity) + 0.1; // <-- HERE
      } else {
        grid.style.opacity = 0.1;
      }
    });
  });
}

function colorRainbow() {
  // make the button style change on click here
  const otherButtons = document.querySelectorAll(".btn");
  otherButtons.forEach((button) => {
    if (button.id != "rainbow") {
      button.classList.remove("button-toggle");
    }
  });
  let button = document.getElementById("rainbow");
  button.classList.toggle("button-toggle");
  //apply color
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      grid.style.backgroundColor = "#" + randomColor;
    });
  });
}

function erase() {
  // make the button style change on click here
  const otherButtons = document.querySelectorAll(".btn");
  otherButtons.forEach((button) => {
    if (button.id != "eraser") {
      button.classList.remove("button-toggle");
    }
  });
  let button = document.getElementById("eraser");
  button.classList.toggle("button-toggle");
  //erase
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "white";
    });
  });
}

var slider = document.getElementById("myRange");
var output = document.getElementById("grid-size");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  makeGrid(this.value);
};

makeGrid(16);
