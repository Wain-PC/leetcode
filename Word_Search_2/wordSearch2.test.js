const solve = require("./wordSearch2");

describe("Word Search", () => {
  let sampleInput;
  let words;
  beforeEach(() => {
    sampleInput = [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ];
    words = ["oath", "pea", "eat", "rain"];
  });
  it("should solve example 1", () => {
    expect(solve(sampleInput, words)).toEqual(["eat", "oath"]);
  });
});
