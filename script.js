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
        computerScore++;
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
    }
    else if (computerChoice === "paper" && humanChoice === "rock"){
        computerScore++;
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
    }
    else if (computerChoice === "scissors" && humanChoice === "paper"){
        computerScore++;
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
    }
    else if (computerChoice === "rock" && humanChoice === "paper"){
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
    else if (computerChoice === "paper" && humanChoice === "scissors"){
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
    else if (computerChoice === "scissors" && humanChoice === "rock"){
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
    else if (computerChoice === humanChoice){
        console.log("Tie");
    }
    else{
        console.log("wrong answer");
    }
}
function playGame(){
    for(let i = 1; i<= 5; i++){
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
