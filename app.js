const optionContainer = document.querySelector(".option-containet");
const flipButton = document.querySelector("#flip-button");

let angel = 0;

function flip() {
  const optionShips = Array.from(optionContainer.children);
  angel = angel === 0 ? 90 : 0;
  optionShips.forEach(
    (optionShip) => (optionShip.style.transform = `rotate(${angel}deg)`)
  );
}

flipButton.addEventListener("click", flip);
