import Phaser from "phaser";
import EnhancedScene from "../core/EnhancedScene";
import Item from "./Item";

class Inventory extends Phaser.GameObjects.Container {
  private _items: number[] = Array(6).fill(-1);
  private _slotSize = 64;
  scene: EnhancedScene;

  constructor(scene: EnhancedScene) {
    super(scene, (window.innerWidth / 2), window.innerHeight - 100);
    scene.add.existing(this);

    for (let i = 0; i < 6; i++) {
      this.add(this._createSlot(i));
    }
  }

  private _createSlot(slotIdx: number) {
    const r = new Phaser.GameObjects.Rectangle(
      this.scene,
      slotIdx * this._slotSize,
      0,
      this._slotSize,
      this._slotSize
    );
    r.setStrokeStyle(2, 0x9966ff);
    return r;
  }

  addItem(item: number) {
    const freeSlot = this._items.indexOf(-1);
    this._items[freeSlot] = item;
    this.add(
      new Item(this.scene, item, {
        x: freeSlot * this._slotSize,
        y: 0,
        autoInsert: true,
        kind: 'inv',
      })
    );
  }
}

export default Inventory;
