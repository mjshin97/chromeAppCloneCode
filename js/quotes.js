const quotes = [
    {
        quote: "caring is sharing.",
        author: "I don't know",
    },
    {
        quote: "Life is journey.",
        author: "I do not know",
    },
    {
        quote: "I am IronMan.",
        author: "Tony Stark"
    },
    {
        quote: "i'm Minjun.",
        author: "Minjun",
    },
    {
        quote: "Lift is either a daring adventure or nothing at all.",
        author: "Hellen Keller",
    },
    {
        quote: "To travel is go to Live.",
        author: "Hans Christian Andersen",
    },
    {
        quote: "nothing is true everything is possible.",
        author: "Assasin",
    },
    {
        quote: "United we stand, divided we fall.",
        author: "Asop",
    },
    {
        quote: 
            "Immature love says, I love you because I need you, mature love says, I need you because I love you.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "Great loves too must be endured.",
        author: "Gabriel Coco Chanel",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-Child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //random selector

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//math.round() : rounding off to the nearest integer
//math.ceil() : rounding off to upper integer
//Math.floor() : rounding off to lower integer