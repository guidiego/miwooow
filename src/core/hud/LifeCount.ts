import Phaser from "phaser";
import EnhancedScene from "../EnhancedScene";

import { HeartIcon } from "../Icon";

class LifeBar extends Phaser.GameObjects.Container {
  private hearts: Phaser.GameObjects.Sprite[] = [];
  scene: EnhancedScene;

  constructor(scene) {
    super(scene, 20, 10);
    for (let i = 0; i < 7; i++) {
      const heart = new HeartIcon(
        scene,
        i * 40,
        0
      )

      this.hearts.push(heart);
      this.add(heart);
    }
  }

  update() {
    const lastHeart = this.hearts[this.hearts.length - 1];
    const integrity = this.scene.sharedState.getLifeIntegrity();

    if (this.hearts.length > 0 && this.scene.sharedState.getLife() < this.hearts.length) {
      lastHeart.destroy();
      this.hearts.pop();
    }

    if (integrity < 1) {
      const integrityOffSet = integrity + 0.5;
      integrityOffSet < 1 && lastHeart.setScale(integrityOffSet);
      lastHeart.setAlpha(integrity);
    }
  }
};

export default LifeBar;
