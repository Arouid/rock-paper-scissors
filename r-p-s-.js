// create a way to randomize computer choice
function getComputerChoice () {

    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

// create a way for a player to choose
// make case insensitve 

function getHumanChoice () {

    const choices = ["Rock", "Paper", "Scissors"]; // Is the arrary here necessary as a human?
    const humanChoice = prompt('Whats it gonna be?');

    while (!choices.includes(humanChoice)) {
        alert('First letter must be capitalized');
        humanChoice = prompt('Whats it gonna be?');
    } 

    return humanChoice;

    }

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "tie";
    } 
    
    if  
        ((humanChoice === "Rock" && computerChoice === "Scissors") || 
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")) {

            return "win"; 
            
        } else {
            return "lose";
        }

    }

    
// code function to console.log 
// Initialize a variable to store results

let results = [];
let playAgain = true;

let humanScore = 0;
let computerScore = 0;
let ties = 0;

while (playAgain) {
    const humanSelection = getHumanChoice();
    console.log("Human's choice:", humanSelection);

    const computerSelection = getComputerChoice();
    console.log("Computer's choice:", computerSelection);

    const result = playRound(humanSelection, computerSelection);
    console.log(result);

    if (result === "win" ) {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    } else {
        ties++;
    }

    
    
    // Add the result to the results array
    results.push(result);

    // Ask if the user wants to play again
    playAgain = confirm("Do you want to play again?");
}
console.log("Wins", humanScore);
console.log("Loses", computerScore);
console.log("Ties", ties);
console.log("All results:", results);