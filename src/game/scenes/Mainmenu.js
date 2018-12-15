import { Scene } from 'phaser';
import router from '@/router';
import store from '@/store';
import Background from '@/game/layout/Background';

export default class MainMenuScene extends Scene {
  constructor() {
    super({ key: 'MainMenuScene' });
    this.store = store;
    this.router = router;
  }

  preload() {}

  create() {
    new Background(
      this,
      this.game.config.width / 2,
      this.game.config.height / 2,
      'background.mountain'
    );
    this.router.push('/mainmenu');
  }
}
