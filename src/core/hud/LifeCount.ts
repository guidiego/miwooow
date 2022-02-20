import Phaser from "phaser";
import Item from "../../objects/Item";

class LifeBar extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene, 0, 0);
    for (let i = 0; i < 7; i++) {
      const heart = new Phaser.GameObjects.Sprite(
        scene,
        i * 40,
        0,
        'itens',
        Item.KEYS.HEART
      ).setOrigin(0);
      this.add(
        heart
      )
    }
  }
};

export default LifeBar;
