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

flipButton.addEventListener("click", flip);

const width = 10;

function createBoard(color, user) {
  const gameBordContainer = document.createElement("div");
  gameBordContainer.classList.add("game-board");
  gameBordContainer.style.backgroundColor = color;
  gameBordContainer.id = user;

  for (let i = 0; i < width * width; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = i;
    gameBordContainer.append(block);
  }

  gamesBordContainer.append(gameBordContainer);
}

createBoard("#0077b6", "player");
createBoard("#00b4d8", "computer");

class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}

const destroyer = new Ship("destroyer", 2);
const submarine = new Ship("submarine", 3);
const cruiser = new Ship("cruiser", 3);
const battleship = new Ship("battleship", 4);
const carrier = new Ship("carrier", 5);

const ships = [destroyer, submarine, cruiser, battleship, carrier];

function addShipPiece() {}
