const boxes = document.querySelectorAll(".box");
// boxes.forEach((box) => {
//   box.setAttribute("data-clicked", "true");
// });
let color = "pink";

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.getAttribute("data-clicked") === "true") return;

    switch (color) {
      case "pink":
        box.classList.toggle("box-x", true);
        color = "blue";
        break;
      case "blue":
        box.classList.toggle("box-o", true);
        color = "pink";
        break;
    }
    box.setAttribute("data-clicked", "true");
  });
});

function reset() {
  let resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.classList.remove("box-x", "box-o");
      box.setAttribute("data-clicked", "false");
    });
  });
}

reset();
