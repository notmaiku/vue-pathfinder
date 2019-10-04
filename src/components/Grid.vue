<template>
  <div class="Grid">
    <h1>{{ "GRID SHOULD BE HERE" }}</h1>
    <div id="GRID">
      <ul  class="row" v-for="(tiles, index) in tiles" :key="index">
        <li v-text="tiles.x"></li>
        <ul  class="col" v-for="(tiles, index) in tiles" :key="index">
          <li v-text="tiles.y"></li>
        </ul>
      </ul>
    </div>
    <div id="container"></div>
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
      }
    };
  },
  mounted() {
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
    }
  }
};
</script>

<style scoped>
div#GRID  {
  width: 800px;
  height: 400px;
  padding: 20px;
  background: black;
}
#GRID ul{
  display: flex;
  list-style: none;
}
#GRID li {
  border: 3px solid green;
}

</style>