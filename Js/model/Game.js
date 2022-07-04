/**
 * Game controls the whole game
 */
class Game {
    /**
     * initializes the css and creates a paddle and a ball
     */
    constructor() {
        this._ball = new Ball("BalleId", new Position(this._randomInteger(0, GameBoardWidth - ballWidth), GameBoardHeight / 3), new Movement(this._randomInteger(-2, 3),2), new Dimension(ballWidth, ballHeight));
        this._paddle = new Paddle("RaketId", new Position(420, 0), new Dimension(paddleWidth, paddleHeight));
        this._brickArray = this._makeBrickArray();
        this._player = new Player();
        this._currentLevel = 1;
    }

    /**
     * Make all bricks, give them a position, ID, and a dimension
     */
    _makeBrickArray(){
        var bricks = [];
        var y = 500;
        let countID = 0;
        for (let j = 0; j < WallRowCount; j++) {
            var x = 0;
            for (let i = 0; i < WallLenghtCount; i++) {
                bricks.push(new Brick(countID, new Position(x, y), new Dimension(WallWidth, WallHeight)));
                x += WallWidth;
                countID++;
            }
            y -= WallHeight;
        }
        return bricks;
    }

    /**
     * returns an integer between two values
     * @param {*} min a minimum value the integer has to be
     * @param {*} max the maximum value the integer can be
     */
    _randomInteger(min, max) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (num === 0) {
            num++;
        }
        return num;
    }

    /**
     * returns the ball
     */
    get ball(){
        return this._ball;
    }

    /**
     * returns the paddle
     */
    get paddle(){
        return this._paddle;
    }

    /**
     * returns all the bricks in an array
     */
    get brickArray(){
        return this._brickArray;
    }

    /**
     * returns the player
     */
    get player(){
        return this._player;
    }

    /**
     * returns the current level
     */
    get currentLevel(){
        return this._currentLevel;
    }

    /**
     * increment level by 1
     */
    nextLevel(){
        this._currentLevel++;
        this._player.addLives(1);
        this._brickArray = this._makeBrickArray();
    }

    /**
     * moves the paddle
     * @param {int} centerX the coordinate 
     */
    paddleMove(centerX){
        this._paddle.moveTo(centerX);
    }

    /**
     * Checks if the ball is colliding with a wall. 
     * If it's colliding, that wall should be added to an array and then be deleted.
     * returns an array of all walls to be deleted
     */
    _isWallCollidingWithBall(){
        let touched = [];
        for (let i = 0; i < this._brickArray.length; i++) {
            const brick = this._brickArray[i];
            if (this._brickArray[i] != null) {
                let currentBrick = new Sprite(brick.id, brick.type, brick.topLeft, brick.dimension);
                if (this._ball.isColliding(currentBrick)) {
                    touched.push(currentBrick);
                    delete this._brickArray[i];
                }
            }
        }
        return touched;
    }

    /**
     * returns true if we hit the ground with the ball
     */
    isLose(){
        return this._ball.topLeft.y - GameBoardBorderWidth < 0
    }

    /**
     * returns true if all bricks are destroyed
     */
    isWin(){
        for (let i = 0; i < this._brickArray.length; i++) {
            const element = this._brickArray[i];
            if (element != null) {
                return false;
            }
        }
        return true;
    }

    resetBall() {
        this._ball.position.x = this._randomInteger(0, GameBoardWidth - ballWidth);
        this._ball.position.y = GameBoardHeight / 3;
        this._ball.movement.x = this._randomInteger(-2, 3);
        this._ball.movement.y = 2;
    }

    /**
     * moves the ball and checks if it hits the paddle, moves accordingly
     */
    ballMove(){
        this._ball.move();
        //if the paddle touches the ball, make the ball bounce
        if (this._ball.isColliding(new Sprite(this._paddle.id, this._paddle.type, this._paddle.topLeft, this._paddle.dimension))) {
            this._ball.movement.reverseY();
        }

        let WallsToDestroy = this._isWallCollidingWithBall();//contains an array of walls to destroy
        if (WallsToDestroy.length > 0) {
            //if we hit any wall, make the ball bounce
            this._ball.movement.reverseY();
            this._ball.movement.speedUp(1.015 + (WallsToDestroy.length * 0.01));
            this._player.addToScore(WallsToDestroy.length * 10);
        }

        return WallsToDestroy;//to be used in BallCtrl
    }
}