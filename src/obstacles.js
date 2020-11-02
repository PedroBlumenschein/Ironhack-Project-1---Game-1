
class Obstacle {
    constructor (image, direction) {
        this.x = 0;
        this.y = (Math.random() * height/2);;
        this.image = image;
        this.direction = direction;

    }

    drawObstacle () {
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

    placeObstacle() {
        if (this.direction === 1) {
            this.x = 0;
        }
        if (this.direction === 0) {
            this.x = width;
        }
    }

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

