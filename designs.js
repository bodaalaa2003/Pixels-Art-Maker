// Select colorinput and assigning it to the color that user chooses
var color = document.getElementById('colorPicker');


var form = document.getElementById('sizePicker');

// A function for making a grid that user makes by submitting height and width
function makeGrid() {
    var table = document.getElementById('pixelCanvas');
    //assigning the height and width to the inputs pf height and width so user can change the size as he wishes
    height = document.getElementById('inputHeight').value;
    width = document.getElementById('inputWidth').value;
    table.innerHTML = "";
    //a nested loop so I can can iterate over all cells in the grid
    for (var rows = 1; rows <= height; rows++) {
        var theRow = document.createElement('tr');
        for (var columns = 1; columns <= width; columns++) {
            var theColumn = document.createElement('td');
            theRow.appendChild(theColumn);

        };
        table.appendChild(theRow)
    };
};
/*
a function to color the cell and an another loop so we can add an event listener to every cell of the grid so when user
clicks on it it takes the value of chosen color
Here also we assign the color of a cell to the color chosen
*/
function colorTheCell() {
    var cell = document.getElementsByTagName('td');
    for (var x = 0; x < cell.length; x++) {
        cell[x].addEventListener("click", function(click) {
            var square = click.target;
            square.style.backgroundColor = color.value;
        });
    };
};
/*
calling functions so when user clicks submit the grid will be made
here also I add an eventlistener to the form so when user clicks submit the grid of sizes he chose will be made 
*/
form.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
    colorTheCell();
});
//end of project