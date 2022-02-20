import Phaser from "phaser";
import EnhancedScene from "../core/EnhancedScene";

class Player extends Phaser.GameObjects.Sprite {
  private _followMark;
  private _followMarkCooldown = 100;
  private _nextFollowMarkTime = 0;
  private _speed = 0.3;
  private _life = 7;
  private _foodFactor = 1;
  private _tiredFactor = 1;

  scene: EnhancedScene;

  constructor(scene, x, y) {
    super(scene, x, y, 'player', 0);
    this.setOrigin(0.5, 0.5);
    this.setScale(2);
    this.scene.add.existing(this);
  }

  get discountLevels() {
    return {
      hungry: ((7 / this._foodFactor) / this._life) * -1,
      thirst: ((7 / this._foodFactor) / this._life) * -1,
      tiredness: ((7 / this._tiredFactor) / this._life) * -1,
    }
  }

  get lifes() {
    return this._life;
  }

  get pointer() {
    return this.scene.input.activePointer;
  }

  get time() {
    const clock = new Phaser.Time.Clock(this.scene);
    return clock.scene.time.now;
  }

  private captureFollowMark() {
    if (this.pointer.isDown && (!this._followMark || this.time >= this._nextFollowMarkTime)) {
      if (this._followMark) {
        this._followMark.destroy();
      }

      this._nextFollowMarkTime = this.time + this._followMarkCooldown;
      this._followMark = this.scene.add.circle(
        this.pointer.x,
        this.pointer.y,
        5,
        0xff66ff
      )
    }
  }

  private prepareArrive(mult, prop, delta) {
    const newPosition = this[prop] + (this._speed * mult * delta);
    const overPassPosition = mult === 1 ?
      (newPosition > this._followMark[prop]) :
      (this[prop] < this._followMark[prop])

    return overPassPosition ?
      this._followMark[prop] : newPosition
  }

  private handleMovement(delta) {
    if (!this._followMark) {
      return;
    }

    this.scene.sharedState.levels.hungry.increaseIn(this.discountLevels.hungry);
    this.scene.sharedState.levels.thirst.increaseIn(this.discountLevels.thirst);
    this.scene.sharedState.levels.tiredness.increaseIn(this.discountLevels.tiredness);

    if (this.x !== this._followMark.x) {
      const dist = this.x - this._followMark.x;
      const mult = dist > 0 ? -1 : 1;
      this.setX(this.prepareArrive(mult, 'x', delta));
      this.setFrame(2);
      this.flipX = mult === 1;
    }

    if (this.y !== this._followMark.y) {
      const dist = this.y - this._followMark.y;
      const mult = dist > 0 ? -1 : 1;
      this.setY(this.prepareArrive(mult, 'y', delta));
      this.setFrame(mult === -1 ? 1 : 0);
    }

    if (this.x === this._followMark.x && this.y === this._followMark.y) {
      this._followMark.destroy();
      this._followMark = undefined;
      this.setFrame(0);
    }
  }

  update(delta) {
    this.captureFollowMark();
    this.handleMovement(delta);
  }
}

export default Player;
