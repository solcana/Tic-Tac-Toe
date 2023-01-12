// state all variables
// query variables to manipulate elements in the DOM
let resetButton = document.querySelector(".reset");
let resetScoreButton = document.querySelector(".reset-score");
let playerTurn = document.querySelector(".playerTurn");
const boxes = document.querySelectorAll(".box");
const audioClick = document.querySelector(".audio-click");
const audioTie = document.querySelector(".audio-tie");
const audioWin = document.querySelector(".audio-win");
const audioBtn = document.querySelector(".audio-btn-click");
let color = "pink";
let playerX = [];
let playerO = [];
// flag variable -> has one value until some condition is true, so the variable value changes too
let gameOver = false;
// state variables with empty arrays, to later push into the nr of boxes each player clicked
let playerXScore = 0;
let playerOScore = 0;

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

// handle the win / lose / tie situation
function checkwin() {
  // loops thru each winCombo array
  let playerXWon = winCombinations.some((combination) => {
    // checks each array one by one if it matches (index)
    return combination.every((number) => {
      // checks if playerX includes the matching array
      return playerX.includes(number);
    });
  });
  let playerOWon = winCombinations.some((combination) => {
    return combination.every((number) => {
      return playerO.includes(number);
    });
  });
  if (playerXWon) {
    playerTurn.innerHTML = "<span class='item-x'>X WON 🏆</span>";
    playerXScore++;
    document.querySelector(".playerX").innerHTML = `X's Score: ${playerXScore}`;
    audioWin.currentTime = 0;
    audioWin.play();
    document.querySelector(".container").classList.add("show-confetti");
    gameOver = true;
    // game stop since gameOver is true now, so no more clicks allowed;
  } else if (playerOWon) {
    playerTurn.innerHTML = "<span class='item-o'>O WON 🏆</span>";
    playerOScore++;
    audioWin.currentTime = 0;
    audioWin.play();
    document.querySelector(".playerO").innerHTML = `O's Score: ${playerOScore}`;
    document.querySelector(".container").classList.add("show-confetti");
    gameOver = true;
  } else if (playerX.length + playerO.length === 9) {
    playerTurn.innerHTML = "It's a Tie 🤝";
    audioTie.currentTime = 0;
    audioTie.play();
    gameOver = true;
  }
}

// start the game
function startGame() {
  color = "pink";
  playerTurn.innerHTML = "X's Turn";
  //   add event listener to the box clicked;
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (gameOver) {
        // function stops here if gameOver = true;
        return;
      }
      if (box.getAttribute("data-clicked") === "true") return;
      audioClick.currentTime = 0;
      audioClick.play();
      //   if box is clicked, function stops here, after playing above audio;

      color = color === "pink" ? "blue" : "pink";
      box.classList.add(color === "pink" ? "box-o" : "box-x");
      playerTurn.innerHTML = color === "pink" ? "X's turn" : "O's turn";
      color === "pink"
        ? playerO.push(parseInt(box.id))
        : playerX.push(parseInt(box.id));
      // pushes clicked box nr into PlayerX or PlayerO array and converts into integer - what we need to be able to compare winning combos to these two arrays
      box.setAttribute("data-clicked", "true");
      box.style.pointerEvents = "none";
      checkwin();
      //   checks checkWin() after each click;
    });
  });
}

// handle Reset button
function reset() {
  boxes.forEach((box) => {
    box.classList.remove("box-x", "box-o");
    box.setAttribute("data-clicked", "false");
    box.style.pointerEvents = "auto";
    // set the box.style.pointerEvents to default with is auto
    document.querySelector(".container").classList.remove("show-confetti");
    // remove confetti class
    gameOver = false;
    playerX = [];
    playerO = [];
    audioBtn.currentTime = 0;
    audioBtn.play();
    console.clear();
  });
  startGame();
}

// handle resetScore button
function resetScore() {
  boxes.forEach((box) => {
    box.classList.remove("box-x", "box-o");
    box.setAttribute("data-clicked", "false");
    box.style.pointerEvents = "auto";
    document.querySelector(".container").classList.remove("show-confetti");
    gameOver = false;
    playerX = [];
    playerO = [];
    playerOScore = 0;
    playerXScore = 0;
    document.querySelector(".playerX").innerHTML = `X's Score: 0`;
    document.querySelector(".playerO").innerHTML = `O's Score: 0`;
    audioBtn.currentTime = 0;
    audioBtn.play();
  });
  startGame();
}
startGame();

resetButton.addEventListener("click", reset);

resetScoreButton.addEventListener("click", resetScore);
