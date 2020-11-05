//test 
console.log('it works')


//variables
const game = new Game();



//p5 core functions 
function preload() {
    game.preloadGame();
}


function setup() {
    let canvas = createCanvas(750, 600)
    canvas.parent('canvasContainer')
    game.setupGame();
}



function draw() {
    game.drawGame();

    //function keyPressed () {
        //move up
    if (keyIsDown(38) && game.player.y > -35) {
        game.player.moveUp()
    }

    // move down
    if (keyIsDown(40) && game.player.y < height-50 && game.player.y > -36) {
        game.player.moveDown()
    }

    // move left
    if (keyIsDown(37) && game.player.x > 0) {
        game.player.moveLeft()

    }

    //move right
    if (keyIsDown(39) && game.player.x < width-20) {
        game.player.moveRight()
    }

    
    //}

    //keyPressed();
}


// functions & game


//mouse click on pop up inside
function mouseClicked() {
    if (mouseX > 288.75 && mouseX < 453.75 && mouseY > 375 && mouseY < 412.5 && game.player.y < -30 && game.level === 3 && game.player.score < game.player.scoreLimit) {
        addWinningGif()
    }

    else if (mouseX > 288.75 && mouseX < 453.75 && mouseY > 375 && mouseY < 412.5 && game.player.y < -30 && game.player.score < game.player.scoreLimit) {
        game.player.playerGoToNextLevel()
    }
    
    else if (mouseX > 288.75 && mouseX < 453.75 && mouseY > 375 && mouseY < 412.5 && game.player.score >= game.player.scoreLimit) {
                game.player.playerTryAgain()
            }
    
}

//grow and shrink Samba
function keyPressed() {
    if (keyCode === 71) {
        game.player.growSamba();
    }

    else if (keyCode === 83) {
        game.player.shrinkSamba();
    }

}


function addWinningGif () {
    const mainContainer = document.querySelector('#canvasContainer')
    const gif = '<div id="gifContainer"> <img class="sambaImage" src="./assets/SambaGif.gif" alt="samba gif is broken"> <br> </img> <button class="gifButton" value="Play again" onClick="window.location.reload()" > Play again!</button> <div>'

    mainContainer.innerHTML = gif;

    console.log(mainContainer) 
}





