import Phaser from "phaser";

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

  constructor(
    scene: Phaser.Scene,
    itemFrame: number,
    opts: CursorOpts = { x: 0, y: 0, scale: 1, autoInsert: false},
  ) {
    super(scene, opts.x, opts.y , 'cursors', itemFrame);
    this.setScale(opts.scale);
    this.scene.input.setDefaultCursor('none');
    this.setDepth(2);

    if (opts.autoInsert) {
      scene.add.existing(this);
    }
  }

  update() {
    this.setX(this.scene.input.mousePointer.x);
    this.setY(this.scene.input.mousePointer.y);
  }
}

export default Cursor;
