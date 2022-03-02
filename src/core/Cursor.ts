import Phaser from "phaser";
import { borderGenerator } from "../util/hud";

const CursorKeys = {
  DEFAULT: 0,
  DIALOG: 1,
  LOOT: 2,
  ENTRY: 3,
  POTION: 4,
  PLACE: 5,
  POINT: 6,
  HOLD: 7,
  PLACE2: 8,
  COLLECT: 9,
  GEAR: 10,
};

interface CursorOpts {
  x?: number,
  y?: number,
  scale?: number,
  autoInsert?: boolean;
}

class Cursor extends Phaser.GameObjects.Sprite {
  static KEYS = CursorKeys;
  private _tooltip: Phaser.GameObjects.Container;

  constructor(
    scene: Phaser.Scene,
    itemFrame: number,
    opts: CursorOpts = { x: 0, y: 0, scale: 1, autoInsert: false},
  ) {
    super(scene, opts.x, opts.y , 'cursors', itemFrame);
    this.setScale(opts.scale);
    this.setOrigin(0.35)
    this.scene.input.setDefaultCursor('none');
    this.setDepth(1);

    if (opts.autoInsert) {
      scene.add.existing(this);
    }
  }

  destroyTooltip() {
    if (this._tooltip) {
      this._tooltip.destroy();
      this._tooltip = undefined;
    }
  }

  createTooltip(content) {
    if (!this._tooltip) {
      const tooltipBg = new Phaser.GameObjects.Graphics(this.scene);
      const contentSpanX = 20;
      const contentSpanY = 10;

      tooltipBg.fillStyle(0x000000a, 1);
      tooltipBg.fillRoundedRect(0, 0, content.width + contentSpanX, content.height + contentSpanY, 5);

      borderGenerator(tooltipBg, content.width, content.height, 20, 10);

      this._tooltip = new Phaser.GameObjects.Container(this.scene, 0, 0);
      this._tooltip.add(tooltipBg);
      this._tooltip.add(content);
      content.x = contentSpanX / 2;
      content.y = contentSpanY / 2;
      this.scene.add.existing(this._tooltip);
    }

    this._tooltip.x = this.x - this.width;
    this._tooltip.y = this.y - this.height;
  }

  update() {
    this.setX(this.scene.input.mousePointer.x);
    this.setY(this.scene.input.mousePointer.y);
  }
}

export default Cursor;
