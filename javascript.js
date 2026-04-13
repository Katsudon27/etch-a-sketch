const gridContainer = document.getElementById("gridContainer");

for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        square = document.createElement("div");
        square.classList.add("gridSquare");
        gridContainer.appendChild(square);
    }
}