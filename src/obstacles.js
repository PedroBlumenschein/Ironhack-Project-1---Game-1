
class Obstacle {
    constructor (image, direction) {
        
        this.direction = direction;

        this.x = direction;
        this.y = (Math.random() * height/10) * 8;

        this.speed = frameCount % 10;

        this.width = 35;
        this.height = 35;

        this.image = image;
        

    }

    drawObstacle () {
        image(this.image, this.x, this.y, this.width, this.height)
        this.collision(game.player);
        
    }

    moveHorizontaly() {
        if (game.level === 1) {
            if (this.direction === -20) {
                this.x += 5
            }
    
            if (this.direction === width) {
                this.x -= 5
            }
        }

        else if (game.level === 2) {
            if (this.direction === -20) {
                this.x += 10
            }
    
            if (this.direction === width) {
                this.x -= 10
            }
        }

        else if (game.level === 3) {
            if (this.direction === -20) {
                this.x += 5
            }
    
            if (this.direction === width) {
                this.x -= 5
            }
        }
    }


    collision(playerInfo) {
        let obstacleX = this.x + this.width/2
        let obstacleY = this.y + this.height/2
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;

        if (dist(obstacleX, obstacleY, playerX, playerY) > 40) {
            return false;
        } else {
            game.player.increaseScore();
            //console.log(`colision works and the player score is ${game.player.score}`)
            return true;
        }
    }
}

