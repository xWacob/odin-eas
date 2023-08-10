/*
    Author: Jacob Williams
    Project: TheOdinProject Etch A Sketch

    Code Credits (for help):
*/

// **************** Global Vars ****************************************

let grid_size = 4;

// ********************** Main function area ***************************

createGrid();

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

function changeToBlack()
{

}