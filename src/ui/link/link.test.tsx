import { render, screen } from "@testing-library/react-native";
import { Icon } from "@/ui/icon";
import { Link } from "./link.component";

jest.mock("@expo/vector-icons/FontAwesome5");

describe("Link", () => {
  const handlePress = jest.fn();

  const component = <Link text="Foo" onPress={handlePress} />;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should match snapshot", () => {
    expect(render(component).toJSON()).toMatchSnapshot();
  });

  it("should display the text passed as a prop", () => {
    render(component);
    expect(screen.getByText("Foo")).toBeTruthy();
  });

  it("should display an icon by default", () => {
    const { UNSAFE_getByType: getByType } = render(component);
    const icon = getByType(Icon);

    expect(icon).toBeTruthy();
  });

  it("should hide the icon if passed as prop", () => {
    const { UNSAFE_queryByType: queryByType } = render(
      <Link text="Foo" onPress={handlePress} shouldHideArrow />,
    );

    const icon = queryByType(Icon);
    expect(icon).toBeFalsy();
  });
});
