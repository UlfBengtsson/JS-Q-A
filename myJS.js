//------ global varibles ----------------------------------------------------------------------------------
const myBoard = document.getElementById("board");
const boardWidth = 600;
const boardHeight = 300;

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
    newBox.classList.add("box");
    newBox.style.backgroundColor = colorOfBox;
    myBoard.appendChild(newBox);
}



//------ run code lines -----------------------------------------------------------------------------------

document.getElementsByTagName("body")[0].style.backgroundColor = "gray";

initBoard();
//makeBoxOnBoard("blue"); test passed