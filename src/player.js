

class Player {
    constructor (x, y) {
        this.x = x;
        this.y = y;

        this.width = 40
        this.height = 100

        this.image;

        this.score = 0;
    }


    drawPlayer() {
        clear()
        game.background.drawBackground();
        image(this.image,this.x, this.y, 40, 100)

    }

    moveUp() {
        console.log('moveUp works')
        this.y -= 10

    }

    moveDown() {
        console.log('moveDown works')
        this.y += 10
    }

    moveLeft() {
        console.log('moveLeft works')
        this.x -= 10

    }

    moveRight() {
        console.log('moveRight works')
        this.x += 10
        
    }

    increaseScore() {

        this.score += 1

        const scoreDOMValue = this.score
        const scoreDOMfield = document.querySelector('.score span') 
        scoreDOMfield.innerHTML = scoreDOMValue

    }

    playerWin () {
        console.log('playerWin works')

    }


    playerLost () {
        console.log('playerLost works')
    }






}