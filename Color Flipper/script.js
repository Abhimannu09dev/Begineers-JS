//Selecting the buttons
let red = document.querySelector("#red");
let orange = document.querySelector("#orange");
let black = document.querySelector("#black");
let blue = document.querySelector("#blue");
let yellow = document.querySelector("#yellow");
let buttons = document.querySelectorAll("button");
let apply = document.querySelector("#Apply")

//Settting the background color to their respective color
red.style.backgroundColor = "red";
orange.style.backgroundColor = "orange";
black.style.backgroundColor = "black";
blue.style.backgroundColor = "blue";
yellow.style.backgroundColor = "yellow";

//Adding eventListener in the apply button for the hex code
apply.addEventListener("click", () => {
    let hexInput = document.querySelector("#hexInput");
    let color = hexInput.value;
    if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color)) {
        // Change the background color of the body to the user's input
        document.querySelector("body").style.backgroundColor = color;
    } else {
        // Alert the user if the color code is invalid
        alert("Please enter a valid hex color code (e.g., #000000).");
    }
})

//Changing backgroud color to red
red.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector("h1").style.color = "yellow";
})

//Changing backgroud color to orange
orange.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "orange";
})

//Changing backgroud color to black
black.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white";
})

//Changing backgroud color to blue
blue.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector("h1").style.color = "white";
    //Adding button color
    buttons.forEach(button => {
        button.style.borderColor = "white";
    })
})

//Changing backgroud color to yellow
yellow.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "yellow";
    document.querySelector("h1").style.color = "red";
})
