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

    function keyPressed () {
        //move up
        if (keyIsDown(38)) {
            game.player.moveUp()
        }
    
        // move down
        if (keyIsDown(40)) {
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
    }

    keyPressed();
}

// functions & game



