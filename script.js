function random(num1, num2){
    return Math.ceil(Math.random() * (num2 - num1) + num1);
}
function getComputerChoice (){
    let compChoice = random(0,3);
    if(compChoice === 1){
        console.log("rock");
    }
    else if(compChoice === 2){
       console.log("paper");
    }
    else{
        console.log("scissors");
    }
}
let computerScore = getComputerChoice ();
function getHumanChoice(){
    console.log(prompt("Rock, paper, scissors?"));
}
let humanScore = getHumanChoice ();

