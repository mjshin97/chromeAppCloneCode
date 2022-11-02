const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]; //images list

const chosenImage = images[Math.floor(Math.random() * images.length)]; //image random selector

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.prepend(bgImage); //'prepend' make image will top of everything(on the top)
//document.body.appendChild(bgImage); //'append' make image will next of everything(the end)