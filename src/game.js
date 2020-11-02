class Game {
    preloadGame () {
        //console.log('gamePreload works')
        this.backgroundImage = loadImage("https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?cs=srgb&dl=pexels-fwstudio-129731.jpg&fm=jpg")
        this.playerImage = loadImage("/assets/samba.png")
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
        this.obstacleDirections = [1, 0]

    }

    drawGame () {
        //console.log('drawGame works')
        this.background.drawBackground();
        this.player.drawPlayer();
        
        

        if (frameCount % 40 === 0) {
            console.log('print obstacle')
            const randomImage = this.obstaclesImages[Math.floor(Math.random() * this.obstaclesImages.length)];
            const randomDirection = this.obstacleDirections[Math.floor(Math.random() * this.obstacleDirections.length)];
            this.obstacles.push(new Obstacle (randomImage, randomDirection ));
            console.log(this.obstacles);
        }

        this.obstacles.forEach (function (item) {
            item.drawObstacle();
            item.moveHorizontaly();
        })



        
        //console.log(this.player.x, this.player.y)
    }


}


//preload different images 
//Setup we need to create an array of the images 
//when the obstacle is created, we need to assign a random image to it 
//imagesArr new Obstacle (imagesArr[Math.floor(Math.random()* imagesArr.length)])