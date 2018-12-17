<template>
  <div class="flex flex-column">
    <v-button @click="startGame">New Game</v-button>
    <v-button @click="levelScreen">Levels</v-button>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  components: {
    'v-button': Button
  },
  methods: {
    startGame() {
      game.scene.start('PlayScene', { level: 0 });
      this.$router.push('play');
    },
    levelScreen() {
      this.$router.push('levels');
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
</style>
