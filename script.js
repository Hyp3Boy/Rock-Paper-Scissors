const prompt = require("prompt-sync")();

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
}

let timesToPlay = prompt("How many times do you want to play? ");
let userWins = 0;
let computerWins = 0;
let ties = 0;
for (let i = 0; i < timesToPlay; i++) {
  // Start the program
  // Prompt the user for their choice
  let userChoice = prompt("Enter your choice: ");
  userChoice = userChoice.toLowerCase();
  // Get the computer's choice
  let computerChoice = getComputerChoice();
  // Determine the winner
  console.log(determineWinner(userChoice, computerChoice));
  // Add to the score
  if (determineWinner(userChoice, computerChoice) === "You won!") {
    userWins++;
  } else if (
    determineWinner(userChoice, computerChoice) === "The computer won!"
  ) {
    computerWins++;
  } else {
    ties++;
  }
}

console.log("--------------------");
console.log("You won " + userWins + " times.");
console.log("The computer won " + computerWins + " times.");
console.log("You tied " + ties + " times.");
console.log("--------------------");
// Display the results
