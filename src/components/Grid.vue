<template>
  <div class="Grid">
    <table id="GRID">
      <tr  class="row" v-for="(tiles, index) in tiles" :key="index">
        <ul  class="col" v-for="(tiles, index) in tiles" :key="index">
          <td id="tile" v-bind:style="tiles" v-on:click="changeColor"></td>
        </ul>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Grid",
  data() {
    return {
      width: 10,
      height: 10,
      tiles: [[]],
      Tile: {
        x: 0,
        y: 0,
        isWall: false
      },
    };
  },
  created() {
    this.initializeTiles();
  },
  methods: {
    initializeTiles() {
      for (var x = 0; x < this.width; x++) {
        this.tiles[x] = [this.height];
      }

      for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
          this.tiles[x][y] = this.Tile;
          // document.write("("+x+","+y+")")
        }
        // document.write("</br>")
      }
    },
    flipIsWall: () => {
      //Swaps is wall from false -> true or true -> false
      this.isWall = !this.isWall;
    },
    toString: () => {
      console.log(this.x + ", " + this.y);
    },
    changeColor(prop) {
      var prop = document.getElementById("tile").style.backgroundColor="#FFFFFF";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/s/style.scss";
</style>