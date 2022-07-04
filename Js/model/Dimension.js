/**
 * All sprites have dimensions
 */
class Dimension {
    constructor(width,height) {
        this._width = width;
        this._height = height;
    }

    /**
     * returns the width
     */
    get width(){
        return this._width;
    }

    /**
     * returns the height
     */
    get height(){
        return this._height;
    }
}