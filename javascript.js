function createNewGrid(){
    let num = prompt("Please enter the number of squares per side for the new grid (1 - 100).");

    if (num > 100){
        createNewGrid();
    }

    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

    createGridSquares(Number(num));

    squareDimension = 672 / Number(num);

    const squares = document.querySelectorAll("div.gridSquare");

    squares.forEach(element => {
        element.style.width = squareDimension - 2 + "px";
        element.style.height = squareDimension - 2 + "px";
    })
}

function generateRandomRGBValue(){
    return Math.random() * 255;
}

function createGridSquares(num){
    for (let i = 0; i < num; i++){
        for (let j = 0; j < num; j++){
            const square = document.createElement("div");
            square.classList.add("gridSquare");
            square.addEventListener('mouseenter', function(){
                square.style.backgroundColor = `rgb(${generateRandomRGBValue()} ${generateRandomRGBValue()} ${generateRandomRGBValue()})`;
                square.style.opacity = Number(square.style.opacity) + 0.1;
            })
            gridContainer.appendChild(square);
        }
    }
}

const gridContainer = document.getElementById("gridContainer");
createGridSquares(16);

const createGridBtn = document.getElementById("createBtn");
createGridBtn.addEventListener("click", createNewGrid);

const clearGridBtn = document.getElementById("clearBtn");
clearGridBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll("div.gridSquare");

    squares.forEach(element => {
        element.style.backgroundColor = "initial";
    })
});