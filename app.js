const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
}

title.addEventListener("click",handleTitleClick);
//how to change color by click,how to count how much clicked in console.