function handleWindowResize(){
    if(innerWidth > 1000) {
        document.body.style.backgroundColor = "white";
    }
    else if(innerWidth < 1000 && innerWidth >700) {
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "tomato";
    }

    
    document.title = "Hello! from JS"; //3.changing title when you resize screen
    h1.style.color = "green"; //5.title colour will be change to green
    h1.innerText = "colour has been changed";
}

window.addEventListener("resize", handleWindowResize);

/*failed
//####### innerWidth!!!!!!! ######  

window.addEventListener(screen.width,function(){
    console.log(screen.width);
    
    if(screen.width > 200px){
        document.body.style.backgroundColor = "tomato";
    }
    
},true);

*/



/* //previous code
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
    document.title = "Hello! from JS"; //3.changing title when you resize screen
    h1.style.color = "green"; //5.title colour will be change to green
    h1.innerText = "colour has been changed";
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
h1.addEventListener("mouseenter",handleMouseEnter); //1.when the mouse is on the text, this will be notify
h1.addEventListener("mouseleave",handleMouseLeave); //2.when the mouse has been left from the text, this will be notfy

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);
//back to 3.5 More Events (challange has been started)
*/