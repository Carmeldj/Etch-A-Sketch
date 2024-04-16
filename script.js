const container = document.querySelector(".container");
const text = document.querySelector(".text");
const btn = document.querySelector(".btn");
const reset = document.querySelector(".reset");
const random = document.querySelector(".random");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.boxSizing = "border-box";

const size = 500;
container.style.height = size + "px";
container.style.width = size + "px";
let divColor = "blue";
let checkBtn;

const createSquare = function (userSize) {
  let squareSize = size / userSize - 2;

  for (i = 0; i < userSize * userSize; i++) {
    const div = document.createElement("div");

    div.style.width = squareSize + "px";
    div.style.height = squareSize + "px";
    div.style.border = "1px solid lightblue";
    //div.style.padding = "10px";
    div.style.backgroundColor = "lightpink";
    //div.setAttribute("style", "backgroundColor: aliceblue;");
    //const p = document.createElement("p");
    //p.innerText = "hey bro";
    //div.appendChild(p);
    div.addEventListener("mouseover", () => {
      // Change the button's background color
      if (checkBtn == 0) {
        div.style.backgroundColor = "rgb(" + randomRgbColor().toString() + ")";
      } else {
        div.style.backgroundColor = "blue";
      }
    });
    container.appendChild(div);
  }
};

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r, g, b];
}

const createDivBlue = function () {
  container.innerHTML = "";

  const user = prompt("Enter a number");

  const userSize = Number(user);
  checkBtn = 1;
  createSquare(userSize);
};

const createDivRandom = function () {
  container.innerHTML = "";

  const user = prompt("Enter a number");

  const userSize = Number(user);
  checkBtn = 0;
  divColor = "rgb(" + randomRgbColor().toString() + ")";

  createSquare(userSize);
};

btn.addEventListener("click", createDivBlue);

random.addEventListener("click", createDivRandom);

reset.addEventListener("click", () => {
  container.innerHTML = "";
});
