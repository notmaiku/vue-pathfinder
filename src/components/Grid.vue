<template>
  <div class="Grid">
    <table id="GRID">
      <tr class="col" v-for="(row, rowIndex) in tiles" :key="rowIndex">
        <ul class="row" v-for="(tile, colIndex) in row" :key="colIndex">
          <td v-if="tile.pathBegin === true" :id="tile.id" :class="{startColor: tile.pathBegin}"></td>
          <td v-else-if="tile.pathEnd === true" :id="tile.id" :class="{stopColor: tile.pathEnd}"></td>
          <td
            v-else
            :id="tile.id"
            :class="{wallOn: tile.isWall}"
            @mousedown="handleMouseDown(tile.x, tile.y)"
            @mouseenter="handleMouseEnter(tile.x,tile.y)"
            @mouseup="handleMouseUp()"
          ></td>
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
      width: 50,
      height: 20,
      tiles: [],
      mouseIsPressed: false
    };
  },
  created() {
    this.initializeTiles();
  },
  methods: {
    initializeTiles() {
      for (let y = 0; y < this.height; y++) {
        const currentRow = [];
        for (let x = 0; x < this.width; x++) {
          currentRow.push(this.createTile(x, y));
        }
        this.tiles.push(currentRow);
      }
    },
    createTile(x, y) {
      return {
        id: x + "," + y,
        y,
        x,
        isWall: false,
        pathBegin: x === 12 && y === 10,
        pathEnd: x === 38 && y == 10
      };
    },
    handleMouseDown(row, col) {
      this.flipIsWall(col, row)
      this.mouseIsPressed = true;
    },

    handleMouseEnter(row, col) {
      if (!this.mouseIsPressed) return;
      this.flipIsWall(col, row)
    },

    handleMouseUp() {
      this.mouseIsPressed = false;
    },

    flipIsWall(x, y) {
      this.tiles[x][y].isWall = !this.tiles[x][y].isWall;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/style.scss";
</style>