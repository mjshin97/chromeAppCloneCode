const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI")
}

function handleWindowOnline(){
    alert("ALL GOOOOD");
}

h1.onclick = ("click", handleTitleClick);           //those are the event about mouse condition
h1.addEventListener("mouseenter",handleMouseEnter); //when the mouse is on the word it will be notice you
h1.addEventListener("mouseleave",handleMouseLeave); //when the mouse has been left word will notice you

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);
//back to 3.5 More Events (challange has been started)