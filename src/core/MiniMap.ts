import Phaser from "phaser";
import { borderGenerator } from "../util/hud";
import EnhancedScene from "./EnhancedScene";
import { MapIcon } from "./Icon";

export class MiniMap extends Phaser.GameObjects.Container {
  private _minimapRadius = 100;
  private _offset = 20;

  scene: EnhancedScene;

  constructor(scene: EnhancedScene) {
    super(scene, window.innerWidth, 0);
    this._createMiniMapFrame();
    this._createLabel();

    this.scene.add.existing(this);
  }

  private _createLabel() {
    const text = new Phaser.GameObjects.Text(this.scene, 0, 0, this.scene.sharedState.getPlaceName(), {});
    const icon = new MapIcon(this.scene, 0, 0);
    const holder = new Phaser.GameObjects.Graphics(this.scene);
    const textOffsetX = 50;
    const textOffsetY = 8;
    const spaceAfterIcon = 10
    const totalWidth = icon.width + text.width + spaceAfterIcon + textOffsetX;
    const totalHeigth = icon.height + textOffsetY;
    const xPosition = (this._minimapRadius * -1 - this._offset) - totalWidth / 2;
    const yPosition =  this._minimapRadius * 2;
    const container = new Phaser.GameObjects.Container(this.scene, xPosition, yPosition);

    icon.x = (totalWidth / 2) -  (icon.width + text.width + spaceAfterIcon) / 2;
    icon.y = textOffsetY / 2;
    icon.setOrigin(0);

    text.x = icon.x + icon.width + spaceAfterIcon;
    text.y = ((icon.height - text.height) + textOffsetY) / 2;
    text.setOrigin(0);

    holder.fillStyle(0x37250e, 1);
    holder.fillRoundedRect(0, 0, totalWidth, totalHeigth, 5);

    borderGenerator(holder, totalWidth, totalHeigth, 0, 0);


    container.add(holder);
    container.add(icon);
    container.add(text);
    this.add(container);
  }

  private _createMiniMapFrame() {
    const frame = new Phaser.GameObjects.Graphics(this.scene);
    const borderSize = 2;
    const xPosition = this._minimapRadius * -1 - this._offset;
    const yPosition =  this._minimapRadius + this._offset;

    frame.fillStyle(0x1b1207, 1);
    frame.fillCircle(xPosition, yPosition, this._minimapRadius);

    [
      0x805700,
      0xffb71c,
      0xb37a00
    ].forEach((color, idx) => {
      frame.lineStyle(2, color, 100);
      frame.strokeCircle(xPosition, yPosition, this._minimapRadius + borderSize * 1.8 * idx);
    });

    this.add(frame);
  }
}

export default MiniMap;
