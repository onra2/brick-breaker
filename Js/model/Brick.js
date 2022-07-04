/**
 * A brick needs to be destroyed by the ball
 */
class Brick extends Sprite {
    /**
     * Constructor for Brick
     * @param {*} id The ID of the Brick
     * @param {Position} position The position
     * @param {Dimension} dimension The dimensions
     */
    constructor(id, position, dimension) {
        super(id, "Brick", position, dimension);
    }
}