const choices = ["Rock", "Paper", "Scissors"];
const caseInsensitive = choices.map((choice) => choice.toLowerCase());

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

function playerSelect(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  if (result === "win") {
    humanScore++;
  } else if (result === "lose") {
    computerScore++;
  } else {
    ties++;
  }
  updateResult(result, humanChoice, computerChoice);
  updateScore();
}

// function getHumanChoice() {
//     const humanChoice = prompt('Whats it gonna be?');
//     if (humanChoice === null) {
//         return null;
//     }
//     const lowerCaseChoice = humanChoice.toLowerCase();
//     if (caseInsensitive.includes(lowerCaseChoice)) {
//         return choices[caseInsensitive.indexOf(lowerCaseChoice)];
//     } else {
//         alert('Please choose Rock, Paper, or Scissors.');
//         return getHumanChoice();
//     }
// }

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  }
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Wins: ${humanScore}, Losses: ${computerScore}, Ties: ${ties}`;
}

function updateResult(result, humanChoice, computerChoice) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. You ${result}.`;
}

document
  .getElementById("rockBtn")
  .addEventListener("click", () => playerSelect("Rock"));
document
  .getElementById("paperBtn")
  .addEventListener("click", () => playerSelect("Paper"));
document
  .getElementById("scissorsBtn")
  .addEventListener("click", () => playerSelect("Scissors"));

// while (playAgain) {
//     const humanSelection = playerSelect();
//     const computerSelection = getComputerChoice();
//     // console.log("Computer's choice:", computerSelection);

//     const result = playRound(humanSelection, computerSelection);
//     // console.log(result);

//     if (result === "win") {
//         humanScore++;
//     } else if (result === "lose") {
//         computerScore++;
//     } else {
//         ties++;
//     }
//     // Add the result to the results array
//     results.push(result);
//     // Ask if the user wants to play again
//     playAgain = confirm("Do you want to play again?");
// }
// console tally results

let humanScore = 0;
let computerScore = 0;
let ties = 0;

// console.log("Wins", humanScore);
// console.log("Loses", computerScore);
// console.log("Ties", ties);
// console.log("All results:", results);
