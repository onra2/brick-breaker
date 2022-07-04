/**
* Controller for the paddle movement.
* It make it follow the mouse.
*/
class PaddleCtrl {
    /**
    * Display the paddle and start controlling it with the mouse.
    * @param {Game} game : the game
    * @param {View} view : the view
    */
    constructor(game,view) {
        this._game = game;
        view.update(new Sprite(this._game.paddle.id, this._game.paddle.type, this._game.paddle.topLeft, this._game.paddle.dimension));
        $(document).mousemove((evt) => this.moveMouse(game,view,evt));
    }

    /**
    * Called when the mouse is moved.
    * It moves the paddle (horizontally) where the mouse is.
    * @param {Game} game : the game
    * @param {View} view : the view
    * @param {MouseEvent} evt : the mouse event
    */
    moveMouse(game, view, evt) {
        game.paddleMove(evt.clientX - view.sceneLeft - GameBoardBorderWidth - (game.paddle.dimension.width / 2));//center mouse
        view.update(new Sprite(this._game.paddle.id, this._game.paddle.type, this._game.paddle.topLeft, this._game.paddle.dimension));//display the paddle
    }
}