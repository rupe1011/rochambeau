const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const results = document.querySelector("#results");
const score = document.querySelector("#score");


let humanScore = 0
let computerScore = 0


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


function playRound(humanChoice, computerChoice) {
	if (humanScore === 5 || computerScore === 5) {
        return;
    }

	if (humanChoice === computerChoice){
	results.textContent = "it's a tie!";
	}
	else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
                                                                     ){
	   results.textContent = "human wins";
	   humanScore++;
	   score.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
 }
	else {
            results.textContent = "Computer wins!";
            computerScore++;
			score.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
	
}	
	if (humanScore === 5) {
        results.textContent = "Human wins the game!";
    }

    if (computerScore === 5) {
        results.textContent = "Computer wins the game!";
    }

}

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});


scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});


