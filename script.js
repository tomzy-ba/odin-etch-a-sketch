const gridContainer = document.querySelector("#grid-container");

for (let i = 1; i <= 256; i++) {
    let griditemx = document.createElement("div");
    griditemx.textContent ="x";
    griditemx.classList.add('griditemclass')

    gridContainer.append(griditemx);

}