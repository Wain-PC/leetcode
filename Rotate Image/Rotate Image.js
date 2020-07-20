/* eslint-disable no-param-reassign */

const rotateImage = (matrix) => {
  const n = matrix.length;
  const middle = Math.floor(n / 2);

  // Step 1. Invert the rows
  for (let i = 0; i < middle; i++) {
    for (let j = 0; j < n; j++) {
      const tmp = matrix[i][j];
      const newI = n - 1 - i;
      matrix[i][j] = matrix[newI][j];
      matrix[newI][j] = tmp;
    }
  }

  // Step 2. Invert diagonally.
  const l = n - 1;
  for (let i = 0; i <= l; i++) {
    for (let j = 0; j <= i; j++) {
      const row = j;
      const column = l - i + j;

      const tmp = matrix[row][column];

      matrix[row][column] = matrix[column][row];
      matrix[column][row] = tmp;
    }
  }

  return matrix;
};

module.exports = { solve: rotateImage };
