import Phaser from "phaser";
import EnhancedScene from "./EnhancedScene";
import Item, { AvailableItemNames } from "../objects/Item";

import { borderGenerator } from "../util/hud";
import { BagIcon } from "./Icon";

class Inventory extends Phaser.GameObjects.Container {
  private _items: AvailableItemNames[] = Array(6).fill(null);
  private _totalSlots = 6;
  private _slotSize = 64;
  private _slotBorderOffset = 3;
  private _slotSpace = 10;
  private _slotOffset = 6;

  scene: EnhancedScene;

  constructor(scene: EnhancedScene) {
    super(scene, window.innerWidth / 2, window.innerHeight);
    scene.add.existing(this);

    const space = this._slotSize + this._slotOffset * 2 + this._slotSpace;

    this.x -= space * (this._totalSlots / 2);
    this.x += this._slotSpace;
    this.y -= space;

    this._createBackground();
    this._createLabel();

    for (let i = 0; i < this._totalSlots; i++) {
      this.add(this._createSlot(i));
    }

  }

  private _createLabel() {
    const text = new Phaser.GameObjects.Text(this.scene, 0, 0, 'Inventory', {});
    const icon = new BagIcon(this.scene, 0, 0);
    const holder = new Phaser.GameObjects.Graphics(this.scene);
    const textOffsetX = 50;
    const textOffsetY = 8;
    const spaceAfterIcon = 10
    const totalWidth = icon.width + text.width + spaceAfterIcon + textOffsetX;
    const totalHeigth = icon.height + textOffsetY;
    const container = new Phaser.GameObjects.Container(this.scene, 160, -60);

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

  private _createBackground() {
    const bg = new Phaser.GameObjects.Graphics(this.scene);
    const width = this._totalSlots * (this._slotSize + this._slotOffset * 2 - 0.5) + (this._totalSlots - 1) * this._slotSpace;
    const offset = 60;

    bg.fillStyle(0x37250e, 1);
    bg.fillRoundedRect(0, 0, width + offset, this._slotSize + 60, 5);

    bg.x -= offset / 2;
    bg.y -= 20;

    borderGenerator(bg, width + offset, this._slotSize + 60, 0, 0);
    this.add(bg);
  }

  private _createSlot(slotIdx: number) {
    const slot = new Phaser.GameObjects.Graphics(this.scene);

    slot.fillStyle(0x1b1207, 1);
    slot.fillRoundedRect(0, 0, this._slotSize + this._slotOffset, this._slotSize + this._slotOffset, 5);

    borderGenerator(slot, this._slotSize, this._slotSize, this._slotOffset, this._slotOffset, [
      0x221709,
      0x291c0a,
      0x30200c,
    ]);


    slot.x = slotIdx * (this._slotSize + this._slotOffset * 2);
    slot.x += slotIdx * this._slotSpace;
    return slot;
  }

  addItem(item: AvailableItemNames): boolean {
    const freeSlot = this._items.indexOf(null);

    if (freeSlot === -1) {
      alert('Invetory Full');
      return false;
    }

    this._items[freeSlot] = item;
    const middleSpace = this._slotSize / 2 + this._slotOffset / 2 + this._slotBorderOffset / 2;
    this.add(
      new Item(this.scene, item, {
        x: middleSpace + freeSlot * (middleSpace * 2 + this._slotBorderOffset) + freeSlot * this._slotSpace,
        y: middleSpace - 1,
        autoInsert: true,
        kind: 'inv',
      }).setOrigin(0.5),
    );

    return true;
  }
}

export default Inventory;
