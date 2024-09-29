let size = 16;

const div = document.createElement("div");
div.id = "container";
document.body.appendChild(div);
div.setAttribute(
  "style",
  "display: flex; flex-direction: column; align-items: center; justify-content: center;"
);

const btnContainer = document.createElement("div");
btnContainer.id = "btnContainer";
btnContainer.style.display = "flex";
btnContainer.style.flexDirection = "row";
btnContainer.style.justifyContent = "center";
btnContainer.style.alignItems = "center";

document.body.appendChild(btnContainer);

const clear = document.createElement("button");
clear.textContent = "Clear";
clear.style.margin = "20px";
clear.style.padding = "10px";
clear.style.backgroundColor = "blue";
clear.style.color = "white";

const inputbtn = document.createElement("button");
inputbtn.textContent = "Size";
inputbtn.style.margin = "20px";
inputbtn.style.padding = "10px";
inputbtn.style.backgroundColor = "blue";
inputbtn.style.color = "white";

btnContainer.appendChild(inputbtn);
btnContainer.appendChild(clear);

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "row";
    row.style.display = "flex";
    row.style.flexDirection = "row";

    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.className = "square";
      div.style.width = "40px";
      div.style.height = "40px";
      div.style.outline = "1px solid black";
      row.appendChild(div);
    }
    document.getElementById("container").appendChild(row);
  }
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "black";
    });
  });
}

const clearbutton = document.querySelectorAll(".clear");

clear.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

inputbtn.addEventListener("click", () => {
  document.querySelectorAll(".row").forEach((row) => {
    row.remove();
  });
  input = prompt("Enter the size of the grid");
  if (input > 100) {
    alert("Size is too large");
    size = 100;
  } else {
    size = input;
  }
  createGrid(size);
});
