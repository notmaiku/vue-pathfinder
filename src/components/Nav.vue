<template>
    <header id="nav">
    <div>
      <ul>
        <li>Pathfinder</li>
        <li>Start</li>
        <li>Reset</li>
        <li>Clear</li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li>Algo<i class="fas fa-caret-down"></i></li>
        <li>Map<i class="fas fa-caret-down"></i></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Nav",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/style.scss";
</style>