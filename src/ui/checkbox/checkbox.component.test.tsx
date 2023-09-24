import { Checkbox } from "@/ui/checkbox/checkbox.component";
import { fireEvent, render, screen } from "@testing-library/react-native";

describe("Checkbox", () => {
  it("should match snapshot", () => {
    expect(
      render(
        <Checkbox isChecked onPress={() => {}} onLongPress={() => {}} />,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("should handle a press event", () => {
    const handlePress = jest.fn();
    const handleLongPress = jest.fn();
    render(
      <Checkbox
        isChecked
        onPress={handlePress}
        onLongPress={handleLongPress}
        testID="checkbox"
      />,
    );

    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeTruthy();
    fireEvent(checkbox, "press");
    expect(handlePress).toHaveBeenCalled();
    expect(handleLongPress).not.toHaveBeenCalled();
  });

  it("should handle a long press event", () => {
    const handlePress = jest.fn();
    const handleLongPress = jest.fn();
    render(
      <Checkbox
        isChecked
        onPress={handlePress}
        onLongPress={handleLongPress}
        testID="checkbox"
      />,
    );

    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeTruthy();
    fireEvent(checkbox, "longPress");
    expect(handlePress).not.toHaveBeenCalled();
    expect(handleLongPress).toHaveBeenCalled();
  });
});
