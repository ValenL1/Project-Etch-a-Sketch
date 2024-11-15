const container = document.querySelector("#container")
const hoveringColour = function (e) {
  e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

const resize = function (e) {
    let size;
  
    while (true) {
      size = parseInt(prompt("Number of squares per side (Max. 100)."));
      if (size >= 1 && size <= 100) break;
      alert("Number of squares per side (Max. 100).");
    }
  
    container.innerHTML = "";
  
    for (let i = 1; i <= size; i++) {
        let squareline = document.createElement("div");
        squareline.id = "squareline";
        container.appendChild(squareline);
        for (let e = 1; e <= size; e++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", hoveringColour);
            squareline.appendChild(square);
        }   
    }
  }

const btncontainer = document.querySelector("#btncontainer");
btncontainer.addEventListener("click", resize);
