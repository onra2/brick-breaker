/**
 * A ball moves with a position and goes in a direction that depends of the movment
 */
class Ball extends Sprite {
    /**
     * Constructor for ball, defines 2 variables
     * @param {Position} position : the position
     * @param {Movement} movement : the movement
     * @param {Dimension} dimension : the dimension
     */
    constructor(id,position,movement,dimension) {
        super(id, "Balle", position, dimension);
        this._movement = movement;
    }

    /**
     * returns the current ball position
     */
    get position(){
        return this.topLeft;
    }

    /**
     * returns the current movement
     */
    get movement(){
        return this._movement;
    }

    /**
     * moves the ball
     */
    move(){
        if(this.topLeft.x + this.dimension.width > GameBoardWidth){//right side
            this._movement.reverseX();
        }
        if(this.topLeft.x - GameBoardBorderWidth < 0){//left side
            this._movement.reverseX();
        }
        if(this.topLeft.y + this.dimension.height > GameBoardHeight){//top side
            this._movement.reverseY();
        }
        if(this.topLeft.y - GameBoardBorderWidth < 0){//bottom side
            this._movement.reverseY();
        }
        
        this.topLeft.x += this._movement.deltaX;
        this.topLeft.y += this._movement.deltaY;
    }
}