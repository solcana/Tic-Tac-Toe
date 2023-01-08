let color = "pink";
let resetButton = document.querySelector(".reset");
let playerTurn = document.querySelector(".playerTurn");

const boxes = document.querySelectorAll(".box");

resetButton.addEventListener("click", reset);

boxes.forEach((box) => {
  box.addEventListener("click", handleBoxClicked);
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.getAttribute("data-clicked") === "true") return;
    switch (color) {
      case "pink":
        // box.innerHTML = "X";
        box.classList.add("box-x");
        color = "blue";
        playerTurn.innerHTML = "Player <span class='x'>O's</span> Turn 🚀";
        break;
      case "blue":
        // box.innerHTML = "O";
        box.classList.add("box-o");
        color = "pink";
        playerTurn.innerHTML = "Player <span class='x'>X's</span> Turn 🚀";
        break;
    }
    box.setAttribute("data-clicked", "true");
  });
});

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
    console.clear();
    box.addEventListener("click", handleBoxClicked);
    playerTurn.innerHTML = "Player <span class='x'>X's</span> Turn 🚀";
  });
}

// handle Draw
// handle win or lose
// handle who's turn it is --> display message Player X's or Player O's turn; or Who wins; Tie;
// change box design switch from color to X or O
