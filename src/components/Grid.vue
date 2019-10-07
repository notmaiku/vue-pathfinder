<template>
  <div class="Grid">
    <table id="GRID">
      <tr class="col" v-for="(tiles, index) in tiles" :key="index">
        <ul class="row" v-for="(tiles, index) in tiles" :key="index">
          <td :id="tiles.id" v-on:click="flipIsWall" />
        </ul>
      </tr>
    </table>
  </div>
</template>

<script>
import { create } from "domain";
export default {
  name: "Grid",
  data() {
    return {
      width: 50,
      height: 20,
      tiles: [],
    };
  },
  created() {
    this.initializeTiles();
  },
  methods: {
    initializeTiles() {
      for (var x = 0; x < this.height; x++) {
        this.tiles[x] = [];
      }
      for (var x = 0; x < this.width; x++) {
        for (var y = 0; y < this.height; y++) {
          this.id = x + "," + y;
          let createdTile = { id: this.id, x: x, y: y, isWall: false };
          this.tiles[y].push(createdTile);
        }
      }
    },
    flipIsWall() {
      const tileSelect = document.querySelectorAll("td");
      tileSelect.forEach(tile => {
        console.log(tile);
        var coord = document.getElementById(tile.id);
        coord.addEventListener("click", event => {
          console.log(coord);
          coord.style.backgroundColor = "#1EB980";
          this.tiles.forEach(index => {
            for (var i = 0; i < 10; i++) {
              if (index[i].id == tile.id) {
                index[i].isWall = true;
              }
            }
          });
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/style.scss";
</style>