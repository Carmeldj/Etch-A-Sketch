container = document.querySelector(".container");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.boxSizing = "border-box";
//container.style.height = "auto";
//container.style.width = "100%";
//container.style.margin = "4%";

for (i = 0; i < 10000; i++) {
  const div = document.createElement("div");
  div.style.width = "3px";
  div.style.height = "3px";
  div.style.border = "1px solid lightblue";
  //div.style.padding = "10px";
  div.style.backgroundColor = "lightpink";
  //div.setAttribute("style", "backgroundColor: aliceblue;");
  //const p = document.createElement("p");
  //p.innerText = "hey bro";
  //div.appendChild(p);
  div.addEventListener("mouseover", () => {
    // Change the button's background color
    div.style.backgroundColor = "blue";
  });
  container.appendChild(div);
}
