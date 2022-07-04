/**
* Displays the game
*/
class View {
    /**
    * Getter for the left side distance of our board
    */
    get sceneLeft() {
      return $("#Board").offset().left;
    }

    /**
    * Getter for the right side distance of our board
    */
    get sceneRight() {
      return $("#Board").offset().left + $("#Board").outerWidth();
    }

    /**
    * Adds a sprite to the game
    * @param {Sprite} sprite : the sprite to be added
    */
    add(sprite){
      let x = $("<span>").attr("class", sprite.type).attr("id", sprite.id).css("width", sprite.dimension.width).css("height", sprite.dimension.height);
      $("#Board").append(x);
    }

    /**
     * Adds all sprites from an array to the view
     * @param {Sprite[]} spriteArray 
     */
    addAll(spriteArray){
      spriteArray.forEach(sprite => {
        let x = $("<span>").attr("class", sprite.type).attr("id", sprite.id).css("width", sprite.dimension.width).css("height", sprite.dimension.height).css("left", sprite.topLeft.x).css("bottom", sprite.topLeft.y);
        $("#Board").append(x);
      });
    }

    /**
    * Displays a sprite at the correct position
    * @param {Sprite} sprite : the sprite
    */
    update(sprite){
      $("#" + sprite.id).css("left", sprite.topLeft.x).css("bottom", sprite.topLeft.y);
    }

    /**
     * Removes all sprites that came from a Sprite array parameter
     * @param {Sprite[]} spriteArray 
     */
    removeByArray(spriteArray){
      spriteArray.forEach(sprite => {
        if (sprite != null) {
          $("#" + sprite.id).remove();
        }
      });
    }

    /**
     * Updates the player's score
     */
    updateScore(score){
      $("#score").text(score);
    }

    /**
     * updates the player's lives
     * @param {int} lives 
     */
    updateLives(lives){
      $("img[class='heart']").remove();
      for (let i = 0; i < lives; i++) {
        let content = $("<img>").attr("class","heart").attr("src","Css/heart.png").attr("width","16").attr("height","16");
        $("#lives").append(content);
      }
    }

    /**
     * Updates the level
     * @param {int} level 
     */
    updateLevel(level){
      $("#level").text(level);
    }

    /**
     * Show a message
     * @param {String} string 
     */
    ShowMessage(string){
      $("#StartText").css("visibility", "visible");
      $("#StartText").text(string);
    }

    /**
     * Hide the message
     */
    HideMessage(){
      $("#StartText").css("visibility", "hidden");
    }
  }