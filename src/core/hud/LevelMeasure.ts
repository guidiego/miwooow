import Phaser from "phaser";

class LevelMeasure extends Phaser.GameObjects.Container {
  private _bar: Phaser.GameObjects.Graphics;
  constructor(scene, color, width, y) {
    super(scene);

    const placeholder = new Phaser.GameObjects.Graphics(scene);
    this._bar = new Phaser.GameObjects.Graphics(scene);

    this._bar.fillStyle(color, 1);
    this._bar.fillRoundedRect(0, y, width, 15, 5);

    placeholder.fillStyle(0xA6A6A6, 1);
    placeholder.fillRoundedRect(0, y, width, 15, 5);

    this.add(placeholder);
    this.add(this._bar);
  }

  changeWidth(width) {
    if (width >= 0) {
      this._bar.setScale(width / 100, 1);
    }
  }
};

export default LevelMeasure;
