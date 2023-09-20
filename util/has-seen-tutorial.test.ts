import { hasSeenTutorial } from "./has-seen-tutorial";
import { getItemAsync } from "expo-secure-store";

jest.mock("expo-secure-store", () => ({
  ...jest.requireActual("expo-secure-store"),
  getItemAsync: jest.fn(),
}));

describe("hasSeenTutorial", () => {
  it("should return false when the user opens the system for the first time", async () => {
    (getItemAsync as jest.Mock).mockImplementation(() => null);
    expect(await hasSeenTutorial("FAKE_USER_ID")).toEqual(false);
  });

  it("should return false when the user data contains the key, but it is false", async () => {
    (getItemAsync as jest.Mock).mockImplementation(() =>
      JSON.stringify({ hasSeenTutorial: false }),
    );

    expect(await hasSeenTutorial("FAKE_USER_ID")).toEqual(false);
  });

  it("should return false when the user data contains the key, but it is not true", async () => {
    (getItemAsync as jest.Mock).mockImplementation(() =>
      JSON.stringify({ hasSeenTutorial: "random_words" }),
    );

    expect(await hasSeenTutorial("FAKE_USER_ID")).toEqual(false);
  });

  it("should return true when the user data contains the key and it is true", async () => {
    (getItemAsync as jest.Mock).mockImplementation(() =>
      JSON.stringify({ hasSeenTutorial: true }),
    );

    expect(await hasSeenTutorial("FAKE_USER_ID")).toEqual(true);
  });
});
