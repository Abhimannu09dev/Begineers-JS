// Select the buttons and the count display element
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let reset=document.querySelector("#reset");
let i = 0;// Initialize the counter variable to 0

// Event listener for the "Increase" button
increase.addEventListener("click", (event) => {
    i++ // Increment the counter by 1
    // Update the display with the new count
    document.querySelector("#count").innerHTML = `Count: ${i}`;
})

// Event listener for the "Decrease" button
decrease.addEventListener("click", (event) =>{
    i-- // Decrement the counter by 1
    // Update the display with the new count
    document.querySelector("#count").innerHTML = `Count ${i}`;
})

// Event listener for the "Reset" button
reset.addEventListener("click", ()=>{
    i=0 // Reset the counter to 0
    // Update the display with the new count
    document.querySelector("#count").innerHTML = `Count ${i}`;
})