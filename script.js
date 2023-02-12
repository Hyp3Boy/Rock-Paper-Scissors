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

// Start the program
// Prompt the user for their choice
let userChoice = prompt("Enter your choice: ");
userChoice = userChoice.toLowerCase();
// Get the computer's choice
let computerChoice = getComputerChoice();
// Determine the winner
console.log(determineWinner(userChoice, computerChoice));
// Display the results
