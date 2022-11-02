const clock = document.querySelector("h2#clock");


function getClock() {
    /*
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${date}D ${hours}:${minutes}:${seconds}`; //this is a clock 
    */
    
    
    const christmas = new Date("2022-12-25:00:00:00+0900");
    const today = new Date();
    const gap = christmas.getTime() - today.getTime();
    const date = Math.ceil(gap / (60 * 60 * 24 * 1000));
    const hours = Math.floor((gap % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((gap % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((gap % (60 * 1000)) / 1000);
    clock.innerText = `${date}D ${hours}:${minutes}:${seconds}`;
    
}

getClock();
setInterval(getClock, 1000);