const gridContainer = document.querySelector("#grid-container");

const changeSizeButton = document.querySelector("#changesizebutton");
changeSizeButton.addEventListener("click",() => {
    gridContainer.innerHTML = "";
    gridMaker(prompt("how big"));
})

const changeColorButton = document.querySelector("#changecolorbutton");


/* this function takes gridsize and makes creates gridSize** amount of divs,
then sets width and height to gridSize, then appends them to gridContainer */
function gridMaker (gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement("div");
        pixel.style.height = 800/gridSize + "px" ;
        pixel.style.width = 800/gridSize + "px" ;
        pixel.classList.add("pixels");        
        gridContainer.append(pixel);

        pixel.addEventListener("mousedown", () => {
            pixel.style.backgroundColor = randoBrushColor;
        })
    }
}
gridMaker(16);

let randoBrushColor = "black"
changeColorButton.addEventListener("click", () => {
    randoBrushColor = "#" + Math.floor(Math.random() *1000000) + "";
})

// random color generator
function randomColorGen() {
    return "#" + Math.floor(Math.random() *1000000) + "";
}