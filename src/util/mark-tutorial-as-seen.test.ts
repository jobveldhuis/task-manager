import { getItemAsync, setItemAsync } from "expo-secure-store";
import { markTutorialAsSeen } from "./mark-tutorial-as-seen";

jest.mock("expo-secure-store", () => ({
  ...jest.requireActual("expo-secure-store"),
  setItemAsync: jest.fn(),
  getItemAsync: jest.fn(),
}));

// TypeScript needs to understand these have been mocked.
const mockedGetter = getItemAsync as jest.Mock;
const mockedSetter = setItemAsync as jest.Mock;

describe("markTutorialAsSeen", () => {
  it("should call setItemAsync with new data, if user does not exist in local storage", async () => {
    mockedGetter.mockImplementation(() => null);
    await markTutorialAsSeen("FAKE_USER_ID");

    expect(mockedGetter).toHaveBeenCalledWith("FAKE_USER_ID");
    expect(mockedSetter).toHaveBeenCalledWith(
      "FAKE_USER_ID",
      JSON.stringify({ hasSeenTutorial: true }),
    );
  });

  it("should call setItemAsync with new data, if user does exist in local storage", async () => {
    mockedGetter.mockImplementation(() =>
      JSON.stringify({ hasSeenTutorial: false }),
    );

    await markTutorialAsSeen("FAKE_USER_ID");

    expect(mockedGetter).toHaveBeenCalledWith("FAKE_USER_ID");
    expect(mockedSetter).toHaveBeenCalledWith(
      "FAKE_USER_ID",
      JSON.stringify({ hasSeenTutorial: true }),
    );
  });

  it("should call setItemAsync without overwriting other settings, when user exists in local storage", async () => {
    mockedGetter.mockImplementation(() =>
      JSON.stringify({
        hasSeenTutorial: false,
        foo: "bar",
        bar: 420,
      }),
    );
    await markTutorialAsSeen("FAKE_USER_ID");

    expect(mockedGetter).toHaveBeenCalledWith("FAKE_USER_ID");
    expect(mockedSetter).toHaveBeenCalledWith(
      "FAKE_USER_ID",
      JSON.stringify({ hasSeenTutorial: true, foo: "bar", bar: 420 }),
    );
  });
});
