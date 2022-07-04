/**
 * A position has a x and y
 */
class Position {
    /**
     * creates a position with x and y
     * @param {int} x 
     * @param {int} y 
     */
    constructor(x,y) {
        this._x = x;
        this._y = y;
    }

    /**
     * returns the x
     */
    get x(){
        return this._x;
    }

    /**
     * returns the y
     */
    get y(){
        return this._y;
    }

    /**
     * sets x
     */
    set x(val){
        this._x = val;
    }

    /**
     * sets y
     */
    set y(val){
        this._y = val;
    }
}