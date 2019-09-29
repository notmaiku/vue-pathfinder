<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Grid />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Grid from "./components/Grid.vue";

// const grid = new Grid(10, 10);
// grid.toString();

export default {
  name: "app",
  components: {
    HelloWorld,
    Grid
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/s/style.scss";
</style>