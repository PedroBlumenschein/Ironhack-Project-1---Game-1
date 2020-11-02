//test 
console.log('it works')


//variables
const game = new Game();



//p5 core functions 
function preload() {
    game.preloadGame();
}


function setup() {
    let canvas = createCanvas(500, 600)
    game.setupGame();
}



function draw() {
    game.drawGame();
}

// functions & game

function keyPressed () {
    //move up
    if (keyCode === 38) {
        game.player.moveUp()
    }

    // move down
    if (keyCode === 40) {
        game.player.moveDown()
    }

    // move left
    if (keyCode === 37) {
        game.player.moveLeft()

    }

    //move right
    if (keyCode === 39) {
        game.player.moveRight()
    }
}

