
class Obstacle {
    constructor (image, direction) {
        this.x = 0;
        this.y = (Math.random() * height/10) * 8;;
        this.image = image;
        this.direction = direction;

    }

    drawObstacle () {
        // this.collision(game.player);
        image(this.image, this.x, this.y, 50, 50 )
    }

    moveHorizontaly() {
        if (this.direction === 1) {
            this.x += 1
        }

        if (this.direction === 0) {
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

    // collision(playerInfo) {
    //     let obstacleX = this.x + this.width/2
    //     let obstacleY = this.y + this.height/2
    //     let playerX = playerInfo.x + playerInfo.width / 2;
    //     let playerY = playerInfo.y + playerInfo.height / 2;

    //     if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
    //         return false;
    //     } else {
    //         game.player.score += 1
    //         console.log(`colision works and the player score is ${game.player.score}`)
    //         return true;
    //     }
    // }


}

// need a position (x, y) DONE
// need one image; DONE
// needs to be drawn by the game  DONE
// needs to be created DONE 
// need to be drawn DONE


// need a random poistion 
// its image needs to be pre-loaded
// obstacle needs to move
// the Y is variable, the X is ither 0 or width

//Questions
//How to create multiple obstacles 
//How to asign a random image to a obstacle

