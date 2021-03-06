

class Player {
    constructor (image, imageLevel2, imageLevel3) {
        this.x = width/10 * 5 - 25;
        this.y = height/10*9;

        this.width = 30
        this.height = 75

        this.score = 0;
        this.scoreLimit = 5

        this.image = image;
        this.imageLevel2 = imageLevel2; // not being used 
        this.imageLevel3 = imageLevel3; //not being used
    }


    drawPlayer() {

        if (game.level === 1) {
            clear()
            game.background.drawBackground();
            image(this.image,this.x, this.y, this.width, this.height)
        }

        else if (game.level === 2) {
            clear()
            game.background.drawBackground();
            image(this.image,this.x, this.y, this.width, this.height)
        }

        else if (game.level === 3) {
            clear()
            game.background.drawBackground();
            image(this.image,this.x, this.y, this.width, this.height)
        }
        



    }

    moveUp() {
        //console.log('moveUp works')
        this.y -= 10

    }

    moveDown() {
        //console.log('moveDown works')
        this.y += 10
    }

    moveLeft() {
        //console.log('moveLeft works')
        this.x -= 10

    }

    moveRight() {
        //console.log('moveRight works')
        this.x += 10
        
    }

    increaseScore() {
        this.score += 1
    }

    playerWin () { 
         //console.log('playerWin works')
         levelScoreStore = game.player.score
         game.drawRectangle()
        text(`You are a good 
dog walker!`, 375, 225)
        game.drawButton()
        text(`Next level`, 371.25, 393.75)  
        //console.log(levelScoreStore)  
    }

    playerLost () {
        //console.log('playerLost works')
        game.drawRectangle()
        textSize(32);
        text(`Ops, Samba 
ate too much! You 
are not a very good 
dog walker :(`, 375, 225)
        game.drawButton()
        text(`Try again`, 371.25, 393.75);
    }

    playerGoToNextLevel() {
        game.level += 1
        console.log(`the game level is ${game.level}`)
        game.setupGame()
    }

    playerTryAgain() {
        console.log('try again clicked')
        location.reload()
    }

    playerWonGame() {
        game.drawRectangle()
        textSize(24);
        text(`"Chapeau", 
you are one of the best 
dog walkers around! 
Are you ready to receive
a congrats directly from 
Samba? `, 375, 225)
        game.drawButton()
        text(`See congrats`, 371.25, 393.75)

    }

    growSamba () {

        if (this.width < 120) {
            this.width *= 2;
            this.height *= 2;
        }
        
    }

    shrinkSamba () {

        if (this.width > 30) {
            this.width /= 2;
            this.height /= 2;
        }
    }

    superSamba() {
        this.image = game.playerImageSuperSamba

    }

    normalSamba() {
        this.image = game.playerImage
    }

}