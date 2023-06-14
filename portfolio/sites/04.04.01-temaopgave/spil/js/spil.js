window.addEventListener("load", showTitle);

let lives;

function showTitle(){
    console.log("showTitle");
    // skjul andre skærme
    hideAll();
    document.querySelector("#start").classList.remove("hide");
    // // vis startskærm
    document.querySelector("#play-btn-sprite").addEventListener("click", startGame);
    document.querySelector("#info-btn-sprite").addEventListener("click", info);

}

function info(){
    console.log("info")

    hideAll();

    document.querySelector("#info").classList.remove("hide");

    document.querySelector("#play-btn-sprite2").addEventListener("click", startGame);
    // tilføj "back" button
}


function startGame(){
    console.log("startGame");
    // skjul andre skærme
hideAll();
    // nulstil liv
lives=0
    // udskriv liv
updateLives();

document.querySelector("#timer-juice-sprite").classList.add("timer");

document.querySelector("#timer-juice-sprite").addEventListener("animationend", levelComplete);
    //tildel state til elementer
let rand = randomNumber(2);
document.querySelector("#human1-sprite").classList.add("skin"+rand);
 
rand = randomNumber(2);
document.querySelector("#human2-sprite").classList.add("skin"+rand);
 
rand = randomNumber(2);
document.querySelector("#human3-sprite").classList.add("skin"+rand);
 
    // giv random delay fra funktion
rand = randomNumber(5);
document.querySelector("#human1").classList.add("delay"+rand);

rand = randomNumber(5);
document.querySelector("#human2").classList.add("delay"+rand);

rand = randomNumber(5);
document.querySelector("#human3").classList.add("delay"+rand);

    // start animationer fra funktion
document.querySelector("#human1").classList.add("pos1");    
document.querySelector("#human2").classList.add("pos2");
document.querySelector("#human3").classList.add("pos3");

// -----------------badclick----------------------
document.querySelector("#btn-1-sprite").addEventListener("mousedown", clickBtn1);

document.querySelector("#btn-2-sprite").addEventListener("mousedown", clickBtn2);

document.querySelector("#btn-3-sprite").addEventListener("mousedown", clickBtn3);

// -----------------reset-----------------

document.querySelector("#human1").addEventListener("animationend", humanReset1);
document.querySelector("#human2").addEventListener("animationend", humanReset2);
document.querySelector("#human2").addEventListener("animationend", humanReset3);
}

function clickBtn1(){
    //console.log("clickBtn1");
    
    document.querySelector("#btn-1-sprite").removeEventListener("mousedown", clickBtn1);

    if(document.querySelector("#human1-sprite").classList.contains("skin1")){
        //console.log("bad")

        document.querySelector("#human1-sprite").classList.remove("skin1")

        document.querySelector("#human1-sprite").classList.add("skin2")

        // if(lives>4){
        //     endGame();
        // }else{
        //     subtractLives();

        //     updateLives();
        // }
    }else{
        //console.log("good")

        document.querySelector("#human1-sprite").classList.remove("skin2")

        document.querySelector("#human1-sprite").classList.add("skin1")
    }
}

function clickBtn2(){
    console.log("clickBtn2");

    document.querySelector("#btn-2-sprite").removeEventListener("mousedown", clickBtn2);

    if(document.querySelector("#human2-sprite").classList.contains("skin1")){
        //console.log("bad")

        document.querySelector("#human2-sprite").classList.remove("skin1")

        document.querySelector("#human2-sprite").classList.add("skin2")

    }else{
        //console.log("good")

        document.querySelector("#human2-sprite").classList.remove("skin2")

        document.querySelector("#human2-sprite").classList.add("skin1")
    }
}
function clickBtn3(){
    console.log("clickBtn3");

    document.querySelector("#btn-3-sprite").removeEventListener("mousedown", clickBtn3);

    if(document.querySelector("#human3-sprite").classList.contains("skin1")){
        //console.log("bad")

        document.querySelector("#human3-sprite").classList.remove("skin1")

        document.querySelector("#human3-sprite").classList.add("skin2")

    }else{
        //console.log("good")

        document.querySelector("#human3-sprite").classList.remove("skin2")

        document.querySelector("#human3-sprite").classList.add("skin1")
    }
}

function humanReset1(){
   // console.log("humanReset1")

    if(document.querySelector("#human1-sprite").classList.contains("skin1")){
        //console.log("good")
    }else{
        //console.log("bad")
        if(lives>4){
            endGame();
        }else{
            subtractLives();

            updateLives();
        }
    }

    document.querySelector("#human1-sprite").removeEventListener("animationend", humanReset1);
    document.querySelector("#human1").classList="";
    document.querySelector("#human1-sprite").classList="";
    
    let rand = randomNumber(2);
    document.querySelector("#human1-sprite").classList.add("skin"+rand);
    
    rand = randomNumber(5);
    document.querySelector("#human1").classList.add("delay"+rand);
    
    document.querySelector("#human1").offsetHeight;
    
    document.querySelector("#human1").classList.add("pos1"); 

    document.querySelector("#btn-1-sprite").addEventListener("mousedown", clickBtn1);

}

