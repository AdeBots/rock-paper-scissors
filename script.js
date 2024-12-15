function getComputerChoice(){
    function random(num1, num2){
        randomNumber = Math.ceil(Math.random() * (num2 - num1)+ num1);
        return randomNumber
    }
    compChoice = random(0, 3);
    if(compChoice === 1){
        return "rock";
    }
    else if(compChoice === 2){
        return "paper";
    }
    else if(compChoice === 3){
        return "scissors";
    }
}
function getHumanChoice(){
    return prompt("Rock, paper, scissors?");
}
let humanScore = 0;
let computerScore = 0;
function playRound(){
    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice();
    if (computerChoice === "rock" && humanChoice === "scissors"){
        return "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    else if (computerChoice === "paper" && humanChoice === "rock"){
        return "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper"){
        return "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    else if (computerChoice === "rock" && humanChoice === "paper"){
        return "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else if (computerChoice === "paper" && humanChoice === "scissors"){
        return "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "rock"){
        return "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else if (computerChoice === humanChoice){
        return "Tie";
    }
}
function playGame(){
    for(let i = 0; i<= 5; i++){
        playRound();
        console.log(playRound());
    }
    console.log("Computer Score is " + computerScore + " and Human Score is " + humanScore);
}
function result(){
    playGame();
    if (computerScore < humanScore){
        console.log ("You win");
    }
    else if (computerScore < humanScore){
        console.log("You lose!");
    }
    else{
        console.log("Tie");
    }
}

result();
