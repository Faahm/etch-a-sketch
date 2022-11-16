const container = document.querySelector('.container');
for(let i = 0; i < 16; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    console.log(grid);
    container.appendChild(grid);
}