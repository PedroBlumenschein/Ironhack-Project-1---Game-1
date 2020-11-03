class Game {
    preloadGame () {
        //console.log('gamePreload works')
        this.backgroundImage = loadImage("/assets/ilustratedBackground2.png")
        this.playerImage = loadImage("/assets/Samba2.png")
        this.obstacleImage1 = loadImage("/assets/chicken.png")
        this.obstacleImage2 = loadImage("/assets/burrito.png")
        this.obstacleImage3 = loadImage("/assets/steak.png")
    }



    setupGame () {
        //console.log('setupGame works')
        this.background = new Background()
        this.player = new Player(width/10 *4,height/10*9)
        // this.obstacle = new Obstacle (-width/10, 100)
        this.background.image = this.backgroundImage
        this.player.image = this.playerImage

        this.obstacles = [];
        this.obstaclesImages = [this.obstacleImage1, this.obstacleImage2, this.obstacleImage3]
        this.obstacleDirections = [width, 0]

    }

    drawGame () {

        if (this.player.y < -50) {
            this.player.playerWin()

        }
        else if (this.player.score > 4) {
            this.player.playerLost()
            
        } 
        else {
            console.log(this.player.y)


            this.background.drawBackground();
            this.player.drawPlayer();
            
            if (frameCount % 40 === 0) {
                console.log('print obstacle')
                const randomImage = this.obstaclesImages[Math.floor(Math.random() * this.obstaclesImages.length)];
                const randomDirection = this.obstacleDirections[Math.floor(Math.random() * this.obstacleDirections.length)];
                this.obstacles.push(new Obstacle (randomImage, randomDirection));
                
                console.log(this.obstacles);
            }
    
            this.obstacles.forEach (function (item) {
                item.drawObstacle();
                item.moveHorizontaly();
            })
    
    
            this.obstacles = this.obstacles.filter( (item) => {
                if (item.collision(this.player) || item.x < 0) {
                    return false;
                } else {
                    return true;
                }
            })
        }



    }
}

