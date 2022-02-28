import Phaser from 'phaser';
import EntryScene from './scenes/EntryScene';
import Level01Scene from './scenes/Level01Scene';

const game = new Phaser.Game({
  width: innerWidth,
  height: innerHeight,
  backgroundColor: 0x333333,
  fps: {
    min: 30,
  }
});

game.scene.add('entry-scene', EntryScene);
game.scene.add('level-01', Level01Scene);

game.scene.start('level-01');
