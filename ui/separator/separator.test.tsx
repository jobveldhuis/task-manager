import { Separator } from "./index";
import { render } from "@testing-library/react-native";

describe("Separator", () => {
  const component = <Separator />;

  it("should match snapshot", async () => {
    expect(render(component).toJSON()).toMatchSnapshot();
  });
});
