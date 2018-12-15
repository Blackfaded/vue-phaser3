<template>
  <div class="flex flex-column">
    <v-button @click="startGame">Start</v-button>
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
      game.scene.start('PlayScene');
      this.$router.push('play');
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
