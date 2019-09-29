<template>
    <div class = "Grid">
        <h1>{{ "GRID SHOULD BE HERE" }}</h1>
    <ul id="GRID HERE">
<!--        <li v-for="(kek, index) in kek[0]" :key="index">-->
<!--            {{tile.x}}:{{tile.y}},-->
<!--        </li>-->
    </ul>
    </div>
</template>

<script>
    class Tile
    {
        constructor(x, y)
        {
            this.x = x;
            this.y = y;
            this.isWall = Boolean;
        }

        flipIsWall() //Swaps is wall from false -> true or true -> false
        {
            this.isWall = !this.isWall;
        }

        toString()
        {
            console.log(this.x+", "+this.y);
        }
    }

    class Grid{
        constructor() {
            this.width = 10;
            this.height = 10;
            this.tiles = [[]];
            this.initializeTiles();
        }

        initializeTiles()
        {
            for(var x = 0; x < this.width; x++)
            {
                this.tiles[x] = [];
                for(var y = 0; y < this.height; y++)
                {
                    this.tiles[x][y] = new Tile(x,y);
                }
            }
        }

        toString()
        {
            console.log("width: "+this.width+", height: "+this.height);
        }
    }

    export default {
        name: "Grid",
        data: function(){
                return {
                    Grid: Grid
                }
            }
    }
</script>

<style scoped>

</style>