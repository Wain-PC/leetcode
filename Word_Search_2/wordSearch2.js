/* eslint-disable no-param-reassign */

/**
 * @param {string[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
  const output = {};
  const length = board[0] ? board[0].length : 0;
  const BFS = (x, y, obj, word = "") => {
    if (x < 0 || x >= length || y < 0 || y >= board.length) {
      return;
    }
    const letter = board[y][x];
    if (!obj[letter]) {
      return;
    }
    if (obj[letter].ends) {
      output[word + letter] = true;
    }
    board[y][x] = "";
    BFS(x - 1, y, obj[letter], word + letter); // left
    BFS(x + 1, y, obj[letter], word + letter); // right
    BFS(x, y - 1, obj[letter], word + letter); // up
    BFS(x, y + 1, obj[letter], word + letter); // down
    board[y][x] = letter;
  };
  // Step 1. Create trie from words.
  const root = {};
  words.forEach((word) => {
    let obj = root;
    word.split("").forEach((letter, i, arr) => {
      if (!obj[letter]) {
        obj[letter] = {};
      }
      obj = obj[letter];
      if (i === arr.length - 1) {
        obj.ends = true;
      }
    });
  });
  // Step 2. BFS the board using the created trie.
  for (let x = 0; x < length; x++) {
    for (let y = 0; y < board.length; y++) {
      BFS(x, y, root);
    }
  }

  return Object.keys(output).sort();
};

module.exports = findWords;
