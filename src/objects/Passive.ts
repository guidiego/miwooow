import Phaser from "phaser";
import EnhancedScene from "../core/EnhancedScene";
import Item from "./Item";

class Passive extends Phaser.GameObjects.Container {
  private _hash: string;
  private _endTime: number;
  private _counter: Phaser.GameObjects.Text;

  scene: EnhancedScene;

  constructor(scene, hash, name, endTime, icon) {
    super(scene);
    this.setInteractive();

    this._hash = hash;
    this._endTime = endTime;


    this.createCounter(icon);
    this.createBadge();
    this.createIcon(icon);
    this.bringToTop(this._counter);
  }

  private createCounter(hasIcon) {
    this._counter = new Phaser.GameObjects.Text(this.scene, hasIcon ? 30 : 0, 5, '00:00', {});
    this.add(this._counter);
  }

  private createBadge() {
    const graph = new Phaser.GameObjects.Graphics(this.scene);
    graph.fillStyle(0xA6A6A6, 1);
    graph.fillRoundedRect(0, 0, this._counter.width + 50, this._counter.height + 10, 5);
    graph.setDepth(0);
    this.add(graph);
  }

  private createIcon(Icon) {
    if (Icon) {
      const el = new Icon(this.scene);
      el.x = 10
      el.y = 6;
      el.setScale(0.5).setOrigin(0.1);
      this.add(el);
    }
  }

  get hash() {
    return this._hash;
  }

  update() {
    const missing = this._endTime - this.scene.sharedState.time;
    let sec = 0, min = 0;

    if (missing >= 60000) {
      min = Math.floor(missing / 60000);
      sec = missing - (min * 60000);
    } else {
      sec = missing / 1000;
    }

    this._counter.text = `${(min >= 10 ? '' : '0') + min.toFixed()}:${(sec >= 10 ? '' : '0') + sec.toFixed()}`
  }
};

export default Passive;
