<template>
  <div>
    <Game class="game"/>
    <router-view class="ui"></router-view>
  </div>
</template>


<script>
import Game from '@/components/Game';

export default {
  name: 'App',
  components: { Game },
  mounted() {
    this.$router.push('/');
  }
};
</script>


<style lang="scss">
body {
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  .game {
    position: absolute;
    left: 0;
    top: 0;
  }
  .ui {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    * {
      pointer-events: auto;
    }
  }
}
</style>
