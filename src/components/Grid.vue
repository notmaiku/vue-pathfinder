<template>
  <div class="Grid">
    <table id="GRID">
      <tr class="row" v-for="(tiles, index) in tiles" :key="index">
        <ul class="col" v-for="(tiles, index) in tiles" :key="index">
          <td :id="tiles.id" v-bind:style="tiles"></td>
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
  mounted() {
    this.changeColor();
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

      return arr;
    },

    initializeTiles() {
      this.tiles = this.createArray(this.width,this.height);

      console.log(this.tiles.length +" "+this.tiles[0].length);

      for (var y = 0; y <= this.height; y++)
      {
        for (var x = 0; x <= this.width; x++)
        {
          // console.log(x+", "+y);
          this.id = x + "," + y;
          let createdTile = {id: this.id, x: x, y: y, isWall: false};
          this.tiles[x][y] = createdTile;
        }
      }
    },

    printTiles()
    {
      for (var y = 0; y <= this.height; y++)
      {
        for (var x = 0; x <= this.width; x++)
        {
          var currTile = this.tiles[x][y];
          console.log(currTile.x+", "+currTile.y);
        }
      }

      currTile = this.tiles[3][7];
      console.log(currTile.x+", "+currTile.y);
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
          console.log(coord);
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