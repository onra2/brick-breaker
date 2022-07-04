/*
* A player has lives and a score
*/
class Player {
    constructor() {
        this._score = 0;
        this._lives = PlayerLives;
    }

    /**
     * returns the score
     */
    get score(){
        return this._score;
    }

    /**
     * returns the lives
     */
    get lives(){
        return this._lives;
    }

    /**
     * Add points to score
     * @param {int} points 
     */
    addToScore(points){
        this._score += points;
    }

    /**
     * remove one live
     */
    substractLive(){
        this._lives--;
    }

    addLives(amount){
        this._lives += amount;
    }

    /**
     * returns true if the player has health left
     */
    isAlive(){
        return this._lives > 0;
    }
}