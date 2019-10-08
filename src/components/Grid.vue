<template>
  <div class="Grid">
    <table id="GRID">
      <tr class="col" v-for="(tiles, index) in tiles" :key="index">
        <ul class="row" v-for="(tiles, index) in tiles" :key="index">
          <td v-if="tiles.pathBegin === true" :id="tiles.id" v-bind:style="startColor"></td>
          <td v-else-if="tiles.pathEnd === true" :id="tiles.id" v-bind:style="stopColor" ></td>
          <td v-else :id="tiles.id"  v-bind:style="tiles.isWall ? { 'backgroundColor':  'red'} : {'backgroundColor' : 'blue'}" v-on:click="flipIsWall(tiles.x, tiles.y)" ></td>
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
      wallOn: {
        backgroundColor: '#1EB980'
      },
      wallOff: {
        backgroundColor: 'transparent'
      },
      startColor: {
        backgroundColor: 'green'
      },
      stopColor:  {
        backgroundColor: 'red'
      },
      
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
          let createdTile = {
            id: this.id,
            x: x,
            y: y,
            isWall: true,
            pathBegin: x === 12 && y === 10,
            pathEnd: x === 38 && y == 10
          };
          this.tiles[y].push(createdTile);
        }
      }
    },
    flipIsWall(x,y) {
      this.tiles[x][y].isWall = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/style.scss";
</style>