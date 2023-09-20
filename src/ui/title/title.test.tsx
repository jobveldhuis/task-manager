import { render, screen } from "@testing-library/react-native";
import { Title, variants } from "./index";

describe("Title", () => {
  it("should match snapshots for each variant without icon", async () => {
    const snapshots = variants.map((variant) => {
      const component = (
        <Title variant={variant}>Lorem ipsum dolor sit amet</Title>
      );
      return expect(render(component).toJSON()).toMatchSnapshot();
    });

    await Promise.all(snapshots);
  });

  it("should match snapshots for each variant with icon", async () => {
    const snapshots = variants.map((variant) => {
      const component = (
        <Title variant={variant} icon="calendar-alt">
          Lorem ipsum dolor sit amet
        </Title>
      );
      return expect(render(component).toJSON()).toMatchSnapshot();
    });

    await Promise.all(snapshots);
  });

  it("should render without icon when omitted from props", () => {
    render(<Title>This should not have an icon</Title>);
    expect(screen.getByText("This should not have an icon")).toBeTruthy();

    // This container only exists when we do render an icon.
    expect(screen.queryByTestId("title-container")).toBeFalsy();
  });

  it("should render with icon when specified in props", () => {
    render(<Title icon="calendar-alt">This should have an icon</Title>);

    // This container only exists when we do render an icon.
    expect(screen.getByTestId("title-container")).toBeTruthy();
  });
});
