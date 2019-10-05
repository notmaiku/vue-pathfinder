<template>
  <div class="Grid">
    <table id="GRID">
      <tr class="row" v-for="(tiles, index) in tiles" :key="index">
        <ul class="col" v-for="(tiles, index) in tiles" :key="index">
          <td :id="tiles" v-bind:style="tiles"></td>
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
        x: 1,
        y: 1,
        isWall: false
      }
    };
  },
  created() {
    this.initializeTiles();
  },
  mounted() {
    this.changeColor();
  },

  methods: {
    initializeTiles() {
      for (var x = 0; x <= this.height; x++) {
        this.tiles[x] = [this.width];
      }

      for (var x = 0; x <= this.width; x++) {
        for (var y = 0; y <= this.height; y++) {
          this.id = x + "," + y;
          this.Tile = this.id;
          this.tiles[y][x] = this.Tile;
          // document.write("("+x+","+y+")")
        }
        // document.write("</br>")
      }
    },
    flipIsWall() {
      //Swaps is wall from false -> true or true -> false
      this.isWall = !this.isWall;
    },
    toString: () => {
      console.log(this.x + ", " + this.y);
    },
    changeColor() {
      const tiles = document.querySelectorAll("td");
      tiles.forEach(tile => {
        var coord = document.getElementById(tile.id);
        coord.addEventListener("click", event => {
          coord.style.backgroundColor = "#1c1c54";
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/style.scss";
</style>