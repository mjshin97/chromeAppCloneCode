const age = parseInt(prompt("How old are you?")); //function is started from the inside to outside

if(isNaN(age)){
    console.log("please write a number");
} else{
    console.log("Thank you for writing your age");
}