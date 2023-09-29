let optionRock = document.getElementById("option__rock");
let optionPaper = document.getElementById("option__paper");
let optionScissor = document.getElementById("option__scissor");
let playerOption = document.getElementById("board__player--img");
let machineOption = document.getElementById("board__machine--img");
let boardPlayerPoints = document.querySelectorAll(".board__player--points");
let playerPoints = document.getElementById("player__points");
let machinePoints = document.getElementById("machine__points");
let messageResult = document.getElementById("message__result");
let playerContainer = document.querySelectorAll(".board__player--picture");
let finish = document.getElementById("finish");

//Options array
let arrSrc = ["https://cdn-icons-png.flaticon.com/128/3562/3562093.png", "https://cdn-icons-png.flaticon.com/128/2165/2165693.png", "https://cdn-icons-png.flaticon.com/128/5703/5703205.png"];
//Colors array
let arrColors = ["var(--rock)", "var(--paper)", "var(--scissor)"];


//Game
optionRock.addEventListener("click", () => { 
    start(0);

});


optionPaper.addEventListener("click", () => { 
    start(1);
});

optionScissor.addEventListener("click", () => { 
    start(2);
});

finish.addEventListener("click", finishGame);


//Functions

function 
userGame(option) {
    playerOption.src = arrSrc[option];
    
playerContainer.forEach(elem => {
        elem.style.background = "#fff";
     });
}

function machinegame(){
    let num = Math.floor(Math.random() * 3);
    machineOption.src = arrSrc[num];
}

let uPoints = 0;
let mPoints = 0;
function getPoints() {
    if (playerOption.src == machineOption.src) {
            ++uPoints
            playerPoints.innerHTML = uPoints;
            ++mPoints
            machinePoints.innerHTML = mPoints;
            messageResult.innerHTML = "Es un empate";

    } else if (playerOption.src == arrSrc[0] && machineOption.src == arrSrc[2] || 
            playerOption.src == arrSrc[1] && machineOption.src == arrSrc[0] || 
            playerOption.src == arrSrc[2] && machineOption.src == arrSrc[1]) {
                ++uPoints
                playerPoints.innerHTML = uPoints;
                messageResult.innerHTML = "¡Ganaste!";

    } else {
            ++mPoints
            machinePoints.innerHTML = mPoints;
            messageResult.innerHTML = "Perdiste";


    }

    for(elem of boardPlayerPoints) {
        elem.style.visibility = "visible"
    }

    messageResult.style.visibility = "visible"

}

let i = 0;
let moveID;

function move(){
    moveID = setInterval(() => {
    playerOption.src = arrSrc[i];
    machineOption.src = arrSrc[i];
    
playerContainer.forEach(elem => {
        elem.style.background =  arrColors[i];
        
    });

    i++;

    if(i == 3){
        stopMove();
    }

}, 1000)

}

function stopMove(){
    clearInterval(moveID);
    i = 0;
}

function finishGame() {
    uPoints = 0;
    mPoints = 0;
    playerPoints.innerHTML = uPoints;
    machinePoints.innerHTML = mPoints;
    boardPlayerPoints.forEach(elem => {
        elem.style.visibility = "hidden";
        
    });
    messageResult.style.visibility = "hidden";
    playerOption.src = arrSrc[1];
    machineOption.src = arrSrc[1];
}

function run(option) {
    setTimeout(() => {
        //User option
    userGame(option);
        //Machine option
        machinegame();
        //Show user points
        getPoints();
        //Re-enable the buttons
        optionRock.disabled = false;
        optionPaper.disabled = false;
        optionScissor.disabled = false;

    }, 4000)
}


function start(option){
        move();
        run(option);
        //Disable the buttons to avoid more clicks
        optionRock.disabled = true;
        optionPaper.disabled = true;
        optionScissor.disabled = true;
        
}

