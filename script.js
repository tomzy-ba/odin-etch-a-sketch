const gridContainer = document.querySelector("#grid-container");

let changeSizeButton = document.querySelector("#changesizebutton");
changeSizeButton.addEventListener("click",() => gridSizeChanger())

function gridSizeChanger() {
    gridContainer.innerHTML = "";
    gridMaker(prompt("how big"));
}

/* this function takes gridsize and makes creates gridSize** amount of divs,
then sets width and height to gridSize, then appends them to gridContainer */
function gridMaker (gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement("div");
        pixel.style.height = 800/gridSize + "px" ;
        pixel.style.width = 800/gridSize + "px" ;
        pixel.classList.add("pixels");
        gridContainer.append(pixel);
    }
}
gridMaker(16)


