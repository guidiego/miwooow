import EnhancedScene from "../core/EnhancedScene";
import Cursor from "../objects/Cursor";
import Item from "../objects/Item";
import Player from "../objects/Player";

class Level01Scene extends EnhancedScene {

  create() {
    super.create();
    const item = new Item(this, Item.KEYS.BAG, {
      x: 300,
      y: 300,
      autoInsert: true,
    });
  }
}

export default Level01Scene;
