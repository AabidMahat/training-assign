let options = ["✂️", "🗞️", "🪨"];

let userClicked;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const userChoice = document.querySelector("#user-choice");
const compChoice = document.querySelector("#comp-choice");

function generateRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  console.log(generateRandomNumber());
  return options[generateRandomNumber()];
}

function calculateResult(userChoice, compChoice) {
  if (userChoice === "✂️" && compChoice === "🪨") {
    console.log("Computer wins");
  } else if (userChoice === "✂️" && compChoice === "🗞️") {
    console.log("User Wins");
  } else if (userChoice === "🗞️" && compChoice === "✂️") {
    console.log("Computer Wins");
  }
}

rock.addEventListener("click", () => {
  userClicked = 2;
  userChoice.innerHTML = options[userClicked];
  compChoice.innerHTML = getComputerChoice();

  console.log("Rock Clicked");
});
paper.addEventListener("click", () => {
  userClicked = 1;
  userChoice.innerHTML = options[userClicked];
  compChoice.innerHTML = getComputerChoice();
  console.log("paper Clicked");
});
scissor.addEventListener("click", () => {
  userClicked = 0;
  userChoice.innerHTML = options[userClicked];
  compChoice.innerHTML = getComputerChoice();

  console.log("scissor Clicked");
});

console.log(getComputerChoice());
