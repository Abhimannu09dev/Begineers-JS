let calculate = document.querySelector("#Calculate");
let reset = document.querySelector("#Reset");
let todayTips = 0;

// Adding event listener to calculate part
calculate.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    let amount = parseFloat(document.querySelector("input[placeholder='Enter bill amount']").value);
    let tipPercentage = parseFloat(document.querySelector("input[placeholder='Enter tip percentage']").value) / 100;

    if (isNaN(amount) || isNaN(tipPercentage)) {
        alert("Enter the correct values");
    } else {
        let totalTip = amount * tipPercentage;
        let totalAmount = amount + totalTip;
        todayTips += totalTip;

        //dynamic change in div of overall Tips class
        document.querySelector(".overallTips").innerHTML = `
            <p> Total Tip: $${totalTip.toFixed(2)}</p>
            <p> Total Bill Amount: $${totalAmount.toFixed(2)}</p>
        `;

        document.querySelector("#todayTips").innerHTML = `
            <p> Today Tips : ${todayTips.toFixed(2)}
        `;
        return todayTips;
    }
});

//Adding Event listener in Reset
reset.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    document.querySelector("input[placeholder='Enter bill amount']").value = "";
    document.querySelector("input[placeholder='Enter tip percentage']").value = "";
    document.querySelector(".overallTips").innerHTML = ""; // Clear results
});


reset.addEventListener("dblclick", () => {
    todayTips= 0;

    document.querySelector("#todayTips").innerHTML=`
        <p>Today Tips :$${todayTips}  </p>
    `;
    alert("The Today Tips has been reset");
})