import Phaser from "phaser";

export class HeartIcon extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'itens', 21);
  }
}
