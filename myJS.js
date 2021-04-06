//------ global varibles ----------------------------------------------------------------------------------
const myBoard = document.getElementById("board");
const boardWidth = 600;
const boardHeight = 300;
const luckyNumber = 5;
var idCounter = 0;

//------ functions ----------------------------------------------------------------------------------------

function initBoard() {
    var blackBoxBool = true;

    for (let boxTotalHeight = 0; boxTotalHeight < boardHeight; boxTotalHeight = boxTotalHeight + 50) {
        for (let boxTotalWidth = 0; boxTotalWidth < boardWidth; boxTotalWidth = boxTotalWidth + 50) {

            if (blackBoxBool) {
                makeBoxOnBoard("black");
            }
            else {
                makeBoxOnBoard("white");
            }

            blackBoxBool = !blackBoxBool;
        }

        blackBoxBool = !blackBoxBool;
    }
}

function makeBoxOnBoard(colorOfBox) {
    var newBox = document.createElement("div");

    newBox.id = ++idCounter;

    newBox.classList.add("box");
    newBox.classList.add(colorOfBox + "Box");

    myBoard.appendChild(newBox);

    if (idCounter === luckyNumber) {
        newBox.classList.add("player");
    }
}

function move(offsetPos) {
    var playerElement = document.getElementsByClassName("player")[0];
    var playerNextElementId = Number(playerElement.id) + Number(offsetPos);
    var playerNextBox = document.getElementById(playerNextElementId);
    console.log(playerNextBox);

    if (playerNextElementId !== 0 && playerNextElementId <= idCounter) {
        playerElement.classList.toggle("player");
        playerNextBox.classList.toggle("player");
    }


}


//------ run code lines -----------------------------------------------------------------------------------

document.getElementsByTagName("body")[0].style.backgroundColor = "gray";

initBoard();
//makeBoxOnBoard("blue"); test passed