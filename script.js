const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i <= 256; i++) {
    let griditemx = document.createElement("div");
    griditemx.textContent = i + "";
    gridContainer.append(griditemx);

}