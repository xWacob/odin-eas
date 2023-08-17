/*
    Author: Jacob Williams
    Project: TheOdinProject Etch A Sketch

    Code Credits (for help):
*/

// **************** Global Vars ****************************************

let grid_size = 16;
let gridCreated = 1; // 1 means no grid, 0 means grid created

// ********************** Main function area ***************************


const tileArr = [];
const rowsArr = [];
const coloredArr = [];
const cursorArr = [];
const tileColor = [];


if (gridCreated == 1) // create grid and array to see if tile has been entered
{
    let currTile;
    createGrid();

    for (let i = 0; i < grid_size; i++)
    {
        rowsArr.push(i);
    }

    for (let i = 0; i < grid_size; i++)
    {
        for (let j = 0; j < grid_size; j++)
        {
            coloredArr.push(false);
            tileColor.push("white");
            cursorArr.push(false);
            currTile = document.querySelector(`.tile${j}`);
            tileArr.push(j);
            console.log(tileArr[j]);
        }
    }
}


for (let i = 0; i < tileArr.size; i++)
{
    for (let j = 0; j < tileArr.size; j++)
    {
        if(rowsArr[i] == i)
        {
            tileArr[j].addEventListener("mouseenter", () => {
                cursorArr[j] = true; 
                if(tileColor == "white")
                {
                    coloredArr[i] = true;
                    console.log("if state");
                }
                let color = getComputedStyle(tileArr[i], "backgroundColor");
                console.log(`black ${color}`)
            });
        
            tileArr[i].addEventListener("mouseleave", () => {
                cursorArr[i] = false;
        
                if (tileArr[i].style.backgroundColor === "#000000")
                {
                    coloredArr[i] = false;
                }
                let color = getComputedStyle(tileArr[i], "backgroundColor");
                console.log(`white ${color}`);
            });
        
            if(cursorArr[i] && coloredArr[i] == "white")
            {
                tileArr[i].style.backgroundColor = "black";
                coloredArr[i] = "black";
            }
        
            if(cursorArr[i] && coloredArr[i] == "black")
            {
                tileArr[i].style.backgroundColor = "white";
            }
        }
    }
       
}


// *********************************************************************

// ************************ Functions **********************************

function createGrid()
{
    const container = document.getElementById("squares-container");
    for (let i = 0; i < grid_size; i++)
    {
        const rows = document.createElement("div");
        rows.className = `row${i}`;
        rows.style.display = "flex";
        container.appendChild(rows);
        for (let j = 0; j < grid_size; j++)
        {
            const tile = document.createElement("div");
            tile.style.backgroundColor = "white";
            tile.style.width ="25px"
            tile.style.height = "25px";
            tile.style.border = "solid black";
            tile.className = `tile${j}`;
            rows.appendChild(tile);
        }
    }
}