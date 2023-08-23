import { render, screen } from "@testing-library/react-native";
import { TutorialItem } from "./tutorial-item";

describe("TutorialItem", () => {
  const component = (
    <TutorialItem title="Foo is a bar" icon="flag-checkered">
      This is a beautiful time to be alive!
    </TutorialItem>
  );
  it("should match snapshot", () => {
    expect(render(component).toJSON()).toMatchSnapshot();
  });

  it("should contain a title with icon", () => {
    render(component);

    // This container only exists when an icon is rendered with a title.
    expect(screen.getByTestId("title-container")).toBeTruthy();
    expect(screen.getByText("Foo is a bar")).toBeTruthy();
  });

  it("should contain text content", () => {
    render(component);

    expect(
      screen.getByText("This is a beautiful time to be alive!"),
    ).toBeTruthy();
  });
});
