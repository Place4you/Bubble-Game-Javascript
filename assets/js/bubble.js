function play(){
    let timer = 10;
    let score = 0;
    let rnhit = 0;
    let interval; // Declare interval variable


    function runTimer() {
        interval = setInterval(function() {
            if (timer > 0) {
                console.log(timer);
                timer--;
                document.querySelector("#game-timer").textContent = timer;
                document.getElementById("game-over").style.display = "none";
            } else {
                clearInterval(interval); // Clear the interval
                document.querySelector("#btmp").innerHTML = "";
                document.getElementById("game-over").style.display = "block";
                document.querySelector("#game-over h2").innerHTML = `Your Score = ${score}`;
            }
        }, 1000);
    }


    document.querySelector("#game-over button").onclick = function() {
        resetGame(); // Reset the game state
        document.getElementById("game-over").style.display = "none";
        startgame(); // Start the game again
    };

    // ...

    function resetGame() {
        clearInterval(interval); // Clear the interval
        timer = 10;
        score = 0;
        rnhit = 0;
        document.querySelector("#game-timer").textContent = timer;
        document.querySelector("#score").textContent = score;
        document.querySelector("#hitcount").textContent = rnhit;
    }




//Calling Declration
function makeBubble(){
    let clutter = "";

    for(var i=0;i<=150;i++){
        var random = Math.floor(Math.random()*10);
       clutter +=   `<div id="bubble">${random}</div>`
    
    }
    document.getElementById("btmp").innerHTML = clutter
    
}




function hitcunt(){
    for(let i = 0;i<10;i++)
    {
        rnhit = Math.floor(Math.random()*10) 
        document.querySelector("#hitcount").textContent = rnhit;
    }
}

function incresescore(){
   document.querySelector("#btmp")
   .addEventListener("click", function(dets){
    if(timer > 0){
        let tomatch = Number(dets.target.textContent);
        if(rnhit == tomatch){
            score += 10;
            document.querySelector("#score").textContent = score;
            makeBubble();
            hitcunt();
        }
    }
    else{

    }

   })
}


function startgame(){
    // resetvar();
    makeBubble();
    runTimer();
    hitcunt();
    incresescore();
   
    // over();
}

//Calling Function
startgame();

}



play();

