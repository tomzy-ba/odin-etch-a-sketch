const gridContainer = document.querySelector("#grid-container");

let changeSizeButton = document.querySelector("#changesizebutton");
changeSizeButton.addEventListener("click",() => gridChangeSize())

function gridChangeSize() {
    prompt("hello")
}


function gridMaker() {
for (let i = 1; i <= 256; i++) {
    let griditemx = document.createElement("div");
    griditemx.classList.add('griditemclass');

    gridContainer.append(griditemx);

}
}
gridMaker()
