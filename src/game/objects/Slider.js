import Phaser from 'phaser';
import { toRadians } from '@/game/helpers/math';

export default class Slider extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, width, key) {
    super(scene, x, y, key);
    this.createAnimation();
    this.originalBlockWidth = this.width;
    this.originalBlockHeight = this.height;
    this.width = width;
    this.scaleFactor = 1 / (this.originalBlockWidth / this.width);
    this.height = this.height * this.scaleFactor;
    this.speed = 500;
  }

  spawn() {
    this.scene.physics.world.enable(this);
    this.setScale(this.scaleFactor);
    this.scene.add.existing(this);
    this.body.setAllowGravity(false);
    this.body.setCollideWorldBounds(true);
    this.body.setImmovable(true);
    this.setInteractive({ draggable: true });
    this.on('drag', (pointer, dragX) => {
      this.x = dragX;
    });
    console.log(this);
  }

  move(value) {
    this.body.setVelocityX(value);
  }

  setToPosition(x) {
    this.x = x;
  }

  onBallCollision(ball) {
    if (ball.body.touching.down) {
      const dif = ball.x - this.x;

      const newDirection = [
        Math.cos(toRadians(90 - (dif / (this.width / 2)) * 60)) * ball.body.speed,
        -Math.sin(toRadians(90 - (dif / (this.width / 2)) * 60)) * ball.body.speed
      ];
      ball.body.setVelocity(...newDirection);
    }
  }

  createAnimation() {
    const config = {
      key: 'sliderAnimation',
      frames: [{ key: 'slider_01' }, { key: 'slider_02' }, { key: 'slider_03' }],
      defaultTextureKey: null,

      // time
      delay: 0,
      frameRate: 20,
      skipMissedFrames: true,

      // repeat
      repeat: -1 // set to (-1) to repeat forever
    };
    this.scene.anims.create(config);
    this.play('sliderAnimation');
  }
}
