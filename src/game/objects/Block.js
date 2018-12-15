import Phaser from 'phaser';

export default class Block extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, width, margin) {
    super(scene, x, y, key);
    this.margin = margin;
    this.originalBlockWidth = this.width;
    this.originalBlockHeight = this.height;
    this.width = width;
    this.scaleFactor = 1 / (this.originalBlockWidth / this.width);
    this.height = this.originalBlockHeight * this.scaleFactor;
  }

  spawn() {
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

    this.setScale(this.scaleFactor);
    // because its in a static group you have to update the body to fit the scaled Sprite
    this.body.updateFromGameObject();
  }

  despawn() {
    // this.disableBody(true, true);
    this.destroy();
  }
}
