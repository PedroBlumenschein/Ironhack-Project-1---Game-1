

class Player {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.image;
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






}