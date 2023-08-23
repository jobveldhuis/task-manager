import { render, screen, fireEvent } from "@testing-library/react-native";
import { Button } from "./index";

describe("Button", () => {
  const button = <Button title="Test me out!" onPress={() => {}} />;

  it("should match snapshot", () => {
    expect(render(button).toJSON()).toMatchSnapshot();
  });

  it("should render correctly", () => {
    render(button);
    expect(screen.getByText("Test me out!")).toBeTruthy();
  });

  it("should be clickable when provided with an onClick", async () => {
    const handlePress = jest.fn();
    const clickableButton = <Button title="Test" onPress={handlePress} />;

    render(clickableButton);
    const selectedButton = screen.getByText("Test");
    expect(selectedButton).toBeTruthy();
    expect(handlePress).toBeCalledTimes(0);

    fireEvent(selectedButton, "press");
    expect(handlePress).toBeCalledTimes(1);
  });
});
