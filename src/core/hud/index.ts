import Phaser from "phaser";
import EnhancedScene from "../EnhancedScene";
import LevelMeasure from "./LevelMeasure";
import LifeBar from "./LifeCount";

class HUD extends Phaser.GameObjects.Container {
  private _lifeBar: LifeBar;
  private _hungryLevel: LevelMeasure;
  private _thirstLevel: LevelMeasure;
  private _tirednessLevel: LevelMeasure;
  scene: EnhancedScene;

  constructor(scene: EnhancedScene) {
    super(scene, 25, 25)
    this._lifeBar = new LifeBar(scene);
    this._hungryLevel = new LevelMeasure(scene, 0xe28743, 300, 40);
    this._thirstLevel = new LevelMeasure(scene, 0x1e81b0, 300, 65);
    this._tirednessLevel = new LevelMeasure(scene, 0x19d05e, 300, 90);

    this.add(this._lifeBar);
    this.add(this._hungryLevel);
    this.add(this._thirstLevel);
    this.add(this._tirednessLevel);

    this.scene.add.existing(this);
  }

  update() {
    this._hungryLevel.changeWidth(
      this.scene.sharedState.levels.hungry.get()
    );

    this._thirstLevel.changeWidth(
      this.scene.sharedState.levels.thirst.get()
    );

    this._tirednessLevel.changeWidth(
      this.scene.sharedState.levels.tiredness.get()
    );
  }
}

export default HUD;
