/*
    Author: Jacob Williams
    Project: TheOdinProject Etch A Sketch

    Code Credits (for help): Lines 14, 17, and 18 were adapted from michalosman's code
*/

// **************** Global Vars ****************************************

let gridSize = 20;
const GRID_HEIGHT = 720;
const DEFAULT_BGCOLOR = "#FEFEFE";
let eraserOn = false;
let click = false;
const docBody = document.querySelector("body");
// ********************** Main function area ***************************

document.body.onmousedown = () => {click = true;}
document.body.onmouseup = () => {click = false;}

createGrid(gridSize);
eraserButtonCreator();
createNewGrid();

// *********************************************************************

// ************************ Functions **********************************

function createGrid(size) // this will be used in the creation of the tiles which have the listeners
{
    const container = document.getElementById("squares-container");
    container.style.height = `${(gridSize * 2) + GRID_HEIGHT}px`;
    let tileCounter = 0;

    for (let i = 0; i < size; i++)
    {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        // console.log("row loop");

        for(let j = 0; j < size; j++) // size x size grid
        {
            const tile = document.createElement("div");
            tile.classList.add(`tile${tileCounter}`);
            tile.style.backgroundColor = DEFAULT_BGCOLOR;
            tile.style.height = `${GRID_HEIGHT/gridSize}px`;
            tile.style.flex = 1;
            tile.style.flexBasis = "auto";
            tile.style.border = "1px solid black";

            tile.addEventListener("mouseover", changeColor)
            tile.addEventListener("mousedown", changeColor);

            row.appendChild(tile);

            tileCounter++;
        }
    }
}

function eraserButtonCreator()
{
    const ersBtn = document.getElementById("eraser");
    ersBtn.addEventListener("click", turnOnEraser);
}

function changeColor(e)
{
    if(e.type === "mouseover" && !click)
        return;

    if(!eraserOn)
    {
        e.target.style.backgroundColor = "black";
    }

    if(eraserOn)
    {
        e.target.style.backgroundColor = DEFAULT_BGCOLOR;
    }
    //console.log(e.type);
}

function turnOnEraser(e)
{
    //console.log(e.type);
    if (!eraserOn)
    {
        const ersBtn = document.getElementById("eraser");
        eraserOn = true;
        ersBtn.style.backgroundColor = "yellow";
    }
    else
    {
        const ersBtn = document.getElementById("eraser");
        eraserOn = false;
        ersBtn.style.backgroundColor = "lightgray";
    }
    //console.log(eraserOn);
}

function createNewGrid()
{
    const newGridBtn = document.getElementById("grid-size");
    newGridBtn.addEventListener("click", (e) => {
        let temp_size = +prompt("Please enter a new grid size between 1 and 64");
        if (temp_size < 1 && temp_size > 64)
        {
            temp_size = +prompt("Invalid number, please enter a new grid size between 1 and 64");
        }

        gridSize = temp_size;

        const oldGrid = document.getElementById("squares-container");
        oldGrid.remove();

        const newGrid = document.createElement("div");
        newGrid.setAttribute("id", "squares-container");
        docBody.appendChild(newGrid);

        createGrid(gridSize);
    });
}