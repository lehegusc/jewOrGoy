
var i = 0;
var score = 0;
var highscore = 0;
var prev = 0;
var url = " ";

function runde() {




var zz = Math.floor(Math.random() *
 10);
zz++;

if (zz === prev && zz === 10) {
zz = 1;
} else if (zz === prev) {
  zz++;
}




if (zz === 1) {
    url = "img/1.jpg"
    document.getElementById("image").src = url;
    i = 1;
    prev = zz;
} else if (zz === 2) {
    url = "img/2.jpg"
    document.getElementById("image").src = url;
    i = 2
    prev = zz;
} else if (zz === 3) {
    url = "img/3.jpg"
    document.getElementById("image").src = url;
    i = 1
    prev = zz;
} else if (zz === 4) {
    url = "img/4.jpg"
    document.getElementById("image").src = url;
    i = 2
    prev = zz;
} else if (zz === 5) {
    url = "img/5.jpg"
    document.getElementById("image").src = url;
    i = 1
    prev = zz;
} else if (zz === 6) {
    url = "img/6.jpg"
    document.getElementById("image").src = url;
    i = 2
    prev = zz;
} else if (zz === 7) {
    url = "img/7.jpg"
    document.getElementById("image").src = url;
    i = 1
    prev = zz;
} else if (zz === 8) {
    url = "img/8.jpg"
    document.getElementById("image").src = url;
    i = 2
    prev = zz;
} else if (zz === 9) {
    url = "img/9.png"
    document.getElementById("image").src = url;
    i = 1
    prev = zz;
} else if (zz === 10) {
    url = "img/10.jpg"
    document.getElementById("image").src = url;
    i = 2
    prev = zz;
}
}

runde();


function nazi() {


if (i === 1) {
    //document.getElementById("ausgabe").innerHTML =
    //"richtig";
    score = score + 88;
    document.getElementById("score")
    .innerHTML = score;
    runde();
    
} else {
    //document.getElementById("ausgabe").innerHTML =
    //"falsch";
    document.getElementById("score2")
    .innerHTML = score;
    score = 0;
    document.getElementById("score")
    .innerHTML = score;
    
    document.getElementById("start")
    .innerHTML =
    "Game over! Neues Spiel?";
    openNav();
}

if (score > highscore) {
    highscore = score;
    document.getElementById("high")
    .innerHTML = highscore;
}




}

function naso() {


if (i === 2) {
    //document.getElementById("ausgabe").innerHTML =
    // "richtig";
    score = score + 88;
    document.getElementById("score")
    .innerHTML = score;
    runde();
    
} else {
    //document.getElementById("ausgabe").innerHTML =
    //"falsch";
    document.getElementById("score2")
    .innerHTML = score;
    score = 0;
    document.getElementById("score")
    .innerHTML = score;
    
    document.getElementById("start")
    .innerHTML =
    "Game over! Neues Spiel?";
    openNav();
}

if (score > highscore) {
    highscore = score;
    document.getElementById("high")
    .innerHTML = highscore;
}



}

function start() {
closeNav();
runde();
}

/* Set the width of the side navigation to 250px */
function openNav() {
document.getElementById("mySidenav")
    .style.width =
    "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
document.getElementById("mySidenav")
    .style.width = "0";
}
