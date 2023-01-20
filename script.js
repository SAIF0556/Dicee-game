const random_num1 = Math.floor(Math.random() * 6) + 1
const random_num2 = Math.floor(Math.random() * 6) + 1

const img1 = document.querySelector(".img1");
img1.src = "./images/dice" + random_num1 + ".png";
const img2 = document.querySelector(".img2");
img2.src = "./images/dice" + random_num2 + ".png";

if (random_num1 > random_num2) {
    document.querySelector("h1").innerHTML = "⛳ Player 1 Wins";
}

else if (random_num1 < random_num2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins ⛳";

}
else {
    document.querySelector("h1").innerHTML = "Draw -_-";
}


