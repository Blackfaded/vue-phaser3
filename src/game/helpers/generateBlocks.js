import Block from '@/game/objects/Block';
import levels from '@/game/levels';
import { randomInteger } from '@/game/helpers/math';

export default (scene, level, blockWidth, blockMargin) => {
  const blocks = scene.physics.add.staticGroup();

  levels[level].forEach((row, rowIndex) => {
    const rowWidth = row.length;
    row.forEach((block, blockIndex) => {
      if (block) {
        const leftOffset =
          (game.config.width - (rowWidth * blockWidth + rowWidth * (blockMargin * 2))) / 2;
        const topOffset = 60;

        const x = leftOffset + blockIndex * (blockWidth + blockMargin * 2) + blockWidth / 2;
        const y = topOffset + rowIndex * (10 + blockMargin);

        const randomImageNumber = randomInteger(10);
        const imageName = `block_${randomImageNumber < 10 ? '0' : ''}${randomImageNumber}`;

        const blockObj = new Block(scene, x, y, imageName, blockWidth, blockMargin);

        blocks.add(blockObj);
      }
    });
  });
  return blocks;
};
