import Phaser from 'phaser';

export default class Border extends Phaser.GameObjects.Shape {
  constructor(scene, type, x, y, w, h) {
    super(scene, type);
    this.setSize(w, h);
    this.setDisplaySize(w, h);
    this.scene.physics.world.enable(this);
    this.scene.physics.add.existing(this);
    this.body.setAllowGravity(false);
    this.body.setImmovable(true);
  }
}