function humanReset2(){
    console.log("humanReset2")

    if(document.querySelector("#human2-sprite").classList.contains("skin1")){
        console.log("good")
    }else{
        console.log("bad")
        if(lives>4){
            endGame();
        }else{
            subtractLives();

            updateLives();
        }
    }

    document.querySelector("#human2-sprite").removeEventListener("animationend", humanReset2);
    document.querySelector("#human2").classList="";
    document.querySelector("#human2-sprite").classList="";
    
    let rand = randomNumber(2);
    document.querySelector("#human2-sprite").classList.add("skin"+rand);
    
    rand = randomNumber(5);
    document.querySelector("#human2").classList.add("delay"+rand);
    
    document.querySelector("#human2").offsetHeight;
    
    document.querySelector("#human2").classList.add("pos2"); 

    document.querySelector("#btn-2-sprite").addEventListener("mousedown", clickBtn2);

}

function humanReset3(){
    console.log("humanReset3")

    if(document.querySelector("#human3-sprite").classList.contains("skin1")){
        console.log("good")
    }else{
        console.log("bad")
        if(lives>4){
            endGame();
        }else{
            subtractLives();

            updateLives();
        }
    }

    document.querySelector("#human3-sprite").removeEventListener("animationend", humanReset3);
    document.querySelector("#human3").classList="";
    document.querySelector("#human3-sprite").classList="";
    
    let rand = randomNumber(2);
    document.querySelector("#human3-sprite").classList.add("skin"+rand);
    
    rand = randomNumber(5);
    document.querySelector("#human3").classList.add("delay"+rand);
    
    document.querySelector("#human3").offsetHeight;
    
    document.querySelector("#human3").classList.add("pos3"); 

    document.querySelector("#btn-3-sprite").addEventListener("mousedown", clickBtn3);

}

function endGame(){ //gameOver
    console.log("endGame");

    stopAll()

    document.querySelector("#timer-juice-sprite").classList.remove("timer");

    document.querySelector("#timer-juice-sprite").removeEventListener("animationend", endGame);

    hideAll()
    
    document.querySelector("#game_over").classList.remove("hide");

    document.querySelector("#play-again-sprite").addEventListener("click", startGame)

    // document.querySelector("return_title").addEventListener("click", showTitle)
}


function levelComplete(){
    console.log("levelComplete");

    stopAll()

    document.querySelector("#timer-juice-sprite").classList.remove("timer");

    document.querySelector("#timer-juice-sprite").removeEventListener("animationend", endGame);
    
    hideAll()

    document.querySelector("#level_complete").classList.remove("hide");
    
    document.querySelector("#play-again-sprite2").addEventListener("click", startGame)
}

// HJÆLPEFUNKTIONER


function subtractLives(){
    lives=lives+1;
}

function updateLives(){
    document.querySelector("#myLives").textContent = lives;
}

// function random(rand){
//     console.log("rndState");
//     let stateNumber;
//     // stateNumber= Math.random()
//     // stateNumber=stateNumber*2;
//     // stateNumber=Math.floor(stateNumber);
//     // stateNumber=stateNumber+1;
//     // console.log(stateNumber)

//     stateNumber=Math.floor(Math.random()*rand)+1;
//     return stateNumber
//     // console.log(stateNumber)
// }

function randomNumber(rand) {
    return Math.floor(Math.random() * rand) + 1;
  }
  // 

// tæller hvor mange du fik rigtigt

// tæller hvor mange du fik forkert

// skjuler skærme
function hideAll(){
    document.querySelector("#level_complete").classList.add("hide")
    document.querySelector("#start").classList.add("hide")
    document.querySelector("#game_over").classList.add("hide")
    document.querySelector("#info").classList.add("hide")
    // tilføj flere skærme, lav "hide" klassen i css og dobbelt check at queries passer
}

function stopAll(){
    console.log("stopAll")

// -----------------------human classes-----------------------------
document.querySelector("#human1-sprite").classList="";
 
document.querySelector("#human2-sprite").classList="";
 
document.querySelector("#human3-sprite").classList="";

document.querySelector("#human1").classList=""

document.querySelector("#human2").classList=""

document.querySelector("#human3").classList=""

// ----------------------human eventListeners-----------------------
document.querySelector("#human1").removeEventListener("animationend", humanReset1);
document.querySelector("#human2").removeEventListener("animationend", humanReset2);
document.querySelector("#human3").removeEventListener("animationend", humanReset3);

// ---------------------button eventListeners-----------------------
document.querySelector("#btn-1-sprite").removeEventListener("mousedown", clickBtn1);

document.querySelector("#btn-2-sprite").removeEventListener("mousedown", clickBtn2);

document.querySelector("#btn-3-sprite").removeEventListener("mousedown", clickBtn3);

}

// tildel state til elementer (random number)<--------------|
                                                         // |-----se teams video fra 20/4
// tildel animation delay til elementer (random number)<----|