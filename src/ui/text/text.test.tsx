import { render, screen } from "@testing-library/react-native";
import { Text, variants } from "./index";

describe("Text", () => {
  it("should match snapshots for each variant", async () => {
    const snapshots = variants.map((variant) => {
      const component = (
        <Text variant={variant}>Lorem ipsum dolor sit amet</Text>
      );
      return expect(render(component).toJSON()).toMatchSnapshot();
    });

    await Promise.all(snapshots);
  });

  it("should render correctly", () => {
    const text = <Text>Hello world, this is a beautiful new day!</Text>;
    render(text);

    expect(
      screen.findByText("Hello world, this is a beautiful new day!"),
    ).toBeTruthy();
  });
});
