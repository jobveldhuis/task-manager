import { render } from "@testing-library/react-native";
import { Icon } from "./icon.component";

describe("Icon", () => {
  it("should match snapshot", async () => {
    expect(render(<Icon name="magic" />).toJSON()).toMatchSnapshot();
  });
});
