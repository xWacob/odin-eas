/*
    Author: Jacob Williams
    Project: TheOdinProject Etch A Sketch

    Code Credits (for help):
*/

// **************** Global Vars ****************************************

let grid_size = 16;

// ********************** Main function area ***************************

createGrid();
const tileArr = document.getElementsByClassName("tile");
for (let i = 0; i < tileArr.length; i++)
{
    Object.values(tileArr)[i].addEventListener("mouseenter", e => {
        Object.values(tileArr)[i].style.backgroundColor = "black";
    })
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