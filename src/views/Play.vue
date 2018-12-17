<template>
  <div class="topmenu">
    <div class="topmenu--item level">Level: {{game.level + 1}}</div>
    <div class="topmenu--item lives">Lives: {{game.lives}}</div>
    <div class="topmenu--item score">Score: {{game.score}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['game'])
  },
  mounted() {
    console.log(this.game.lives);
  }
};
</script>

<style lang="scss" scoped>
.topmenu {
  display: flex;
  justify-content: space-between;
  background-color: #000;
  height: 35px;
  &--item {
    flex: 1;
    margin: 4px 30px;
    color: #fff;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
