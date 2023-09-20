import { mapRatingToEmoji } from "./map-rating-to-emoji";

describe("mapRatingToEmoji", () => {
  it("should map the rating to the correct emoji", () => {
    expect(mapRatingToEmoji("happy")).toEqual("👍");
  });
});
