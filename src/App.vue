<template>
  <div id="#app">
    <Grid/>
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";

// const grid = new Grid(10, 10);
// grid.toString();

export default {
  name: "app",
  components: {
    Grid
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/style.scss";
</style>