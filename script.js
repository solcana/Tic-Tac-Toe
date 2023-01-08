const boxes = document.querySelectorAll(".box");
let color = "pink";

let resetButton = document.querySelector(".reset");
let playerTurn = document.querySelector("#playerTurn");

boxes.forEach((box) => {
  box.addEventListener("click", handleBoxClicked);
});

resetButton.addEventListener("click", reset);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.getAttribute("data-clicked") === "true") return;
    switch (color) {
      case "pink":
        box.classList.toggle("box-x", true);
        color = "blue";
        playerTurn.innerHTML = "Player O's turn 🚀";
        break;
      case "blue":
        box.classList.toggle("box-o", true);
        color = "pink";
        playerTurn.innerHTML = "Player X's turn 🚀";
        break;
    }
    box.setAttribute("data-clicked", "true");
  });
});

// handle Draw
// handle win or lose
// handle who's turn it is --> display message Player X's or Player O's turn; or Who wins; Tie;

// handle Box Clicked function
function handleBoxClicked(e) {
  let box = +e.target.getAttribute("id");
  e.target.removeEventListener("click", handleBoxClicked);
  console.log(box);
}

// handle Reset Game
function reset() {
  boxes.forEach((box) => {
    box.classList.remove("box-x", "box-o");
    box.setAttribute("data-clicked", "false");
  });
}
