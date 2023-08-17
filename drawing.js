/*
    Author: Jacob Williams
    Project: TheOdinProject Etch A Sketch

    Code Credits (for help):
*/

// **************** Global Vars ****************************************

let grid_size = 16;
let gridCreated = 1; // 1 means no grid, 0 means grid created

// ********************** Main function area ***************************


const tileArr = document.getElementsByClassName("tile");
const coloredArr = [];
const cursorArr = [];


if (gridCreated == 1) // create grid and array to see if tile has been entered
{
    createGrid();
    for (let i = 0; i < tileArr.length; i++)
    {
        coloredArr.push(false);
        cursorArr.push(false);
    }
}


for (let i = 0; i < tileArr.length; i++)
{

    Object.values(tileArr)[i].addEventListener("mouseenter", () => {
        cursorArr[i] = true; 
        if(Object.values(tileArr)[i].style.backgroundColor == "#FFFFFF")
        {
            coloredArr[i] = true;
            console.log("if state");
        }

        let color = getComputedStyle(Object.values(tileArr)[i], "backgroundColor");
        console.log(`black ${color}`)
    });

    Object.values(tileArr)[i].addEventListener("mouseleave", () => {
        cursorArr[i] = false;

        if (Object.values(tileArr)[i].style.backgroundColor === "#000000")
        {
            coloredArr[i] = false;
        }
        let color = getComputedStyle(Object.values(tileArr)[i], "backgroundColor");
        console.log(`white ${color}`);
    });

    if(cursorArr[i] && coloredArr[i] && Object.values(tileArr)[i].style.backgroundColor === "#FFFFFF")
    {
        Object.values(tileArr)[i].style.backgroundColor = "black";
    }

    if(cursorArr[i] && !coloredArr[i] && Object.values(tileArr)[i].style.backgroundColor === "#000000")
    {
        Object.values(tileArr)[i].style.backgroundColor = "white";
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
        rows.className = "row";
        container.appendChild(rows);
        for (let i = 0; i < grid_size; i++)
        {
            const tile = document.createElement("div");
            tile.className = "tile";
            rows.appendChild(tile);
        }
    }
}