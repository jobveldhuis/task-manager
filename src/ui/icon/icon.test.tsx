import { render } from "@testing-library/react-native";
import { Icon } from "./index";

describe("Icon", () => {
  it("should match snapshot", async () => {
    expect(render(<Icon name="magic" />).toJSON()).toMatchSnapshot();
  });
});
