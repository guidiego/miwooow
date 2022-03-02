import { v4 as uuid } from "uuid";
import { HeartIcon } from "../../core/Icon";
import Item from "../../objects/Item";

const MeasurableLevels = ['hungry', 'thirst', 'tiredness'] as const;
type AvailableLevels = typeof MeasurableLevels[number];

const CreateLevelState = () => {
  let _nextLifeLost;
  const _lostLifeTimeMultipler = 9;
  const _aggravatingMult = 1;
  const _passiveLevelLoss = 0.02;
  let _state = {
    life: 7,
    speed: 0.3,
    lifeIntegrity: 1,
    hungry: 100,
    thirst: 100,
    tiredness: 100,
    passives: [],
  }

  return {
    getPassives() {
      return _state.passives;
    },
    addPassive(name, endTime, icon = Phaser.GameObjects.Sprite) {
      _state.passives = [
        ..._state.passives,
        {
          hash: uuid(),
          icon,
          name,
          endTime,
        }
      ]
    },
    getSpeed() {
      return _state.speed;
    },

    getLifeDecreaseTime() {
      return _nextLifeLost;
    },

    getLifeIntegrity() {
      return _state.lifeIntegrity;
    },

    getLife() {
      return _state.life;
    },

    getLevel(name: AvailableLevels) {
      return _state[name];
    },

    setLevel(name: AvailableLevels, val: number) {
      _state[name] += val;
    },

    walk() {
      const aggravating = _state.life * _aggravatingMult;
      const decreaseQtd = 7 / aggravating;
      _state.hungry -= decreaseQtd;
      _state.thirst -= decreaseQtd;

      const accelerator = ((_state.hungry + _state.thirst) / 2) / 1000;
      _state.tiredness -= (7 / (aggravating - accelerator) * 1.3);
    },

    update(time) {
      _state.hungry -= _passiveLevelLoss / _state.life;
      _state.thirst -= _passiveLevelLoss / _state.life;
      _state.speed = (_state.speed * _state.thirst) / 100;
      _state.passives = _state.passives.filter((pass) => {
        return time <= pass.endTime
      });


      const levelsIn0 = MeasurableLevels.filter((key) => {
        return _state[key] <= 0;
      }).length;

      if (levelsIn0 > 0) {
        if (!_nextLifeLost) {
          _nextLifeLost = time + (_state.life * _lostLifeTimeMultipler * 1000);
          this.addPassive('Lost Life Counter', _nextLifeLost, HeartIcon);
        }

        _state.lifeIntegrity = (_nextLifeLost - time) / 60000;
        if (_state.lifeIntegrity <= 0) {
          _state.lifeIntegrity = 1;
          _state.life -= 1;
          _nextLifeLost = null;
        }
      }
    }
  }
};

export default CreateLevelState;
