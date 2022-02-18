import Phaser from "phaser";
import Cursor from "../objects/Cursor";
import Player from "../objects/Player";

class EnhancedScene extends Phaser.Scene {
  player: Player;
  cursor: Cursor;

  preload() {
    this.load.spritesheet('player', 'sprites/player.png', {
      frameWidth: 32,
      frameHeight: 64,
    });

    this.load.spritesheet('icon', 'sprites/icons.png', {
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

    this.player = new Player(this, innerWidth /2, innerHeight / 2);
    this.cursor = new Cursor(this, Cursor.KEYS.DEFAULT, {
      x: this.input.mousePointer.x,
      y: this.input.mousePointer.y,
      autoInsert: true,
    });
  }

  update() {
    this.player.update();
    this.cursor.update();
  }
}

export default EnhancedScene;
