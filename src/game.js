class Game {
    constructor () {
        this.level = 1;
    }

    preloadGame () {
        //console.log('gamePreload works')
        this.backgroundImage = loadImage("/assets/backgroundWithPark.png")
        this.playerImage = loadImage("/assets/Samba2.png")
        this.obstacleImage1 = loadImage("/assets/hamburger_1f354.png")
        this.obstacleImage2 = loadImage("/assets/shaved-ice_1f367.png")
        this.obstacleImage3 = loadImage("/assets/chocolate-bar_1f36b.png")
        this.obstacleImage4 = loadImage("/assets/doughnut_1f369.png")
        this.playerWonImage = loadImage("/assets/SambaGif.gif")
    }



    setupGame () {
        //console.log('setupGame works')
        this.background = new Background()
        this.player = new Player(width/10 *4,height/10*9)
        // this.obstacle = new Obstacle (-width/10, 100)
        this.background.image = this.backgroundImage
        this.player.image = this.playerImage

        this.obstacles = [];
        this.obstaclesImages = [this.obstacleImage1, this.obstacleImage2, this.obstacleImage3, this.obstacleImage4]
        this.obstacleDirections = [width, 0]

    }

    drawGame () {

        // -------------------LEVEL 1----------------------------------
        if (this.level === 1) {

            if (this.player.y < -50) {
                this.player.playerWin()
    
            }
    
            else if (this.player.score > 1) {
                this.player.playerLost()
                
            } 
    
            else {
                console.log(this.player.y)
    
    
                this.background.drawBackground();
                this.player.drawPlayer();
                
                if (frameCount % 10 === 0) {
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
}

