const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; //has been mistake
}

getClock(); //Creating a clock
setInterval(getClock, 1000); //********