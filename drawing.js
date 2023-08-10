/*
    Author: Jacob Williams
    Project: TheOdinProject Etch A Sketch

    Code Credits (for help):
*/

// **************** Global Vars ****************************************

let grid_size = 4;

// ********************** Main function area ***************************

createGrid();
document.getElementsByClassName("tile").addEventListener("onmouseover", changeToBlack());
document.getElementsByClassName("tile").addEventListener("onmouseover", changeToWhite());

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

// changes the tiles to black when hovered over
function changeToBlack()
{

}

// changes the tiles to white when hovered over
function changeToWhite()
{

}