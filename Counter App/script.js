let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let reset=document.querySelector("#reset");
let i = 0;
increase.addEventListener("click", (event) => {
    i++
    document.querySelector("#count").innerHTML = `Count: ${i}`;
})

decrease.addEventListener("click", (event) =>{
    i--
    document.querySelector("#count").innerHTML = `Count ${i}`;
})

reset.addEventListener("click", ()=>{
    i=0
    document.querySelector("#count").innerHTML = `Count ${i}`;
})