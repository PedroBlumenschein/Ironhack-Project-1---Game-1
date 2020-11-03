class Background {
    constructor () {
        this.image;
    }

    drawBackground() {
        image(this.image, 0, 0, 1000, 800)
    }

    setWinBackground () {
        this.image = game.playerWonImage
    }
    
}