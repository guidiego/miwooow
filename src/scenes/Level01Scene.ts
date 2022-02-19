import EnhancedScene from "../core/EnhancedScene";
import Cursor from "../objects/Cursor";
import Item from "../objects/Item";
import Player from "../objects/Player";

class Level01Scene extends EnhancedScene {

  create() {
    super.create();
    this.addLoot(Item.KEYS.WOOD, 300, 300);
    this.addLoot(Item.KEYS.STRING, 600, 300);
    this.addLoot(Item.KEYS.TOPAZ, 200, 200);
    this.addLoot(Item.KEYS.FISH, 700, 700);
    this.addLoot(Item.KEYS.RUNE, 800, 800);
  }
}

export default Level01Scene;
