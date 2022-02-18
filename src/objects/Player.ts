import Phaser from "phaser";

class Player extends Phaser.GameObjects.Sprite {
  private _followMark;
  private _followMarkCooldown = 100;
  private _nextFollowMarkTime = 0;
  private _speed = 5;

  constructor(scene, x, y) {
    super(scene, x, y, 'player', 0);
    this.setOrigin(0.5, 0.5);
    this.setScale(2);
    this.scene.add.existing(this);
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

  private prepareArrive(mult, prop) {
    const newPosition = this[prop] + this._speed * mult;
    const overPassPosition = mult === 1 ?
      (newPosition > this._followMark[prop]) :
      (this[prop] < this._followMark[prop])

    return overPassPosition ?
      this._followMark[prop] : newPosition
  }

  private handleMovement() {
    if (!this._followMark) {
      return;
    }

    if (this.x !== this._followMark.x) {
      const dist = this.x - this._followMark.x;
      const mult = dist > 0 ? -1 : 1;
      this.setX(this.prepareArrive(mult, 'x'));
      this.setFrame(2);
      this.flipX = mult === 1;
    }

    if (this.y !== this._followMark.y) {
      const dist = this.y - this._followMark.y;
      const mult = dist > 0 ? -1 : 1;
      this.setY(this.prepareArrive(mult, 'y'));
      this.setFrame(mult === -1 ? 1 : 0);
    }

    if (this.x === this._followMark.x && this.y === this._followMark.y) {
      this._followMark.destroy();
      this._followMark = undefined;
      this.setFrame(0);
    }
  }

  update() {
    this.captureFollowMark();
    this.handleMovement();
  }
}

export default Player;
