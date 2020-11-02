

class Player {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }


    drawPlayer() {
        clear()
        game.background.drawBackground();
        rect(this.x, this.y, 55, 55)
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






}