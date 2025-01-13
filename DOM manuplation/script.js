function updateClock() {
    let clock = document.getElementById("digital-clock");
    const date = new Date();

    // format for the 24 hour 
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let DayNight = hour >= 12 ? "PM" : "AM"; //Find if it is AM or PM

    hours = hour % 12 || 12; //Using logical OR for hours in 12 hour format
    let time = `${String(hours)} : ${String(minutes)} : ${String(seconds)} : ${DayNight}`;
    clock.textContent = time;
}
setInterval(updateClock, 1000);
updateClock();