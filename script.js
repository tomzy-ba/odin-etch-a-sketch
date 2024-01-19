const gridContainer = document.querySelector("#grid-container");

let changeSizeButton = document.querySelector("#changesizebutton");
changeSizeButton.addEventListener("click",() => gridChangeSize())

function gridChangeSize() {
    gridMaker(prompt("enter the number"))
}


function gridMaker(gridSize) {
    gridSize = gridSize * gridSize;
    gridContainer.innerHTML = "";
    gridContainer.style.width = gridSize + "px";
    gridContainer.style.height = gridSize + "px";
for (let i = 1; i <= gridSize; i++) {
    let griditemx = document.createElement("div");
    griditemx.textContent =""
    griditemx.classList.add('griditemclass');

    gridContainer.append(griditemx);

}
}
gridMaker(16)
