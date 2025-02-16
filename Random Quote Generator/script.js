//Added various quotes in array
let quote = ["You are never too old to set another goal or to dream a new dream.<br>— C.S. Lewis",
    "The only way to do great work is to love what you do.<br> — Steve Jobs",
    "Happiness is not something ready-made. It comes from your own actions<br> — Dalai Lama",
    "Do one thing every day that scares you.<br> — Eleanor Roosevelt",
    "Believe you can and you're halfway there. <br> — Theodore Roosevelt",
    "Start where you are. Use what you have. Do what you can.<br> — Arthur Ashe",
    "The best way to predict the future is to create it.<br> — Abraham Lincoln",
    "Success is not the key to happiness. Happiness is the key to success.<br> — Albert Schweitzer",
    "In the middle of every difficulty lies opportunity.<br> — Albert Einstein",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.<br> — Ralph Waldo Emerson",
    "Don't watch the clock; do what it does. Keep going.<br> — Sam Levenson",
    "When you have a dream, you've got to grab it and never let go.<br> — Carol Burnett",
    "You miss 100% of the shots you don't take.<br> — Wayne Gretzky",
    "If you want to go fast, go alone. If you want to go far, go together.<br> — African Proverb",
    "Every day may not be good, but there's something good in every day.<br> — Alice Morse Earle",
    "Keep your face always toward the sunshine—and shadows will fall behind you.<br> — Walt Whitman",
    "Opportunities don't happen, you create them.<br> Chris Grosser",
    "Do what you can, with what you have, where you are. <br> — Theodore Roosevelt"];

//Selecting the button generate
let generate = document.querySelector("#generate");

//Adding event listener to generate button
generate.addEventListener("click", () => {  
    let randomindex = Math.floor(Math.random() * quote.length); //Assigning a random index for quote
    let randomquote = quote[randomindex];
    document.querySelector("#quote").innerHTML = randomquote;
    document.querySelector("#generate").innerHTML = `Generate Again`;
})