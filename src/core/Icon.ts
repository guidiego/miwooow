import Phaser from "phaser";

export class HeartIcon extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'itens', 21);
  }
}


export class BagIcon extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'itens', 0);
  }
}

export class MapIcon extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'itens', 23);
  }
}
