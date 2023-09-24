import { ErrorDialog } from "@/ui/error-dialog/error-dialog.component";
import { render, screen } from "@testing-library/react-native";

describe("ErrorDialog", () => {
  const component = <ErrorDialog code="auth/invalid-email" />;
  it("should match snapshot", () => {
    expect(render(component).toJSON()).toMatchSnapshot();
  });

  it("should render the error message", () => {
    render(component);
    expect(
      screen.getByText("Please provide a valid e-mail address."),
    ).toBeTruthy();
  });
});
