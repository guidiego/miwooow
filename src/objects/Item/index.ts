import Phaser from "phaser";
import EnhancedScene from "../../core/EnhancedScene";
import Cursor from "../../core/Cursor";

import * as InfoItem from "./info";

interface ItemOpts {
  x?: number,
  y?: number,
  scale?: number,
  cursorType?: number,
  autoInsert?: boolean;
  kind?: 'loot' | 'inv';
}

export type AvailableItemNames = keyof typeof InfoItem;

class Item extends Phaser.GameObjects.Sprite {
  private _key: AvailableItemNames;
  private _tooltip: Phaser.GameObjects.Container;

  waitingForCollect: boolean = false;
  scene: EnhancedScene;

  constructor(
    scene: EnhancedScene,
    itemName: AvailableItemNames,
    opts: ItemOpts = { x: 0, y: 0, scale: 1, autoInsert: false, cursorType: 0, kind: 'loot' },
  ) {
    super(scene, opts.x, opts.y , 'itens', InfoItem[itemName].frame);
    this._key = itemName;
    this.setInteractive();
    this.setScale(opts.scale);
    if (opts.autoInsert) {
      scene.add.existing(this);
    }

    this.on('pointerover', (e) => {
      this.createTooltip();

      if (opts.kind === 'loot') {
        this.scene.cursor.setFrame(
          Cursor.KEYS.LOOT
        )
      }
    });

    this.on('pointerout', () => {
      this.scene.cursor.destroyTooltip();

      if (opts.kind === 'loot') {
        this.scene.cursor.setFrame(
          Cursor.KEYS.DEFAULT
        );
      }
    });

    this.on('pointerdown', () => {
      this.scene.cursor.destroyTooltip();

      if (opts.kind === 'loot') {
        this.waitingForCollect = true;
      }
    });
  }

  get key() {
    return this._key;
  }

  createTooltip() {
    const item = InfoItem[this._key];
    const text = new Phaser.GameObjects.Text(this.scene, 0, 0, item.name, {});

    this.scene.cursor.createTooltip(text);
  }
}

export default Item;
