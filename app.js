const title = document.querySelector("div.hello:first-child h1");

console.dir(title)

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click",handleTitleClick);           //those are the event about mouse condition
title.addEventListener("mouseenter",handleMouseEnter); //when the mouse is on the word it will be notice you
title.addEventListener("mouseleave",handleMouseLeave); //when the mouse has been left word will notice you 
