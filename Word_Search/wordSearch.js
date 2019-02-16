/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const length = board[0] ? board[0].length : 0;
  const DFS = (x, y, w) => {
    if (!w.length) {
      return true;
    }
    if (x < 0 || x >= length || y < 0 || y >= board.length) {
      return false;
    }

    const char = w[0];
    if (board[y][x] !== char) {
      return false;
    }
    board[y][x] = '';

    const wordLeft = w.slice(1);
    if (DFS(x, y + 1, wordLeft)) {
      return true;
    }
    if (DFS(x, y - 1, wordLeft)) {
      return true
    }
    if (DFS(x - 1, y, wordLeft)) {
      return true;
    }
    if (DFS(x + 1, y, wordLeft)) {
      return true;
    }
    board[y][x] = char;
    return false;
  };

  for (let x = 0; x < length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (DFS(x, y, word)) {
        return true;
      }
    }
  }
  return false;
};

module.exports = exist;
