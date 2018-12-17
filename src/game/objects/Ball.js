import Phaser from 'phaser';

export default class Ball extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, diameter, key) {
    super(scene, x, y, key);
    this.diameter = diameter;
    this.originalBallDiameter = this.width;
    this.width = diameter;
    this.heigt = diameter;
    this.scaleFactor = 1 / (this.originalBallDiameter / this.diameter);

    this.isMoving = false;
  }

  spawn() {
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

    this.setScale(this.scaleFactor);
    this.body.setAllowGravity(false);
    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1);
  }

  move(x, y = 0) {
    this.body.setVelocity(x, y);
  }

  setToPosition(x, y = this.y) {
    this.x = x;
    this.y = y;
  }

  start() {
    if (!this.isMoving) {
      this.body.setVelocity(0, -400);
      this.isMoving = true;
    }
  }
}
