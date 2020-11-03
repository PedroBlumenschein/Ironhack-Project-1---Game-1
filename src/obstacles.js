
class Obstacle {
    constructor (image, direction) {
        
        this.direction = direction;

        this.x = direction;
        this.y = (Math.random() * height/10) * 8;;

        this.width = 50
        this.height = 50

        this.image = image;
        

    }

    drawObstacle () {
        image(this.image, this.x, this.y, 50, 50 )
        this.collision(game.player);
        
    }

    moveHorizontaly() {
        if (this.direction === 0) {
            this.x += 1
        }

        if (this.direction === width) {
            this.x -= 1
        }
    }

    //this function is not being used anywhere
    placeObstacle() {
        if (this.direction === 0) {
            this.x = width;
        }

        if (this.direction === 1) {
            this.x = 0;
        }
        
    }

    collision(playerInfo) {
        let obstacleX = this.x + this.width/2
        let obstacleY = this.y + this.height/2
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;

        if (dist(obstacleX, obstacleY, playerX, playerY) > 15) {
            return false;
        } else {
            game.player.increaseScore();
            console.log(`colision works and the player score is ${game.player.score}`)
            return true;
        }
    }
}

//Directions
// - Need to create an array with the direction possibilities 
// - Randomly assign a starting point to the obstacle when creating it (same as we are doing for the images)
// - Depending on the random direction applied, need to set x++ or x--.

//Expected behaviour: Depending on a randomly assigned direction, 
//the obstacle should start left and go right, or start right and go left


//Colision RESOLVED (Pending Doubt)
// - need to check if the distance between the obstacle and player has reached a certain threshold, 
// and if yes, THEN: player.score += 1 AND return true (the value returned will be used for the filter)
// - Need to hide the obstacles that have colided with the player (filter them out)
// - Why does this only work with an arrow function and not with "function (item)"? 



//Key Pressed
// ?