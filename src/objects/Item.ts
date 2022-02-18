import Phaser from "phaser";
import EnhancedScene from "../core/EnhancedScene";
import Cursor from "./Cursor";

const IconKeys = {
  COLLAR: 0,
  PICKAXE: 1,
  RUBY: 2,
  SCROLL: 3,
  BOOK2: 4,
  WATER_BOTTLE: 5,
  BAG: 6,
  HAMMER: 7,
  EMERALD: 8,
  __STONE__: 9,
  BOOK3: 10,
  EMPTY_BOTTLE: 11,
  TOPAZ: 12,
  SAPPHIRE: 13,
  CRYSTAL: 14,
  MAP: 15,
  WOLL: 16,
  RED_POTION: 17,
  EYE: 18,
  SILVER_KEY: 19,
  SILVER_COIN: 20,
  OLD_KEY: 21,
  WOOD_PLANK: 22,
  GREEN_POTION: 23,
  HEART: 24,
  GOLD_KEY: 25,
  GEAR: 26,
  BOOK: 27,
  WOOD: 28,
  BLUE_POTION: 29,
  STRING: 30,
  ROPE: 31,
  FABRIC: 32,
  FISH: 33,
  CHEESE: 34,
  TORCH: 35
};

interface IconOpts {
  x?: number,
  y?: number,
  scale?: number,
  cursorType?: number,
  autoInsert?: boolean;
}

class Icon extends Phaser.GameObjects.Sprite {
  static KEYS = IconKeys;
  scene: EnhancedScene;

  constructor(
    scene: EnhancedScene,
    itemFrame: number,
    opts: IconOpts = { x: 0, y: 0, scale: 1, autoInsert: false, cursorType: 0},
  ) {
    super(scene, opts.x, opts.y , 'icon', itemFrame);
    this.setInteractive();
    this.setScale(opts.scale);
    if (opts.autoInsert) {
      scene.add.existing(this);
    }

    this.on('pointerover', () => {
      this.scene.cursor.setFrame(
        Cursor.KEYS.LOOT
      )
    });

    this.on('pointerout', () => {
      this.scene.cursor.setFrame(
        Cursor.KEYS.DEFAULT
      )
    })
  }
}

export default Icon;
