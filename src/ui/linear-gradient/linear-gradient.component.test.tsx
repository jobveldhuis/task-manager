import { render } from "@testing-library/react-native";
import { Text } from "@/ui/text";
import { LinearGradient } from "./linear-gradient.component";

describe("LinearGradient", () => {
  it("should match snapshot", () => {
    expect(
      render(
        <LinearGradient>
          <Text>Test</Text>
        </LinearGradient>,
      ).toJSON(),
    ).toMatchSnapshot();
  });
});
