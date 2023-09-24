import { fireEvent, render, screen } from "@testing-library/react-native";
import { DateInput } from "./date-input.component";

describe("DateInput", () => {
  const handlePress = jest.fn();

  const component = (
    <DateInput value={new Date(1695574265000)} onPress={handlePress} />
  );

  it("should match snapshot for a date input", () => {
    expect(render(component).toJSON()).toMatchSnapshot();
  });

  it("should render a human readable date", () => {
    render(component);
    expect(screen.getByText("24 September 2023")).toBeTruthy();
  });

  it("should fire the onPress event when pressed", () => {
    const { UNSAFE_getByType: getByType } = render(component);
    const dateInput = getByType(DateInput);

    expect(handlePress).not.toHaveBeenCalled();
    fireEvent(dateInput, "press");
    expect(handlePress).toHaveBeenCalled();
  });
});
