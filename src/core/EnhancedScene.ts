import Phaser from "phaser";
import Cursor from "../objects/Cursor";
import Inventory from "../objects/Inventory";
import Player from "../objects/Player";
import HUD from "./hud";
import Item, { AvailableItemNames } from "../objects/Item";
import SharedStateMachine, { SharedState } from "../states/shared";

class EnhancedScene extends Phaser.Scene {
  player: Player;
  cursor: Cursor;
  inventory: Inventory;
  loot: Item[] = [];
  hud: HUD;
  sharedState: SharedState;

  preload() {
    this.load.spritesheet('player', 'sprites/player.png', {
      frameWidth: 32,
      frameHeight: 64,
    });

    this.load.spritesheet('itens', 'sprites/itens.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('cursors', 'sprites/cursors.png', {
      frameWidth: 64,
      frameHeight: 64,
    });

  }

  create() {
    this.input.setDefaultCursor('none');
    this.hud = new HUD(this);

    this.player = new Player(this, innerWidth /2, innerHeight / 2);
    this.cursor = new Cursor(this, Cursor.KEYS.DEFAULT, {
      x: this.input.mousePointer.x,
      y: this.input.mousePointer.y,
      autoInsert: true,
    });

    this.inventory = new Inventory(this);
    this.sharedState = SharedStateMachine();
  }

  update(time, delta) {
    this.cursor.update();

    if (this.sharedState.getLife() === 0) {
      return;
    }

    this.sharedState.time = time;
    this.sharedState.update(time);
    this.player.update(delta);
    this.hud.update();
    this.loot.forEach((item) => {
      if (
        item.waitingForCollect &&
        (this.player.x - 50 <= item.x && item.x <= this.player.x + 50) &&
        (this.player.y - 50 <= item.y && item.y <= this.player.y + 50)
      ) {
        this.cursor.setFrame(Cursor.KEYS.DEFAULT);
        item.waitingForCollect = false;
        if (this.inventory.addItem(item.key)) {
          item.destroy();
        }
      }
    });
  }

  addLoot(itemName: AvailableItemNames, x: number, y: number) {
    this.loot.push(
      new Item(this, itemName, {
        x, y, autoInsert: true, kind: 'loot'
      })
    )
  }
}

export default EnhancedScene;
