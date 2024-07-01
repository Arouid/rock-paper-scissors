// assign variables and weights to rock
const rock = 'Rock';
// assign variables and weightsb paper
const paper = 'Paper';
// assign variables and weights scissors
const scissors = 'Scissors';

// track games played vs scorekeeping 
// incremnt number based on winner
let humanScore = 0;
let computerScore = 0;
// create two game modes -- single and best of
// code function to console.log
function playRound(HumanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection)
playRound(humanSelection, computerSelection);

// Initial weights with no logic
// rock > scissors < paper
// paper > rock < scissors
// scissors > paper < rock

// create a way to randomize choice
function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    let randommizer = Math.floor(Math.random() * choices.length);
    return choices[randommizer]
}
console.log(getComputerChoice());
// create a way for a player to choose
// make case insensitve 
function getHumanChoice () {

}