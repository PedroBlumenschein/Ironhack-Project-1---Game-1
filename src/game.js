class Game {
    preloadGame () {
        console.log('gamePreload works')
        this.backgroundImage = loadImage("https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?cs=srgb&dl=pexels-fwstudio-129731.jpg&fm=jpg")
    }



    setupGame () {
        console.log('setupGame works')
        this.background = new Background()
        this.player = new Player(width/10 *4,height/10*9)
        this.background.image = this.backgroundImage
    }



    drawGame () {
        console.log('drawGame works')
        this.background.drawBackground();
        this.player.drawPlayer();
        console.log(this.player.x, this.player.y)
    }


}