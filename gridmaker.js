
const gridContainer = document.querySelector(".container");
const setGridSizeButton = document.querySelector("button");

function gridSizeButtonListener() {
setGridSizeButton.addEventListener("click", function() {
    let userGridSize = prompt("Enter a grid size: ");
    userGridSize = Number(userGridSize);
    if (Number.isInteger(userGridSize)) {
        newGrid = createGrid(userGridSize);
        oldGrid = document.querySelector(".grid");
        oldGrid.replaceWith(newGrid);
    }
    else {
        alert("Please enter an integer from 0-100.");
    }
});
}



function createGrid(cellCount) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.setProperty("grid-template-columns", `repeat(${cellCount}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${cellCount}, 1fr)`);
    for (let i = 0; i < cellCount*cellCount; i++) {
        const cell = createCell();
        grid.appendChild(cell);
    }
    return grid;
}

function createCell() {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", function() {
        cell.classList.add("mouseover");
    });
    return cell;
}


myGrid = createGrid(4);
gridContainer.appendChild(myGrid);
gridSizeButtonListener();
