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

let humanScore = 0;
let computerScore = 0;
const result = document.querySelector("#results");
function playRound(humanChoice, computerChoice){
    if (computerChoice === "rock" && humanChoice === "scissors"){
        computerScore++;
        result.innerHTML= 
        "<h1> You lose! " + computerChoice + " beats " + humanChoice + "</h1>";
    }
    else if (computerChoice === "paper" && humanChoice === "rock"){
        computerScore++;
        result.innerHTML= 
        "<h1> You lose! " + computerChoice + " beats " + humanChoice + "</h1>";
    }
    else if (computerChoice === "scissors" && humanChoice === "paper"){
        computerScore++;
        result.innerHTML= 
        "<h1> You lose! " + computerChoice + " beats " + humanChoice + "</h1>";
    }
    else if (computerChoice === "rock" && humanChoice === "paper"){
        humanScore++;
        result.innerHTML= 
        "<h1> You win! " + humanChoice + " beats " + computerChoice + "</h1>";
    }
    else if (computerChoice === "paper" && humanChoice === "scissors"){
        humanScore++;
        result.innerHTML= 
        "<h1> You win! " + humanChoice + " beats " + computerChoice + "</h1>";
    }
    else if (computerChoice === "scissors" && humanChoice === "rock"){
        humanScore++;
        result.innerHTML= 
        "<h1> You win! " + humanChoice + " beats " + computerChoice + "</h1>";
    }
    else if (computerChoice === humanChoice){
        result.innerHTML= 
        "<h1> Tie </h1>";
    }
    else{
        result.innerHTML= 
        "<h1> Invalid answer </h1>";;
    }
}
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");9
rock.addEventListener("click", () => { 
    playRound("rock",getComputerChoice())
})
paper.addEventListener("click", () => {
    playRound("paper",getComputerChoice())
});
scissors.addEventListener("click", () => {
    playRound("scissors",getComputerChoice())
});



/*function playGame(){
    for(let i = 1; i<= 5; i++){
        playRound();
    }
    console.log("Your Score is " + humanScore + " and Computer Score is " + computerScore);
}
function result(){
    playGame();
    if (computerScore < humanScore){
        console.log ("You win!");
    }
    else if (computerScore > humanScore){
        console.log("You lose!");
    }
    else {
        console.log("Tie");
    }
}*/
