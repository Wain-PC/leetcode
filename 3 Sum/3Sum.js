const solve = (nums) => {
  const result = [];

  const sorted = nums.sort((n1, n2) => n1 - n2);
  for (let i = 0; i < sorted.length - 2; i++) {
    let left = i + 1;
    let right = sorted.length - 1;

    if (sorted[i] > 0) {
      break;
    }

    if (i > 0 && sorted[i] === sorted[i - 1]) {
      // eslint-disable-next-line no-continue
      continue;
    }

    while (right > left) {
      const sum = sorted[i] + sorted[left] + sorted[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([sorted[i], sorted[left], sorted[right]]);
        while (sorted[left] === sorted[left + 1]) {
          left++;
        }

        while (sorted[right] === sorted[right - 1]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }

  return result;
};

module.exports = { solve };
