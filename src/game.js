class Game {
    constructor () {
        this.level = 1;
    }

    preloadGame () {
        //------------------Background Images----------------------------
        this.level1BackgroundImage = loadImage("/assets/backgroundWithPark.png")
        this.level2BackgroundImage = loadImage("/assets/BackgroundLevel2.png")
        
        //----------------------Player images----------------------------
        this.playerImage = loadImage("/assets/Samba2.png")
        this.playerImageLevel2 = loadImage("/assets/unicorn.png")
        
        //---------------------obstacle images---------------------------
        this.obstacleImage1 = loadImage("/assets/hamburger_1f354.png")
        this.obstacleImage2 = loadImage("/assets/shaved-ice_1f367.png")
        this.obstacleImage3 = loadImage("/assets/chocolate-bar_1f36b.png")
        this.obstacleImage4 = loadImage("/assets/doughnut_1f369.png")

        // this.onbstacleImage5 = loadImage("")
        // this.onbstacleImage6 = loadImage("")
        // this.onbstacleImage7 = loadImage("")
        // this.onbstacleImage8 = loadImage("")
        
        //---------------------Win/lose Images---------------------------
        this.playerWonImage = loadImage("/assets/SambaGif.gif")
    }



    setupGame () {

        // ---------------------Classes Setup---------------------------
        this.background = new Background(this.level1BackgroundImage, this.level2BackgroundImage)
        this.player = new Player(this.playerImage, this.playerImageLevel2)
     

        // -------------------Classes Images Setup----------------------
        //this.background.image = this.level1BackgroundImage
        //this.player.image = this.playerImage


        //-----------------------Arrays Setup---------------------------
        this.obstacles = [];
        
        this.obstaclesImages = [this.obstacleImage1, this.obstacleImage2, this.obstacleImage3, this.obstacleImage4]
        
        this.obstacleDirections = [width, -20]

        

    }

    drawGame () {

        console.log('drawGame works')
        

        // ---------------------Level 1---------------------------------
        if (this.level === 1) {

            if (this.player.y < -50) {
                this.player.playerWin()

    
            }
    
            else if (this.player.score > 5) {
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
                    if (item.collision(this.player) || item.x < -100) {
                        return false;
                    } else {
                        return true;
                    }
                })
            }
            
        }

        // ---------------------Level 2---------------------------------

        else if (this.level === 2) {

            if (this.player.y < -50) {
                this.player.playerWin()

    
            }
    
            else if (this.player.score > 5) {
                this.player.playerLost()

            } 
    
            else {
                console.log(this.player.y)

                //this.background.image = this.level2BackgroundImage
    
    
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
                    if (item.collision(this.player) || item.x < -100) {
                        return false;
                    } else {
                        return true;
                    }
                })
            }
            
        }





        



    }

    drawRectangle() {
        //this is the transparent black layer
        // fill(0, 0, 0, 50);
        // noStroke()
        // rect(-10, -10, width+100, height+100, 20, 20, 20, 20);
        // fill(255, 255, 255, 100);
        // textSize(48);
        // textAlign(CENTER,CENTER)

        fill('#FFFFFF');
        noStroke()
        const popup = rect(200, 150, width/10*6, height/10*6, 12, 12, 12, 12);

        const popupFill = fill(68, 68, 68, 1000);
        const popupTextSize = textSize(48);
        const popupTextFont = textFont('Montserrat')
        const popupTextAlign = textAlign(CENTER,CENTER)
    }

    drawButton() {
        const buttonFill = fill('rgba(166,68, 214, 1)');
        const button = rect(385, 500, 220, 50, 100, 100, 100, 100);
        const buttonTextFill = fill('#F0F0EC');
        const buttonTextSize = textSize(24);
    }

}

