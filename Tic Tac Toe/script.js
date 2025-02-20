let move = "O";
const boxes = document.querySelectorAll(".digits");
let reset = document.querySelector("#Reset")
const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach(step => {
    step.addEventListener("click", () => {
        if (step.innerText === "") {
            step.innerText = move;
            move = move === "O" ? "X" : "O"; // using ternary operator
        }
        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winningPattern) {
        let firstDigit = boxes[pattern[0]].innerText;
        let secondDigit = boxes[pattern[1]].innerText;
        let thirdDigit = boxes[pattern[2]].innerText;

        if (firstDigit !== "" && firstDigit === secondDigit && secondDigit === thirdDigit) {
            // Show winner message
            document.querySelector("#message").innerHTML = `Congratulations! ${firstDigit} is the winner!`;
            document.getElementById("messageBox").style.display = "block";
            
            //now disable the remainig butons
            boxes.forEach(digits => {
                digits.disabled = true;
            })
            return; 
        }
    }
};

reset.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset??") == true) {
        boxes.forEach(digits => {
            digits.innerText = "";
            digits.disabled = false;
        })
        move = "O";
        document.getElementById("messageBox").style.display = "none";
    }
    
})