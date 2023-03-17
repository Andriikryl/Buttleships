const optionContainer = document.querySelector(".option-containet");
const flipButton = document.querySelector("#flip-button");
const gamesBordContainer = document.querySelector("#gamesboards-container");

let angel = 0;

function flip() {
  const optionShips = Array.from(optionContainer.children);
  angel = angel === 0 ? 90 : 0;
  optionShips.forEach(
    (optionShip) => (optionShip.style.transform = `rotate(${angel}deg)`)
  );
}

const width = 10;

function createBoard(color) {
  const gameBordContainer = document.createElement("div");
  gameBordContainer.classList.add("game-board");
  gameBordContainer.style.backgroundColor = color;
  gamesBordContainer.append(gameBordContainer);
}

createBoard("#0077b6");
createBoard("#00b4d8");

flipButton.addEventListener("click", flip);
