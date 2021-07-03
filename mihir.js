
var start = false;
var colorButtons;
var randomNumber, randomButton, opacity;
var choosenButtons;
var selectedButton;
var level;

document.addEventListener("keydown", function () {
    if (start === false) {
        let e = document.querySelector("#level-title");
        console.log(e);
        console.log(e.style.color);
        e.innerHTML = "level 0";
        start = true;
        colorButtons = ["green", "red", "yellow", "blue"];
        choosenButtons = [];
        selectedButton = [];
        level = 0;
        gameStart();
    }
})

function fadeOut(){
    for(let i=1;i<=10;i++) {
        setTimeout(function () {
            opacity = opacity - 0.1;
            console.log(opacity);
            document.querySelector("#" + randomButton).style.opacity = opacity;
        }, 8);
    }
}

function fadeIn(){
    for(let i=1;i<=10;i++){
        setTimeout(function(){
            opacity = opacity + 0.1;
            console.log(opacity);
            document.querySelector("#" + randomButton).style.opacity = opacity;
        },80);
    }
}

function animation(colorChoosen){
    let audio = new Audio("sounds/" + colorChoosen + ".mp3");
    audio.play();
}

function gameStart() {
    randomNumber = Math.floor(Math.random() * 4);
    randomButton = colorButtons[randomNumber];
    opacity = window.getComputedStyle(document.querySelector("#" + randomButton)).getPropertyValue("opacity");
    console.log(opacity);
    animation(randomButton);
    fadeOut();
    fadeIn();
    selectedButton.push(randomButton);
    console.log(selectedButton[selectedButton.length-1]);
}

function gameOver(){
    document.querySelector("body").classList.add("game-over");
    setTimeout(function(){
        document.querySelector("body").classList.remove("game-over");
    },300);
    animation("wrong");
    document.querySelector("#level-title").innerHTML = "Game Over press any key to Restart";
    start = false;
}

document.querySelectorAll(".btn").forEach((element)=>{
    element.addEventListener("click",function(event){
        if(start == true){
            console.log(event.target);
            console.log(event.target.id);
            choosenButtons.push(event.target.id);
            console.log(choosenButtons[choosenButtons.length-1]);
            if(choosenButtons[choosenButtons.length-1] !== selectedButton[choosenButtons.length-1]){
                gameOver();
                return;
            }
            animation(event.target.id);
            element.classList.add("pressed");
            setTimeout(function(){
                element.classList.remove("pressed");
            },100);
            if(choosenButtons.length === selectedButton.length){
                level++;
                document.querySelector("#level-title").innerHTML = "level " + level;
                choosenButtons = [];
                setTimeout(gameStart,1000);
            }
        }
    });
})




// function hide() {
//     var opacity = window.getComputedStyle(document.querySelector("#" + randomButton)).getPropertyValue("opacity");
//         if (opacity > 0) {
//             opacity = opacity - 0.1;
//             document.querySelector("#" + randomButton).style.opacity = opacity;
//             // console.log(ele.style.opacity);
//             console.log(window.getComputedStyle(document.querySelector("#" + randomButton)).getPropertyValue("opacity"));
//         }
//         else {
//             clearInterval(ID);
//             return;
//         }
// }

// function show() {
//     var opacity = window.getComputedStyle(document.querySelector("#" + randomButton)).getPropertyValue("opacity");
//         if (opacity < 1) {
//             opacity = opacity + 0.1;
//             document.querySelector("#" + randomButton).style.opacity = opacity;
//             // console.log(ele.style.opacity);
//             console.log(window.getComputedStyle(document.querySelector("#" + randomButton)).getPropertyValue("opacity"));
//         }
//         else {
//             clearInterval(ID1);
//             return;
//         }
// }