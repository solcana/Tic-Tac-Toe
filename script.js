const boxes = document.querySelectorAll(".box");
let color = "pink";

boxes.forEach((box) => {
  let boxClicked = false;

  box.addEventListener("click", () => {
    if (boxClicked) return;

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
    boxClicked = true;
  });
});

function reset() {
  let resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.classList.remove("box-x", "box-o");
    });
  });
}

reset();
