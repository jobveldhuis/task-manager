import { Text } from "@/ui/text";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { BlurView } from "expo-blur";
import { Modal } from "./modal.component";

describe("Modal", () => {
  const handleBackgroundPress = jest.fn();

  const component = (
    <Modal onBackgroundPress={handleBackgroundPress}>
      <Text>Modal Content</Text>
    </Modal>
  );

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should match snapshot", () => {
    expect(render(component).toJSON()).toMatchSnapshot();
  });

  it("should render the content in the foreground with a blurred background", () => {
    const { UNSAFE_getByType: getByType } = render(component);
    expect(screen.getByText("Modal Content")).toBeTruthy();

    expect(getByType(BlurView)).toBeTruthy();
  });

  it("should allow pressing the background", () => {
    const { UNSAFE_getByType: getByType } = render(component);
    expect(screen.getByText("Modal Content")).toBeTruthy();

    const background = getByType(BlurView);
    expect(background).toBeTruthy();

    expect(handleBackgroundPress).not.toHaveBeenCalled();
    fireEvent(background, "touchEnd");
    expect(handleBackgroundPress).toHaveBeenCalledTimes(1);
  });
});
