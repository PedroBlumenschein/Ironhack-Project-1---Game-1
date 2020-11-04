//test 
console.log('it works')


//variables
const game = new Game();



//p5 core functions 
function preload() {
    game.preloadGame();
}


function setup() {
    let canvas = createCanvas(1000, 800)
    game.setupGame();
}



function draw() {
    game.drawGame();

    //function keyPressed () {
        //move up
    if (keyIsDown(38)) {
        game.player.moveUp()
    }

    // move down
    if (keyIsDown(40) && game.player.y > -49) {
        game.player.moveDown()
    }

    // move left
    if (keyIsDown(37)) {
        game.player.moveLeft()

    }

    //move right
    if (keyIsDown(39)) {
        game.player.moveRight()
    }

    
    //}

    //keyPressed();
}


// functions & game

//go to next level
function mouseClicked() {
    if (mouseX > 385 && mouseX < 605 && mouseY > 500 && mouseY < 550 && game.player.y < -30 ) {
        game.player.playerGoToNextLevel()
    }
}

// function mouseClicked() {
//     if (mouseX > 385 && mouseX < 605 && mouseY > 500 && mouseY < 550 && game.player.score > 0) {
//         game.player.playerTryAgain()
//     }
// }




