const playInput = document.querySelector("#play-form input");
const playButton = document.querySelector("#play-form button");

function onPlayBtnClick() {
    console.log("hello", playInput.value);
}

playButton.addEventListener("click",onPlayBtnClick);