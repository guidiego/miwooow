import Phaser from "phaser";
import EnhancedScene from "../core/EnhancedScene";
import Cursor from "./Cursor";

const ItemKeys = {
  BAG: 0,
  COLLAR: 1,
  POTION_BLUE: 2,
  BOOK_1: 3,
  BOOK_2: 4,
  BOOK_3: 5,
  WOOD_PLANK: 6,
  CHEESE: 7,
  COIN_COPPER: 8,
  CRYSTAL: 9,
  EMERALD: 10,
  EMPTY_BOTTLE: 11,
  FABRIC: 12,
  WOOL: 13,
  FISH: 14,
  GEAR: 15,
  COIN_GOLD: 16,
  KEY_GOLD: 17,
  POTION_GREEN: 18,
  HAMMER: 19,
  HEART: 21,
  KEY_OLD: 22,
  MAP: 23,
  EYE: 24,
  PICKAXE: 25,
  POTION_RED: 26,
  ROPE: 28,
  RUBY: 29,
  RUNE: 30,
  SAPPHIRE: 31,
  SCROLL: 32,
  COIN_SILVER: 33,
  KEY_SILVER: 35,
  STRING: 36,
  TOPAZ: 37,
  TORCH: 38,
  BOTTLE_EMPTY: 39,
  WOOD: 40
};

interface ItemOpts {
  x?: number,
  y?: number,
  scale?: number,
  cursorType?: number,
  autoInsert?: boolean;
  kind?: 'loot' | 'inv';
}

class Item extends Phaser.GameObjects.Sprite {
  static KEYS = ItemKeys;
  waitingForCollect: boolean = false;
  scene: EnhancedScene;
  key: number;

  constructor(
    scene: EnhancedScene,
    itemFrame: number,
    opts: ItemOpts = { x: 0, y: 0, scale: 1, autoInsert: false, cursorType: 0, kind: 'loot' },
  ) {
    super(scene, opts.x, opts.y , 'itens', itemFrame);
    this.key = itemFrame;
    this.setInteractive();
    this.setScale(opts.scale);
    if (opts.autoInsert) {
      scene.add.existing(this);
    }

    this.on('pointerover', () => {
      if (opts.kind === 'loot') {
        this.scene.cursor.setFrame(
          Cursor.KEYS.LOOT
        )
      }
    });

    this.on('pointerout', () => {
      if (opts.kind === 'loot') {
        this.scene.cursor.setFrame(
          Cursor.KEYS.DEFAULT
        );
      }
    });

    this.on('pointerdown', () => {
      if (opts.kind === 'loot') {
        this.waitingForCollect = true;
      }
    });
  }
}

export default Item;
