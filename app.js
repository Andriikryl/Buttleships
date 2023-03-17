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

function addShipPiece(ship) {
  const allBoardBlocks = document.querySelectorAll("#computer div");
  let randomBoolean = Math.random() < 0.5;
  let isHorizontal = randomBoolean;
  let randomStartIndex = Math.floor(Math.random() * width * width);

  let validStart = isHorizontal
    ? randomStartIndex <= width * width - ship.length
      ? randomStartIndex
      : width * width - ship.length
    : randomStartIndex <= width * width - width * ship.length
    ? randomStartIndex
    : randomStartIndex - ship.length * width + width;

  let shipBlocks = [];

  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
      shipBlocks.push(allBoardBlocks[Number(validStart) + i]);
    } else {
      shipBlocks.push(allBoardBlocks[Number(validStart) + i * width]);
    }
  }

  let valid;

  if (isHorizontal) {
    shipBlocks.every(
      (_shipBlock, index) =>
        (valid =
          shipBlocks[0].id % width !==
          width - (shipBlocks.length - (index + 1)))
    );
  } else {
    shipBlocks.every(
      (_shipBlock, index) =>
        (valid = shipBlocks[0].id < 90 + (width * index + 1))
    );
  }

  const notTaken = shipBlocks.every(
    (shipBlock) => !shipBlock.classList.contains("taken")
  );

  if (valid && notTaken) {
    shipBlocks.forEach((shipBlock) => {
      shipBlock.classList.add(ship.name);
      shipBlock.classList.add("taken");
    });
  } else {
    addShipPiece(ship);
  }
}

ships.forEach((ship) => addShipPiece(ship));
