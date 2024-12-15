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
getComputerChoice ();
function getHumanChoice(){
    let humanChoice;
    humanChoice = prompt("Rock, paper, scissors?");
    return humanChoice
}
getHumanChoice ();
let computerScore = 0;
let humanScore = 0;

