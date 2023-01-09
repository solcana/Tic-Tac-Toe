let resetButton = document.querySelector(".reset");
let playerTurn = document.querySelector(".playerTurn");
const boxes = document.querySelectorAll(".box");
let color = "pink";
let playerX = [];
let playerO = [];

// state an array of winning combinations
const winCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// boxes.forEach((box) => {
//   box.addEventListener("click", handleBoxClicked);
// });

// start the game
function startGame() {
  color = "pink";
  playerTurn.innerHTML = "Player <span class='item-x'>X's</span> Turn 🚀";

  //   add event listener to the box clicked
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.getAttribute("data-clicked") === "true") return;

      switch (color) {
        case "pink":
          box.classList.add("box-x");
          color = "blue";
          playerTurn.innerHTML =
            "Player <span class='item-o'>O's</span> Turn 🚀";
          playerX.push(parseInt(box.id));
          break;
        case "blue":
          box.classList.add("box-o");
          color = "pink";
          playerTurn.innerHTML =
            "Player <span class='item-x'>X's</span> Turn 🚀";
          playerO.push(parseInt(box.id));
          break;
      }
      console.log(playerX);
      console.log(playerO);
      box.setAttribute("data-clicked", "true");
      checkwin();
    });
  });
}

// add event listener to reset button
resetButton.addEventListener("click", reset);

// handle Box clicked function
// function handleBoxClicked(e) {
//   let box = +e.target.getAttribute("id");
//   if (color === "pink") {
//     color = "blue";
//     playerX.push(box);
//   } else {
//     playerO.push(box);
//     color = "pink";
//   }
//   console.log(playerX);
//   console.log(playerO);
//   e.target.removeEventListener("click", handleBoxClicked);
// }

// handle win / lose / tie
function checkwin() {
  let playerXWon = winCombinations.some((combination) => {
    return combination.every((number) => {
      return playerX.includes(number);
    });
  });
  let playerOWon = winCombinations.some((combination) => {
    return combination.every((number) => {
      return playerO.includes(number);
    });
  });
  if (playerXWon) {
    console.log("Player X won!");
  } else if (playerOWon) {
    console.log("Player O won!");
  } else if (playerX.length + playerO.length === 9) {
    console.log("It's a tie!");
  }
}

// handle Reset button
function reset() {
  boxes.forEach((box) => {
    box.classList.remove("box-x", "box-o");
    box.setAttribute("data-clicked", "false");
    playerX = [];
    playerO = [];
    console.clear();
  });
  startGame();
}

startGame();

// handle who's turn it is --> display message Player X's or Player O's turn; or Who wins; Tie;
