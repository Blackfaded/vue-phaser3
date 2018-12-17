import { Scene } from 'phaser';
import generateBlocks from '@/game/helpers/generateBlocks';
import Ball from '@/game/objects/Ball';
import Slider from '@/game/objects/Slider';
import Background from '@/game/layout/Background';
import Border from '@/game/layout/Border';
import store from '@/store';

export default class PlayScene extends Scene {
  constructor() {
    super({ key: 'PlayScene' });
    this.gameWidth = game.config.width;
    this.gameHeight = game.config.height;
    this.store = store;
  }

  create(data) {
    this.level = data.level;
    console.log(this);
    new Background(this, this.gameWidth / 2, this.gameHeight / 2, 'background.industrial');

    // for no bottom collision fourth to false
    this.physics.world.setBoundsCollision(true, true, true, true);
    this.buildUiBorders();

    this.input.on('pointerup', () => {
      this.ball.start();
    });

    this.sound.add('thud');
    this.physics.world.on('worldbounds', () => {
      //   this.sound.play('thud', { volume: 0.75 });
    });
    console.log(this.store.state);
    this.blocks = generateBlocks(this, this.store.state.game.level, 30, 2);
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
    this.physics.add.collider(this.ball, this.r1);
  }

  update() {
    if (!this.ball.isMoving) {
      this.ball.setToPosition(this.slider.x);
    }
    if (!this.blocks.children.size) {
      this.store.dispatch('addLevel');
      this.game.scene.start('PlayScene', { level: this.store.state.game.level });
    }
  }

  blockCollision(ball, block) {
    this.store.dispatch('addToScore', 10);
    block.despawn();
  }

  sliderCollision(slider, ball) {
    this.slider.onBallCollision(ball);
  }

  buildUiBorders() {
    this.r1 = new Border(this, 'rectangle', 0, 0, this.gameWidth, 30);
  }
}
