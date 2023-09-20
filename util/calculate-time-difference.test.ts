import { calculateTimeDifference } from "./calculate-time-difference";

describe("calculateTimeDifference", () => {
  it("should calculate the difference when B is an exact reference to yesterday", () => {
    const today = new Date();
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);

    expect(calculateTimeDifference(today, yesterday)).toEqual({
      days: 1,
      hours: 0,
      minutes: 0,
    });
  });

  it("should calculate the difference regardless of order", () => {
    const today = new Date();
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);

    expect(calculateTimeDifference(yesterday, today)).toEqual(
      calculateTimeDifference(today, yesterday),
    );
  });
});
