/*
    Author: Jacob Williams
    Project: TheOdinProject Etch A Sketch

    Code Credits (for help):
*/

// **************** Global Vars ****************************************

let gridSize = 16;
const DEFAULT_BGCOLOR = "FEFEFE";
// ********************** Main function area ***************************

createGrid(gridSize);

// *********************************************************************

// ************************ Functions **********************************

function createGrid(size) // this will be used in the creation of the tiles which have the listeners
{
    const container = document.getElementById("squares-container");

    for (let i = 0; i < size; i++)
    {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        console.log("row loop");

        for(let j = 0; j < size; j++) // size x size grid
        {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.style.backgroundColor = DEFAULT_BGCOLOR;
            row.appendChild(tile);
        }
    }
}