const submitInput = document.querySelector("#submit-form input");
const submitButton = document.querySelector("#submit-form button");
let random = 0;

const playInput = document.querySelector("#play-form input");
const playButton = document.querySelector("#play-form button");

function onSubmitBtnClick() {
    if(submitInput.value < 0){
        console.log("you should use number 0 or more");
    } else {
        console.log("now you can guess number", submitInput.value);
        //new code.
        random = Math.floor(Math.random() * submitInput.value) // creating random number
        //new code done.
    }
}

function onPlayBtnClick() {
    if(random == playInput.value){
        console.log("exactly!", playInput.value);
    } else {
        console.log("try again");
    }
}

submitButton.addEventListener("click",onSubmitBtnClick);
playButton.addEventListener("click",onPlayBtnClick);
