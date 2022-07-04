/*
* Contrôleur de la balle.
* Propose des méthodes pour démarrer/arrêter la balle et la faire bouger.
*/
class BallCtrl {
    /**
    * @param {Ball} ball - la balle à contrôler
    * @param {View} view - la vue
    */
    constructor(game,view) {
        this._game = game;
        this._view = view;
        view.update(new Sprite(this._game.ball.id, this._game.ball.type, this._game.ball.topLeft, this._game.ball.dimension));
    }

    /** Démarre la balle. */
    start() {
        this._moveListener = setInterval(()=>this.move(), 10);
    }

    /** Déplace la balle d’un pas (défini par son mouvement) et rafraichit la vue. */
    move() {
        let WallsToDestroy = this._game.ballMove();//Array of walls that got touched by the ball
        let BallSprite = new Sprite(this._game.ball.id, this._game.ball.type, this._game.ball.topLeft, this._game.ball.dimension);
        this._view.update(BallSprite);//update ball pos
        this._view.removeByArray(WallsToDestroy);//Destroy the walls in that array
        this._view.updateScore(this._game.player.score);//udpdate the score

        //check if we lost or won
        if (this._game.isLose()) {
            this._game.player.substractLive();//substract one live
            if (!this._game.player.isAlive()) {//checks if we are dead
                this._view.ShowMessage("You lost :(");
                this.stop();//stop the game
            }
            else{
                this.stop();//stop the game
                this._view.ShowMessage("Click to start");
                $(document).mouseup(() => this.ballStart());
                this._game.resetBall();
                this._view.update(BallSprite);
            } 
        }
        if (this._game.isWin()) {
            this.stop();
            this._view.ShowMessage("Great! Click to start a new level");
            this._game.nextLevel();//increment level by 1 and adds a live
            this._view.updateLevel(this._game.currentLevel);
            $(document).mouseup(() => this.ballStart());
            this._game.resetBall();
            this._view.update(BallSprite);
            this._view.addAll(this._game.brickArray);
        }

        this._view.updateLives(this._game.player.lives);//update lives
    }

    /**
     * Starts the ball
     */
    ballStart() {
        $(document).off("mouseup");
        this._view.HideMessage();
        this.start();
    }

    /** Arrête la balle. */
    stop() {
        clearInterval(this._moveListener);
    }
}