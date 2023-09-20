import { getStartOfDay } from "./get-start-of-day";

describe("getStartOfDay", () => {
  it("should retrieve the start of the day for today", () => {
    const today = new Date();
    const startOfDay = getStartOfDay(today);
    expect(startOfDay.getHours()).toEqual(0);
    expect(startOfDay.getMinutes()).toEqual(0);
    expect(startOfDay.getSeconds()).toEqual(0);
    expect(startOfDay.getMilliseconds()).toEqual(0);
  });

  it("should not modify the original date object", () => {
    const notMidnight = new Date(1695207886);
    const startOfDay = getStartOfDay(notMidnight);
    expect(startOfDay.getTime()).toEqual(1638000000);
    expect(notMidnight.getTime()).toEqual(1695207886);
  });
});
