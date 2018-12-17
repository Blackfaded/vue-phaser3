import Phaser from 'phaser';
import BootScene from './scenes/Boot';
import MainMenuScene from './scenes/Mainmenu';
import PlayScene from './scenes/Play';

function launch() {
  /* global game */
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: window.screen.width,
    height: window.screen.height,
    parent: 'game-container',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: true
      }
    },
    scene: [BootScene, MainMenuScene, PlayScene]
  });
}

export default launch;
