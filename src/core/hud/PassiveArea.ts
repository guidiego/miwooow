import Phaser from "phaser";
import Passive from "./Passive";
import EnhancedScene from "../EnhancedScene";


class PassiveArea extends Phaser.GameObjects.Container {
  private _passiveObjList: Passive[] = [];
  scene: EnhancedScene;

  constructor(scene) {
    super(scene, 0, 115);
  }

  private preparedList() {
    const sharedPassives =  this.scene.sharedState.getPassives();
    const sharedPassivesHashes = sharedPassives.map((p) => p.hash);
    const passiveObjListHashes = this._passiveObjList.map((p) => p.hash);

    this._passiveObjList = this._passiveObjList.filter((pass) => {
      if (sharedPassivesHashes.indexOf(pass.hash) > -1) {
        return true;
      }

      pass.destroy();
      return false;
    });

    sharedPassives.filter((pass) => {
      return passiveObjListHashes.indexOf(pass.hash) === -1
    }).forEach((pass) => {
      const p = new Passive(
        this.scene, pass.hash, pass.name, pass.endTime, pass.icon
      );
      this.add(p);
      this._passiveObjList.push(p);
    });
  }

  update() {
    this.preparedList();
    this._passiveObjList.forEach((pass) => {
      pass.update();
    });
  }
};

export default PassiveArea;
