/**
* Controller for the entire game.
*/
class GameCtrl {
    /**
    * Creates a controller for game and view
    * @param {Game} game : the game
    * @param {View} view : the view
    */
    constructor(game, view) {
        this._game = game;
        this._view = view;
        this._ballCtrl = new BallCtrl(game,view);
        this._paddleCtrl = new PaddleCtrl(game, view);

        //sets the css for the GameBoard
        $(".GameBoard").css("width", GameBoardWidth);
        $(".GameBoard").css("height", GameBoardHeight);
        $(".GameBoard").css("border-width", GameBoardBorderWidth);
        $(".Player").css("width", GameBoardWidth);

        /**
         * Create all sprites like a ball, paddle and bricks, then add them to the view
         */
        let BallSprite = new Sprite(this._game.ball.id, this._game.ball.type, this._game.ball.topLeft, this._game.ball.dimension);
        let PaddleSprite = new Sprite(this._game.paddle.id, this._game.paddle.type, this._game.paddle.topLeft, this._game.paddle.dimension);
        this._view.add(BallSprite);
        this._view.add(PaddleSprite);
        this._view.addAll(this._game.brickArray);
        this._view.update(BallSprite);
        this._view.update(PaddleSprite);
        this._view.updateLives(this._game.player.lives);
    }

    /**
     * method to make the game start
     */
    play(){
        this.ballStartWait();
    }

    /**
     * Wait on user input
     */
    ballStartWait() {
        this._view.ShowMessage("Click to start");
        $(document).mouseup(() => this.ballStart());
    }        

    /**
     * Starts the ball
     */
    ballStart() {
        $(document).off("mouseup");
        this._view.HideMessage();
        this._ballCtrl.start();
    }

    /**
     * method to stop the game
     */
    stop(){
        this._ballCtrl.stop();
    }
}