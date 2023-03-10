# Tic-Tac-Toe-

#### Description

---

This is a Tic Tac Toe game, with colors acting as symbols instead of the classic "X" or "O".

#### Links

---

###### Game preview

![](https://imgur.com/LejFkx5.jpg)

###### Wireframe

![](https://imgur.com/Uo4qzu7.jpg)

[Game Link](https://solcana.github.io/Tic-Tac-Toe-/)

#### Technology

---

- Javascript
- jQuery
- HTML
- CSS

#### User Stories

---

- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

#### Bonus Features

---

- Hover effects
- Audio effects on clicks & wins/ tie
- Confetti for the winner
- _**Slightly**_ responsive site
- Scoreboard

#### Approach

---

This game uses a constant variable to assign it an array of arrays of all possible winning combinations.

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

The game is then built on functions that work to start the game, check whether there's a winner or a tie at each click, and reset the game or score board. Game uses ternary operators to switch between pink and blue.

```
color = color === "pink" ? "blue" : "pink";
box.classList.add(color === "pink" ? "box-o" : "box-x");
playerTurn.innerHTML = color === "pink" ? "X" : "O";
```

![](https://imgur.com/QU0WFpM.png)

#### Winner solution

---

Each clicked box's index is extracted and pushed into an array representing either PlayerX's or PlayerO's clicks. Both arrays are then looped through (using some(), every(), & includes() methods),and checked for matches with any of the winning combinations arrays.

```
let playerOWon = winCombinations.some((combination) => {
    return combination.every((number) => {
      return playerO.includes(number);
    });
```

The first one that matches, results in a gameOver = true, preventing additional clicks; a message displaying the winner; and an updated scoreboard. A tie message is displayed in cases of no winner.

```
if (playerXWon) {
    playerTurn.innerHTML = "<span class='item-x'>X</span> WON ????";
    playerXScore++;
    document.querySelector(".playerX").innerHTML = `X's Score: ${playerXScore}`;
    gameOver = true;
```

#### Challenges

---

- Finding the right solutions for the winning combinations
- Re-factoring the code, still work to be done on that
- Knowing the right locations within a function where to place variables; and also where in the code a function should be called

#### Bugs

---

- Site responsive
  - more work needed on size adjustments
  - hover effects act weird, which is obvious since it's a touch screen, but not sure how to disable them on mobile versions
  - audio effects also work weird, and with delay

#### Future improvements

---

- Style of the game can be improved
- Adding an AI
- Using Local Storage to keep data locally
- Customize tokens
- Re-do the whole game using OOP

#### Key takeaways

---

To not spend endless hours on things that are not nearly as important for the beginning. Rather focus on a working MVP, and then slowly adding more features.
