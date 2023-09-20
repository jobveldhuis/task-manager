export const ratingValues = [
  "happy",
  "veryHappy",
  "mad",
  "sad",
  "love",
] as const;

export type Rating = (typeof ratingValues)[number];
