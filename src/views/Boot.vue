<template>
  <div class="flex flex-column">
    <spinner></spinner>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Spinner from '@/components/Spinner';

export default {
  data() {
    return {
      timedLoading: true
    };
  },
  components: {
    Spinner
  },
  computed: {
    ...mapState(['game']),
    loading() {
      return this.game.loading;
    }
  },
  methods: {
    startScene() {
      game.scene.start('MainMenuScene');
    }
  },

  watch: {
    loading(loading) {
      if (!loading && !this.timedLoading) {
        this.startScene();
      }
    },
    timedLoading(timedLoading) {
      if (!this.loading && !timedLoading) {
        this.startScene();
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.timedLoading = false;
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
.flex {
  justify-content: center;
  align-items: center;
  background-color: rgb(26, 26, 26);
}
</style>
