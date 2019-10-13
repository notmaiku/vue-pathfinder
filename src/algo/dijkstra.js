// Performs Dijkstra's algorithm; returns *all* tiles in the order
export function dijkstra(grid, pathBegin, pathEnd) {
    const visitedTilesInOrder = [];
    pathBegin.distance = 0;
    const unvisitedTiles = getAllTiles(grid);
    while (!!unvisitedTiles.length) {
        sortTilesByDistance(unvisitedTiles);
        const closestTile = unvisitedTiles.shift();
        if (closestTile.isWall) continue;
        if (closestTile.distance == Infinity) return visitedTilesInOrder;
        closestTile.isVisited = true;
        visitedTilesInOrder.push(closestTile);
        if (closestTile == pathEnd) return visitedTilesInOrder;
        updateUnvisitedNeighbors(closestTile, grid);
    }
}


function getUnvisitedNeighbors(tile, grid) {
    const neighbors = [];
    const {
        x,
        y
    } = tile;
    if (y > 0) neighbors.push(grid[y - 1][x]);
    if (y < grid.length - 1) neighbors.push(grid[y + 1][x]);
    if (x > 0) neighbors.push(grid[y][x - 1]);
    if (x < grid[0].length - 1) neighbors.push(grid[y][x + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
}

function sortTilesByDistance(unvisitedTiles) {
    unvisitedTiles.sort((tileA, tileB) => tileA.distance - tileB.distance);
}

function updateUnvisitedNeighbors(tile, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(tile, grid);
    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = tile.distance + 1;
        neighbor.previousTile = tile;
    }
}

function getAllTiles(grid) {
    const tiles = [];
    grid.forEach(y => {
        y.forEach(tile => {
            tiles.push(tile);
        });
    });
    return tiles;
}


export function getTilesInShortestPathOrder(pathEnd) {
    const tilesInShortestPathOrder = [];
    let currentTile = pathEnd;
    while (currentTile !== null) {
        tilesInShortestPathOrder.unshift(currentTile);
        currentTile = currentTile.previousTile;
    }
    return tilesInShortestPathOrder;
}