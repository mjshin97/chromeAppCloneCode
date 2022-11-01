const submitInput = document.querySelector("#submit-form input");
const submitButton = document.querySelector("#submit-form button");

const playInput = document.querySelector("#play-form input");
const playButton = document.querySelector("#play-form button");

function onSubmitBtnClick() {
    if(submitInput.value <= 0){
        console.log("you should use number over then 0");
    }
    else console.log("now you can guess number below", submitInput.value);
}

function onPlayBtnClick() {
    if(submitInput.value == playInput.value){
        console.log("hello", playInput.value);
    } else {
        console.log("try again");
    }
}

submitButton.addEventListener("click",onSubmitBtnClick);
playButton.addEventListener("click",onPlayBtnClick);
