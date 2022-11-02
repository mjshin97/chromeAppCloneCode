const images = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
]; //colors list

function changeBackground(color){
    document.body.style.background = color;
}

window.addEventListener("load",function() {changeBackground(images[Math.floor(Math.random() * images.length)])}) //helped_1

/*
const chosenColor = images[Math.floor(Math.random() * images.length)]; //image random selector

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenColor}`;

document.body.prepend(bgImage); //'prepend' make image will top of everything(on the top)
//document.body.appendChild(bgImage); //'append' make image will next of everything(the end)
*/

//helped_1 : https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript