const { solve } = require("./3Sum");

describe("3Sum", () => {
  const examples = [
    {
      query: [-1, 0, 1, 2, -1, 4], // [-1, -1, 0 , 1, 2, 4]
      answer: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },

    {
      query: [0, 0, 0, 0],
      answer: [[0, 0, 0]],
    },

    {
      query: [-1, 0, 1, 2, -1, -4],
      answer: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
