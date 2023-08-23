import { BackgroundView } from "./index";
import { View, Text } from "react-native";
import { render, screen } from "@testing-library/react-native";

describe("BackgroundView", () => {
  const backgroundScreen = (
    <BackgroundView>
      <View>
        <Text>Test</Text>
      </View>
    </BackgroundView>
  );

  it("should match snapshot", () => {
    expect(render(backgroundScreen).toJSON()).toMatchSnapshot();
  });

  it("should render correctly", async () => {
    render(backgroundScreen);
    const background = await screen.getByTestId("background");

    // Should find both the background and the text in the rendered output.
    expect(background).toBeTruthy();
    expect(screen.findByText("Test")).toBeTruthy();
  });
});
