<template>
  <div class="Grid">
    <table id="GRID">
      <tr class="col" v-for="(tiles, index) in tiles" :key="index">
        <ul class="row" v-for="(tiles, index) in tiles" :key="index">
          <td :id="tiles.id" v-on:click="flipIsWall" ></td>
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
      width: 30,
      height: 10,
      tiles: [[]],
      Tile: {
        id: "",
        x: 0,
        y: 0,
        isWall: false
      }
    };
  },
  created() {
    this.initializeTiles();
    this.printTiles();
  },
  methods: {

    createArray(length) {
      var arr = new Array(length || 0),
          i = length;
      if (arguments.length > 1)
      {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = this.createArray.apply(this, args);
      }

      for (var x = 0; x <= this.width; x++) {
        for (var y = 0; y <= this.height; y++) {
          this.id = y + "," + x;
          var Tile = { x: y, y: x, isWall: false, id: this.id };
          this.tiles[x][y] = Tile;

          // document.write("("+x+","+y+")")
        }
      }
    },
    toString() {
      console.log(this.x + ", " + this.y);
    },
    flipIsWall() {
      const tileSelect = document.querySelectorAll("td");
      tileSelect.forEach(tile => {
        var coord = document.getElementById(tile.id);
        coord.addEventListener("click", event => {
          console.log(coord);
          coord.style.backgroundColor = "#1c1c54";
          this.tiles.forEach(index => {
            for(var i = 0; i < 10; i++){
              if(index[i].id == tile.id){
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