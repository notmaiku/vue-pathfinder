<template>
  <div id="#app">
    <Controls/>
    <Grid ref="method "/>
  </div>
</template>

<script>
import Controls from "@/components/Controls.vue";
import Grid from "@/components/Grid.vue";

// const grid = new Grid(10, 10);
// grid.toString();

export default {
  name: "app",
  components: {
    Controls,
    Grid
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/style.scss";
</style>