/**
 * A sprite has an Id, a type, a topleft position and a dimension
 */
class Sprite {
    /**
     * constuctor for sprite
     * @param {String} id a number/unique id
     * @param {String} type a type
     * @param {Position} topLeft the position of the sprite
     * @param {Dimension} dimension  the dimensions of the sprite
     */
    constructor(id, type, topLeft, dimension) {
        this._id = id;
        this._type = type;
        this._topLeft = topLeft;
        this._dimension = dimension;
    }

    /**
     * returns the topLeft position
     */
    get topLeft(){
        return this._topLeft;
    }

    /**
     * returns the dimension
     */
    get dimension(){
        return this._dimension;
    }

    /**
     * returns the id
     */
    get id(){
        return this._id;
    }

    /**
     * returns the type
     */
    get type(){
        return this._type;
    }

    /**
     * Returns true if another spite is colliding with the current sprite
     * @param {Sprite} Othersprite 
     */
    isColliding(Othersprite){
        var ThisLeft = this._topLeft.x;
        var ThisRight = this._topLeft.x + this._dimension.width;
        var ThisBottom = this._topLeft.y;
        var ThisTop = this._topLeft.y + this._dimension.height;

        var OtherLeft = Othersprite.topLeft.x;
        var OtherRight = Othersprite.topLeft.x + Othersprite.dimension.width;
        var OtherBottom = Othersprite.topLeft.y;
        var OtherTop = Othersprite.topLeft.y + Othersprite.dimension.height;

        var notColliding = ( ThisTop < OtherBottom || ThisBottom > OtherTop || ThisRight < OtherLeft || ThisLeft > OtherRight );
        return !notColliding;
    }
}