'use strict';

const grid = document.querySelector(".grid");

function createGrid(x, y) {
    for(let i = 0; i < x; i++) {
        const row  = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for(let i = 0; i < y; i++) {
            const div = document.createElement("div");
            div.classList.add('square');
            div.style.width = `${500/x}px`;
            div.style.height = `${500/y}px`;
            // div.style.border = "solid 1px";
            div.style.backgroundColor = "white";
            row.appendChild(div);
    
        }
    }
};

createGrid(16, 16);


let square = document.querySelectorAll(".square");
let row = document.querySelectorAll(".row");
// change color when hovering square
function hoverSquare(square) {
    square.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = `${randomColor()}`;
        });
    });
};

hoverSquare(square);


// clear grid after clicking clear button
const clearGrid = document.querySelector(".clear");
clearGrid.addEventListener("click", () => {
    // create new row variable so it doesnt focus the old ones
    let row = document.querySelectorAll(".row");
    row.forEach(element => {
        element.remove();
    });
    let input = prompt("Enter number of squares per side for the new grid(max 100)");
    while(input > 100) {
        input = prompt("Max is 100! Enter again");
    }
    createGrid(input, input);
    //create new square variable so it doesnt focus the old ones
    let square = document.querySelectorAll(".square");
    hoverSquare(square);
});


function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}













