import { render } from "@testing-library/react-native";
import { Separator } from "./index";

describe("Separator", () => {
  const component = <Separator />;

  it("should match snapshot", async () => {
    expect(render(component).toJSON()).toMatchSnapshot();
  });
});
