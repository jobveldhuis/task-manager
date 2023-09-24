import { mapErrorCodeToMessage } from "@/util/map-error-code-to-message";

describe("mapErrorCodeToMessage", () => {
  it("should map to a default message if it does not exist", () => {
    expect(mapErrorCodeToMessage("custom/does-not-exist")).toEqual(
      "Something went wrong. This might be a temporary issue on our end. Please try again later.",
    );
  });

  it("should map to a message if the error code does exist", () => {
    expect(mapErrorCodeToMessage("auth/invalid-email")).toEqual(
      "Please provide a valid e-mail address.",
    );
  });
});
