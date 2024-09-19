let numberGenerator1 = Math.floor(Math.random() * 6) + 1;
let numberGenerator2 = Math.floor(Math.random() * 6) + 1;

let dice1 = "images/dice" + numberGenerator1 + ".png";
let dice2 = "images/dice" + numberGenerator2 + ".png";

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

if (numberGenerator1 > numberGenerator2) {
    document.querySelector("h1").innerHTML = "I win!";
} else if (numberGenerator1 < numberGenerator2) {
    document.querySelector("h1").innerHTML = "Fine ... YOU win ...";
} else {
    document.querySelector("h1").innerHTML = "It's a draw. Let's go again!";
}