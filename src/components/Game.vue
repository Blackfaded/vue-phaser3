<template>
  <div id="game-container"></div>
</template>


<script>
import launch from '@/game/game';

export default {
  name: 'Game',
  mounted() {
    window.game = launch();
  }
};
</script>


<style lang="scss" scoped>
.placeholder {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}
</style>
