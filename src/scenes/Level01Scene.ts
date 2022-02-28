import EnhancedScene from "../core/EnhancedScene";

class Level01Scene extends EnhancedScene {

  create() {
    super.create();
    this.addLoot('thirstPotion', 300, 300);
    this.addLoot('hungryPotion', 600, 300);
    this.addLoot('tirednessPotion', 200, 200);
  }
}

export default Level01Scene;
