class Game {
    constructor () {
        this.level = 1;
    }

    preloadGame () {

        //------------------Background Images----------------------------
        this.level1BackgroundImage = loadImage("./assets/Level1BackgroundImage.png")
        this.level2BackgroundImage = loadImage("./assets/Level2Background.png")
        this.level3BackgroundImage = loadImage("./assets/Backgroundtest.png")
        
        //----------------------Player images----------------------------
        this.playerImage = loadImage("./assets/Samba2.png")
        this.playerImageLevel2 = loadImage("./assets/unicorn.png")
        this.playerImageLevel3 = loadImage("./assets/Samba2.png")
        
        //---------------------obstacle images---------------------------
        
        //food
        this.obstacleImage1 = loadImage("./assets/hamburger_1f354.png")
        this.obstacleImage2 = loadImage("./assets/shaved-ice_1f367.png")
        this.obstacleImage3 = loadImage("./assets/chocolate-bar_1f36b.png")
        this.obstacleImage4 = loadImage("./assets/doughnut_1f369.png")

        //sweets
        this.obstacleImage5 = loadImage("./assets/burrito.png")
        this.obstacleImage6 = loadImage("./assets/sushiObstacle.png")
        this.obstacleImage7 = loadImage("./assets/watermelonOBstacle.png")

        //night
        this.obstacleImage8 = loadImage("./assets/beer2.png")
        this.obstacleImage9 = loadImage("./assets/pill.png")
        this.obstacleImage10 = loadImage("./assets/mushroomObstacle.png")

        //coronavirus
        this.obstacleImage11 = loadImage("./assets/coronavirus.png")

        
        //---------------------Win/lose Images---------------------------
        this.playerWonImage = loadImage("./assets/SambaGif.gif")
    }



    setupGame () {

        // ---------------------Classes Setup---------------------------
        this.background = new Background(this.level1BackgroundImage, this.level2BackgroundImage, this.level3BackgroundImage)
        this.player = new Player(this.playerImage, this.playerImageLevel2, this.playerImageLevel3)
     

        // -------------------Classes Images Setup----------------------
        //this.background.image = this.level1BackgroundImage
        //this.player.image = this.playerImage


        //-----------------------Arrays Setup---------------------------
        this.obstacles = [];
        
        this.obstaclesImagesLevel1 = [
            this.obstacleImage1, 
            this.obstacleImage2, 
            this.obstacleImage3, 
            this.obstacleImage4
            ]
        
        this.obstaclesImagesLevel2 = [
            this.obstacleImage1, 
            this.obstacleImage2, 
            this.obstacleImage3, 
            this.obstacleImage4,
            this.obstacleImage5,
            this.obstacleImage6,
            this.obstacleImage7
            ]

        this.obstaclesImagesLevel3 = [
            this.obstacleImage8,
            this.obstacleImage9,
            this.obstacleImage10
            ]
        

        
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
                    const randomImage = this.obstaclesImagesLevel1[Math.floor(Math.random() * (this.obstaclesImagesLevel1.length))];
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
                
                if (frameCount % 8 === 0) {
                    console.log('print obstacle')
                    const randomImage = this.obstaclesImagesLevel2[Math.floor(Math.random() * this.obstaclesImagesLevel2.length)];
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

        // ---------------------Level 3---------------------------------

        else if (this.level === 3) {

            if (this.player.y < -50) {
                this.player.playerWonGame()

    
            }
    
            else if (this.player.score > 5) {
                this.player.playerLost()

            } 
    
            else {
                console.log(this.player.y)

                //this.background.image = this.level2BackgroundImage
    
    
                this.background.drawBackground();
                this.player.drawPlayer();
                
                if (frameCount % 4 === 0) {
                    console.log('print obstacle')
                    const randomImage = this.obstaclesImagesLevel3[Math.floor(Math.random() * this.obstaclesImagesLevel3.length)];
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

