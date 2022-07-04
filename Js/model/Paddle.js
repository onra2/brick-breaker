/**
* The paddle is what makes the ball bounce
* The paddle is moved with _left
*/
class Paddle extends Sprite {
    /**
    * Called when a new paddle object is created.
    * @param position : the base value (position) of the paddle
    */
    constructor(id, position, dimension) {
      super(id, "Raket", position, dimension);
    }

    /**
    * Returns the paddle position
    */
    get left(){
      return this.topLeft.x;
    }

    //checks if the mouse is inside the board (left)
    _isMouseInBoundsLeft(value){
      return 0 <= value;
    }

    //checks if the mouse is inside the board (right)
    _isMouseInBoundsRight(sceneRight, sceneLeft, value){
      return value <= sceneRight - this.dimension.width - 2 * GameBoardBorderWidth - sceneLeft;
    }

    /**
    * Changes the paddle position
    * @param value : the new postion
    */
    moveTo(value){
      let sceneLeft = $("#Board").offset().left;
      let sceneRight = $("#Board").offset().left + $("#Board").outerWidth();

      //check if our mouse is inside the board
      if (this._isMouseInBoundsLeft(value)) {
        if (this._isMouseInBoundsRight(sceneRight, sceneLeft, value)) {
          this.topLeft.x = value;//move to the value
        }
        else {
          //in case our mouse moves too fast left, position it in the corner
          this.topLeft.x = sceneRight - this.dimension.width - 2 * GameBoardBorderWidth - sceneLeft;
        }
      }
      else{
        //in case our mouse moves too fast left, position it in the corner
        this.topLeft.x = 0;
      }
    }
  }