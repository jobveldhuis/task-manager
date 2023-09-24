import { fireEvent, render } from "@testing-library/react-native";
import { Input } from "./input.component";

describe("Input", () => {
  it("should match snapshot for a text input", () => {
    expect(
      render(<Input value="Test" onChange={() => {}} type="text" />).toJSON(),
    ).toMatchSnapshot();
  });

  it("should match snapshot for an email input", () => {
    expect(
      render(
        <Input value="foo@bar.com" onChange={() => {}} type="email" />,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("should match snapshot for a password input", () => {
    expect(
      render(
        <Input value="VerySecret123!" onChange={() => {}} type="password" />,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("should match snapshot for a new password input", () => {
    expect(
      render(
        <Input
          value="VerySecret123!"
          onChange={() => {}}
          type="new-password"
        />,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("should fire an onChange with the new value of text", () => {
    const handleChange = jest.fn();

    const { UNSAFE_getByType: getByType } = render(
      <Input value="Test" onChange={handleChange} type="text" />,
    );

    const input = getByType(Input);
    expect(input).toBeTruthy();
    expect(handleChange).not.toHaveBeenCalled();

    fireEvent(input, "change", "The Wizard of Oz");
    expect(handleChange).toHaveBeenCalledWith("The Wizard of Oz");
  });
});
