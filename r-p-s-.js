// create a way to randomize computer choice
function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}
// create a way for a player to choose
// make case insensitve 
function getHumanChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    const humanChoice = prompt('Whats it gonna be?');
    while (!choices.includes(humanChoice)) {
        alert('First letter must be capitalized')
        humanChoice = prompt('Whats it gonna be?');
    } 
    return humanChoice;
    }

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Its a tie!"
    } 
    
    if  
        ((humanChoice === "Rock" && computerChoice === "Scissors") || 
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")) {

            return "You win!"; 
            
        } else {
            return "You lose!";
        }

    }

    
// code function to console.log 
// Initialize a variable to store results
// Initialize a variable to store results
let results = [];
let playAgain = true;

while (playAgain) {
    const humanSelection = getHumanChoice();
    console.log("Human's choice:", humanSelection);

    const computerSelection = getComputerChoice();
    console.log("Computer's choice:", computerSelection);

    const result = playRound(humanSelection, computerSelection);
    console.log(result);

    // Add the result to the results array
    results.push(result);

    // Ask if the user wants to play again
    playAgain = confirm("Do you want to play again?");
}

console.log("All results:", results);