import { Scene } from 'phaser';
import industrial from '@/game/assets/backgrounds/industrial.png';
import mountain from '@/game/assets/backgrounds/mountain.png';
import forest from '@/game/assets/backgrounds/forest.png';
import ball from '@/game/assets/ball.png';
import thudMp3 from '@/game/assets/thud.mp3';
import thudOgg from '@/game/assets/thud.ogg';

import store from '@/store';

export default class BootScene extends Scene {
  constructor() {
    super({ key: 'BootScene' });
    this.store = store;
  }

  preload() {
    for (let i = 1; i <= 10; i++) {
      const imageSrc = require(`@/game/assets/blocks/block_${i < 10 ? '0' : ''}${i}.png`); // eslint-disable-line
      this.load.image(`block_${i < 10 ? '0' : ''}${i}`, imageSrc);
    }
    for (let i = 1; i <= 3; i++) {
      const imageSrc = require(`@/game/assets/slider/slider_${i < 10 ? '0' : ''}${i}.png`); // eslint-disable-line
      this.load.image(`slider_0${i}`, imageSrc);
    }
    this.load.image('background.industrial', industrial);
    this.load.image('background.mountain', mountain);
    this.load.image('background.forest', forest);

    this.load.image('ball', ball);
    this.load.audio('thud', [thudMp3, thudOgg]);
  }

  create() {
    this.store.dispatch('setLoading', false);
  }
}
