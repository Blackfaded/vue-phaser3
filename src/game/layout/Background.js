import Phaser from 'phaser';

export default class Background extends Phaser.GameObjects.Image {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.originalWidth = this.width;
    this.width = this.scene.game.config.width;
    this.scaleFactor = 1 / (this.originalWidth / this.width);
    this.heigt = this.height * this.scaleFactor;
    this.setScale(this.scaleFactor);
    this.scene.add.existing(this);
  }
}
