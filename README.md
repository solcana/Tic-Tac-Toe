# Tic-Tac-Toe-

## Description

This is a tic tac toe game where two users can play and get a win, lose or tie. It was built solo in 7 days, using HTML, CSS & Vanilla JS, with colours acting as symbols for the classic “X” and “O”.

---

## Link

https://solcana.github.io/Tic-Tac-Toe/

---

## Getting started

- Clone or download this repo
- Open the index.html file in your browser of choice to start the game

---

## Timeframe & Working Team

7 days, solo project

---

## Technologies Used

- HTML
- CSS
- Vanilla JS
- Git / Github

---

## Brief

Your Tic Tac Toe app must:
- Render a game board in the browser
- Switch turns between X and O (or whichever markers you select)
- Visually display which side won if a player gets three in a row, or show a draw if neither player wins
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use JavaScript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- You can use GitHub Pages for deploying your project
- Use semantic markup for HTML and CSS (adhere to best practices)
- Have well-formatted, and well-commented code

---

## Planning

I kicked off the planning by sketching out the wireframes, user stories and functionalities. You can find them attached below.

#### Wireframe

![](https://imgur.com/Uo4qzu7.jpg)

#### User Stories

- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

#### Preview

![](https://imgur.com/LejFkx5.jpg)

---

## Build / Code Process

- I started off by creating the grid for my game, which I did using simple HTML markup, and CSS grid layout system.

```
 <div class="game-board">
      <div class="box" id="1"></div>
      <div class="box" id="2"></div>
      <div class="box" id="3"></div>
      <div class="box" id="4"></div>
      <div class="box" id="5"></div>
      <div class="box" id="6"></div>
      <div class="box" id="7"></div>
      <div class="box" id="8"></div>
      <div class="box" id="9"></div>
    </div>
 ```
 
 ```
 .game-board {
  display: grid;
  grid-template-columns: 120px 120px 120px;
  grid-template-rows: 120px 120px 120px;
  justify-content: center;
  padding: 25px;
}
```

- After some tinkering with the styling, I moved on to the game’s functionality. Here I took the approach of using a constant variable to assign it an array of all possible winning combinations.

```
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
```

- The game is then built on functions that work to start the game, check whether there's a winner or a tie at each click, and reset the game or score board. The game uses ternary operators to switch between pink and blue. 

```
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
  ```
 
 - To check for the winner, each clicked box's index is extracted and pushed into an array representing either PlayerX's or PlayerO's clicks. Both arrays are then looped through (using some(), every(), & includes() methods),and checked for matches with any of the winning combinations arrays.

```
let playerOWon = winCombinations.some((combination) => {
    return combination.every((number) => {
      return playerO.includes(number);
    });
```

- The first one that matches, results in a gameOver = true, preventing additional clicks; a message displaying the winner; and an updated scoreboard. A tie message is displayed in cases of no winner.

```
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
  ```

## Bonus Features

---

- Hover effects
- Audio effects on clicks & wins/ tie
- Confetti for the winner
- _**Slightly**_ responsive site
- Scoreboard

---

## Challenges

- Finding the right solutions for the winning combinations
- Refactoring the code, still work to be done on that, and due to time constraints
- Knowing the right locations within a function where to place variables; and also where in the code a function should be called

---

## Wins

Having a first coding project ever done and completed, all on my own, using technologies relatively new to me felt like a huge win. All in all, it was both a stressful but also exciting period, and I was quite happy with how it turned out in the end. 

---

## Key takeaways

To not spend endless hours on things that are not nearly as important for the beginning. Rather focus on a working MVP, and then slowly adding more features.

---

## Bugs

- Site responsive
  - more work needed on size adjustments
  - hover effects act weird, which is obvious since it's a touch screen, but not sure how to disable them on mobile versions
  - audio effects also work weird, and with delay
  
  ---

## Future improvements

- Style of the game can be improved
- Adding an AI
- Using Local Storage to keep data locally
- Customize tokens
- Re-do the whole game using OOP
