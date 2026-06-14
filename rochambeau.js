function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {  
        return  "rock" 
    }
    else if (randomNumber === 1) {  
        return  "paper" 
    }
    else {
        return "scissors"  
    }
}

function getHumanChoice() {
	const humanSelection = prompt("rock, paper or scissors?");
	return humanSelection.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

	if (humanChoice === computerChoice){
	console.log("it's a tie!")
	}
	else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
                                                                     ){
	   console.log("human wins");
	   humanScore++;
 }
	else {
            console.log("Computer wins!");
            computerScore++;}
	
	

}

let humanScore = 0
let computerScore = 0


function playGame() {

	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection);

   	const humanSelection1 = getHumanChoice();
	const computerSelection1 = getComputerChoice();
	playRound(humanSelection1, computerSelection1);


   	const humanSelection2 = getHumanChoice();
	const computerSelection2 = getComputerChoice();
	playRound(humanSelection2, computerSelection2);


   	const humanSelection3 = getHumanChoice();
	const computerSelection3 = getComputerChoice();
	playRound(humanSelection3, computerSelection3);


    const humanSelection4 = getHumanChoice();
	const computerSelection4 = getComputerChoice();
	playRound(humanSelection4, computerSelection4);


    if (humanScore > computerScore) {
	console.log("human wins!");

    }
    else if (computerScore > humanScore) {
	console.log("Computer wins!");

    }
    else {
	console.log("it's a tie!");
    }
}

playGame();
