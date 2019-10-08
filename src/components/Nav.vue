<template>
    <header id="nav">
    <div class="left">
      <ul>
        <li><a href="#"><h1>Pathfinder</h1></a></li>
        <li><a href="#"><p>Start</p></a></li>
        <li><a href="#"><p>Reset</p></a></li>
        <li><a href="#"><p>Clear</p></a></li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li><a href="http://"><p>Algo</p><i class="fas fa-caret-down"></i></a></li>
        <li><a href="http://"><p>Map</p><i class="fas fa-caret-down"></i></a></li>
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