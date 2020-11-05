class Background {
    constructor (image, imageLevel2, imageLevel3) {
        this.image = image
        this.imageLevel2 = imageLevel2
        this.imageLevel3 = imageLevel3
    }

    drawBackground() {
        if (game.level === 1) {
            image(this.image, 0, 0, 1000, 800)
        }
        else if (game.level === 2) {
            image(this.imageLevel2, 0, 0, 1000, 800)
        }
        else if (game.level === 3) {
            image(this.imageLevel3, 0, 0, 1000, 800)
        }
        
    }

}