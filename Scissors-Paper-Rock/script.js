// Selecting all the buttons and display elements
const buttons = document.querySelectorAll(".moves");
const score = document.querySelector("#score");
let scoreBoard = document.querySelector("#scoreBoard");

// Initializing all the necessary components
let userchoice = "";
let choice = "";
let userScore = 0;
let computerScore = 0;
let draw = 0;

// Add event listers for all the buttons
buttons.forEach(choice => {
    choice.addEventListener("click", () => {
        userchoice = choice.querySelector("img").alt;
        playGame(userchoice); // Calling the main function play games
    })
})

// Creation of function play games
const playGame = (userchoice) => {
    // Initializing the choices for computer
    const computerOptions = ["rock", "paper", "scissors"]
    // Choosing a choice of computer
    let computerChoice = Math.floor(Math.random() * 3);
    choice = (computerOptions[computerChoice]);

    // Check either the user won loss or draw
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
    Result(userchoice, choice); // Function call for result
    updateScore(); // Function call for updateScore
    return;
}

// Creation of function for Result
const Result = (userchoice, choice) => {
    score.innerHTML = `
        Your Choice:  <img src="./images/${userchoice}.png" alt="${userchoice}">
        <img src= "./images/${choice}.png" alt="${choice}"> Computer Choice
        `;
    return;
}

// Creation of function to update Score
const updateScore = () => {
    scoreBoard.innerHTML = `WIn: ${userScore} | Draw: ${draw} | Loss: ${computerScore}`;
}

// Creation of reset event Listener
const reset = document.querySelector("#Reset")
reset.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    draw = 0;
    score.innerHTML="";
    scoreBoard.innerHTML="";
})