import { Scene } from 'phaser';
import generateBlocks from '@/game/helpers/generateBlocks';
import levels from '@/game/levels';
import Ball from '@/game/objects/Ball';
import Slider from '@/game/objects/Slider';
import Background from '@/game/layout/Background';

export default class PlayScene extends Scene {
  constructor() {
    super({ key: 'PlayScene' });
    this.levels = levels;
    this.gameWidth = game.config.width;
    this.gameHeight = game.config.height;
    this.cursers = null;
  }

  create() {
    // for no bottom collision fourth to false
    this.physics.world.setBoundsCollision(true, true, true, true);
    this.cursors = this.input.keyboard.createCursorKeys();
    new Background(this, this.gameWidth / 2, this.gameHeight / 2, 'background.industrial');

    this.sound.add('thud');
    this.physics.world.on('worldbounds', () => {
      //   this.sound.play('thud', { volume: 0.75 });
    });

    this.blocks = generateBlocks(this, 30, 2);
    this.blocks.children.iterate(child => {
      child.spawn();
    });

    this.slider = new Slider(this, this.gameWidth / 2, this.gameHeight - 20, 100, 'slider_01');
    this.slider.spawn();

    const ballDiameter = 10;
    this.ball = new Ball(
      this,
      this.slider.x,
      this.slider.y - this.slider.height / 2 - ballDiameter / 2,
      ballDiameter,
      'ball'
    );
    this.ball.spawn();

    this.physics.add.collider(this.blocks, this.ball, this.blockCollision, null, this);
    this.physics.add.collider(this.slider, this.ball, this.sliderCollision, null, this);
  }

  update() {
    // if (this.blocks.children.entries.filter(entry => entry.visible).length < 88) {
    //   this.blocks.children.iterate(block => {
    //     block.y -= 20;
    //   });
    // }

    if (this.cursors.left.isDown) {
      this.slider.move(-this.slider.speed);
    } else if (this.cursors.right.isDown) {
      this.slider.move(this.slider.speed);
    } else {
      this.slider.move(0);
    }

    if (this.cursors.space.isDown) {
      this.ball.start();
    }

    if (!this.ball.isMoving) {
      this.ball.setToPosition(this.slider.x, this.ball.y);
    }
  }

  blockCollision(ball, block) {
    block.despawn();
  }

  sliderCollision(slider, ball) {
    this.slider.onBallCollision(ball);
  }
}
