import Phaser from "phaser";

class EntryScene extends Phaser.Scene {
  preload() {

  }

  create() {
    this.add.text(innerWidth/2, innerHeight/2, 'Hello World');
  }
}

export default EntryScene;
