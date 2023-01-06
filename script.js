const boxes = document.querySelectorAll(".box");
let color = "pink";
boxes.forEach((box) => {
  box.addEventListener("click", () => {
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
  });
});

//   box.removeEventListener("click", handleClick);
