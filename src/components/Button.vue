
<template>
  <button @click="onClick" class="button">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  outline: none;
  background-color: rgb(26, 4, 4);
  width: 300px;
  height: 80px;
  color: #fff;
  border: 1px solid #420309;
  border-radius: 15px;
  box-shadow: 6px 10px 89px 5px rgba(0, 0, 0, 0.75);
  font-size: 33pt;
  letter-spacing: 3pt;
}
</style>
