/**
 * A movement has a deltaX and deltaY
 */
class Movement {
    /**
     * creates a movment with delta x and y
     * @param {int} deltaX 
     * @param {int} deltaY 
     */
    constructor(deltaX,deltaY) {
        this._deltaX = deltaX;
        this._deltaY = deltaY;
    }

    /**
     * returns the deltaX
     */
    get deltaX(){
        return this._deltaX;
    }

    /**
     * returns the deltaY
     */
    get deltaY(){
        return this._deltaY;
    }

    /**
     * sets the deltaX
     */
    set x(val){
        this._deltaX = val;
    }

    /**
     * sets the deltaY
     */
    set y(val){
        this._deltaY = val;
    }

    /**
     * reverses the value of deltaX
     */
    reverseX(){
        this._deltaX *= -1;
    }

    /**
     * reverses the value of deltaY
     */
    reverseY(){
        this._deltaY *= -1;
    }

    /**
     * Accelerates the ball
     * @param {float} value 
     */
    speedUp(value){
        this._deltaX *= value;
        this._deltaY *= value;
    }
}