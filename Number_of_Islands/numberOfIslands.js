/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const DFS = ({x, y}) => {
    grid[y][x] = 0;
    if (y + 1 < grid.length && +grid[y + 1][x]) {
      DFS({x, y: y + 1});
    }
    if (y - 1 >= 0 && +grid[y - 1][x]) {
      DFS({x, y: y - 1});
    }
    if (x - 1 >= 0 && +grid[y][x - 1]) {
      DFS({x: x - 1, y});
    }
    if (x + 1 < length && +grid[y][x + 1]) {
      DFS({x: x + 1, y});
    }
  };


  let islands = 0;
  const length = grid[0] ? grid[0].length : 0;
  for (let x = 0; x < length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (+grid[y][x]) {
        islands++;
        DFS({x, y});
      }
    }
  }
  return islands;
};

module.exports = numIslands;
