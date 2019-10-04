<template>
  <div id="#app">
    <Nav />
    <Grid/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Grid from "./components/Grid.vue";

// const grid = new Grid(10, 10);
// grid.toString();

export default {
  name: "app",
  components: {
    Nav,
    Grid
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/s/style.scss";
#app {
  background: #424242;
  height: 100%;
}
</style>