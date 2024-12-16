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
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => { 
    playRound("rock",getComputerChoice());
})

paper.addEventListener("click", () => {
    playRound("paper",getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound("scissors",getComputerChoice());
});

const btn = document.querySelectorAll("button");
const compScore = document.querySelector("#computerScore");
const playScore = document.querySelector("#playerScore");
const current =document.querySelector("#current")
const finalScore = document.querySelector("#finalScore");

btn.forEach((button) => {
    button.addEventListener("click", () =>{
        compScore.innerHTML = "<h2> Computer Score: <br>" + computerScore + "</h2>";
        playScore.innerHTML = "<h2> Your Score: <br>" + humanScore + "</h2>";
        if(computerScore == 5 || humanScore == 5){
            current.innerHTML = "<h1>Game Over!</h1>"
            if (computerScore < humanScore){
                finalScore.innerHTML = "<h1>You win!</h1>";
            }
            else if (computerScore > humanScore){
                finalScore.innerHTML = "<h1>You lose!</h1>";
            }
            else if (computerScore = humanScore){
                finalScore.innerHTML = "<h1>It's a Tie</h1>";
            }
        }
        else{
            current.innerHTML = "<h1>Next Round</h1>";
        }
        
    });
});


// compScore.innerHTML = "<h2> Computer Score: <br>" + computerScore + "</h2>";
// playScore.innerHTML = "<h2> Your Score: <br>" + humanScore + "</h2>";
// // function displayFinalresult(){
//     playGame();

