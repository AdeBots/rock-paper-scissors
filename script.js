function random(num1, num2){
    return Math.ceil(Math.random() * (num2 - num1) + num1);
}
function getComputerChoice (){
    let compChoice = random(0,3);
    let computerChoice;
    if(compChoice === 1){
        computerChoice = "rock";
    }
    else if(compChoice === 2){
       computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    return computerChoice;
}
function getHumanChoice(){
    let humanChoice;
    humanChoice = prompt("Rock, paper, scissors?").toLowerCase;
    return humanChoice;
}
let computerScore = 0;
let humanScore = 0;
function playRound(){
    getComputerChoice;
    getHumanChoice;
   if(getComputerChoice == "rock"){
    if(getHumanChoice == "scissors"){
        console.log("You lose! " + getComputerChoice() + " beats " + getHumanChoice());
    }
    computerScore++;
   }
   else if(getComputerChoice == "scissors"){
    if(getHumanChoice == "paper"){
        console.log("You lose! " + getComputerChoice() + " beats " + getHumanChoice());
    }
    computerScore++;
   }
   else if(getComputerChoice = "paper"){
    if(getHumanChoice = "rock"){
        console.log("You lose! " + getComputerChoice() + " beats " + getHumanChoice());
    }
    computerScore++;
   } else if(getComputerChoice == "rock"){
    if(getHumanChoice == "paper"){
        console.log("You win! " + getHumanChoice() + " beats " + getComputerChoice());
    }
    humanScore++;
   }
   else if(getComputerChoice == "scissors"){
    if(getHumanChoice == "rock"){
        console.log("You win! " + getHumanChoice() + " beats " + getComputerChoice());
    }
    humanScore++;
   }
   else if(getComputerChoice = "paper"){
    if(getHumanChoice = "scissors"){
        console.log("You win! " + getHumanChoice() + " beats " + getComputerChoice());
    }
    humanScore++;
   }
   else{
    console.log("Tie");
   }
}
