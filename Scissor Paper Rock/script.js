const buttons = document.querySelectorAll(".moves");
const score = document.querySelector("#score");
let scoreBoard = document.querySelector("#scoreBoard");

let userchoice = "";
let choice = "";
let userScore = 0;
let computerScore = 0;
let draw = 0;

buttons.forEach(choice => {
    choice.addEventListener("click", () => {
        userchoice = choice.querySelector("img").alt;
        playGame(userchoice);
    })
})

const playGame = (userchoice) => {
    const computerOptions = ["rock", "paper", "scissors"]
    let computerChoice = Math.floor(Math.random() * 3);
    choice = (computerOptions[computerChoice]);

    if (userchoice === choice) {
        let count = 1;
        draw += count;
    }
    else if (
        (userchoice === "paper" && choice === "rock") ||
        (userchoice === "rock" && choice === "scissors") ||
        (userchoice === "scissors" && choice === "paper")
    ) {
        let count = 1;
        userScore += count;
    }
    else {
        let count = 1;
        computerScore += count;
    }
    Result(userchoice, choice);
    updateScore();
    return;
}

const Result = (userchoice, choice) => {
    score.innerHTML = `
        Your Choice:  <img src="./images/${userchoice}.png" alt="${userchoice}">
        <img src= "./images/${choice}.png" alt="${choice}"> Computer Choice
        `;
    return;
}

const updateScore = () => {
    scoreBoard.innerHTML = `WIn: ${userScore} | Draw: ${draw} | Loss: ${computerScore}`;
}

const reset = document.querySelector("#Reset")
reset.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    draw = 0;
    score.innerHTML="";
    scoreBoard.innerHTML="";
})