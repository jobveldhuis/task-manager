import { render } from "@testing-library/react-native";
import { Text } from "@/ui/text";
import { KeyboardDismissalView } from "./keyboard-dismissal-view.component";

describe("KeyboardDismissalView", () => {
  const component = (
    <KeyboardDismissalView>
      <Text>Test</Text>
    </KeyboardDismissalView>
  );

  it("should match snapshot", () => {
    expect(render(component).toJSON()).toMatchSnapshot();
  });
});
