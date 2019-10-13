<template>
  <div class="Grid">
    <Controls v-on:visualize="visualizeDijkstra()"/>
    <table id="GRID">
      <tr class="col" v-for="(row, rowIndex) in tiles" :key="rowIndex">
        <ul class="row" v-for="(tile, colIndex) in row" :key="colIndex">
          <!-- else if case for start end and regular wall td/objects-->
          <td
            v-if="tile.pathBegin === true"
            :isVisisted="true"
            :id="tile.id"
            :class="{startColor: tile.pathBegin}"
          ></td>
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
import Controls from "@/components/Controls.vue";
import { dijkstra, getTilesInShortestPathOrder } from "@/algo/dijkstra";
export default {
  name: "Grid",
  data() {
    return {
      width: 50,
      height: 20,
      tiles: [],
      mouseIsPressed: false,
      beginX: 12,
      beginY: 10,
      endX: 32,
      endY: 15,
    };
  },
  components: {
    Controls
  },
  created() {
    // on init create the grid
    this.initializeTiles();
  },
  updated() {
  },
  methods: {
    // makes the array grid
    initializeTiles() {
      // rows
      for (let y = 0; y < this.height; y++) {
        const currentRow = [];
        // col
        for (let x = 0; x < this.width; x++) {
          currentRow.push(this.createTile(x, y));
        }
        this.tiles.push(currentRow);
      }
    },
    // tile object
    // these are used for start and end destinations too
    createTile(x, y) {
      return {
        id: x + "," + y,
        x,
        y,
        isWall: false,
        isVisisted: false,
        previousTile: null,
        distance: Infinity,
        pathBegin: x === this.beginX && y === this.beginY,
        pathEnd: x === this.endX && y === this.endY 
      };
    },
    // called when click just first click
    handleMouseDown(y, x) {
      this.flipIsWall(x, y);
      this.mouseIsPressed = true;
    },
    // called when pressed and is holding part
    handleMouseEnter(y, x) {
      if (!this.mouseIsPressed) return;
      this.flipIsWall(x, y);
    },
    // called when up to cancel hold
    handleMouseUp() {
      this.mouseIsPressed = false;
    },
    // makes tile object isWall prop to false
    flipIsWall(x, y) {
      this.tiles[x][y].isWall = !this.tiles[x][y].isWall;
    },
    visualizeDijkstra() {
      let tiles = this.tiles;
      let begin = tiles[this.beginY][this.beginX];
      let end = tiles[this.endY][this.endX];
      const visitedTilesInOrder = dijkstra(tiles, begin, end);
      const tilesInShortestPathOrder = getTilesInShortestPathOrder(end);
      this.animateDijkstra(visitedTilesInOrder, tilesInShortestPathOrder)
    },
    animateDijkstra(visitedNodesInOrder, tilesInShortestPathOrder) {
      for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        if (i === visitedNodesInOrder.length) {
          setTimeout(() => {
            this.animateShortestPath(tilesInShortestPathOrder);
          }, 10 * i);
          return;
        }
        setTimeout(() => {
          const tile = visitedNodesInOrder[i];
          document.getElementById(`${tile.x},${tile.y}`).className =
            "tile-visited";

        }, 10 * i);
      }
    },

    animateShortestPath(tilesInShortestPathOrder) {
      for (let i = 0; i < tilesInShortestPathOrder.length; i++) {
        setTimeout(() => {
          const tile = tilesInShortestPathOrder[i];
          document.getElementById(`${tile.x},${tile.y}`).className =
            "tile-shortest-path";
        }, 80 * i);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/style.scss";
</style>