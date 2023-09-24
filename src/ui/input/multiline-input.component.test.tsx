import { fireEvent, render } from "@testing-library/react-native";
import { MultilineInput } from "@/ui/input/multiline-input.component";
import { TextInput } from "react-native";

describe("MultilineInput", () => {
  const handleChange = jest.fn();

  const component = (
    <MultilineInput
      value="Test"
      onChange={handleChange}
      maxLength={40}
      numberOfLines={3}
    />
  );

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should match snapshot for a multiline input", () => {
    expect(render(component).toJSON()).toMatchSnapshot();
  });

  it("should fire an onChange with the new value of text", () => {
    const { UNSAFE_getByType: getByType } = render(component);

    const input = getByType(TextInput);
    expect(input).toBeTruthy();

    expect(handleChange).not.toHaveBeenCalled();
    fireEvent(input, "changeText", "The Wizard of Oz");
    expect(handleChange).toHaveBeenCalledWith("The Wizard of Oz");
  });

  it("should not fire the onChange when the amount of maximum lines is exceeded", () => {
    const { UNSAFE_getByType: getByType } = render(component);

    const input = getByType(TextInput);
    expect(input).toBeTruthy();

    expect(handleChange).not.toHaveBeenCalled();
    fireEvent(input, "changeText", "The\nWizard\nof\nOz\nis\ngreat");
    expect(handleChange).not.toHaveBeenCalled();
  });
});
