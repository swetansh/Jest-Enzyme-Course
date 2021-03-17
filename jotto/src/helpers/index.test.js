import { getLetterMatchCount } from ".";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("return count when no matching letter", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test("return count when there are 3 matching letter", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test("return count when there are duplicate letters in guessed word", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);   
  });
});
