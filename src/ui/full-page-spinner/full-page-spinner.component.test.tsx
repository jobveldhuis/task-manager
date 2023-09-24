import { render } from "@testing-library/react-native";
import { FullPageSpinner } from "@/ui/full-page-spinner/full-page-spinner.component";

describe("FullPageSpinner", () => {
  it("should match snapshot", () => {
    expect(render(<FullPageSpinner />).toJSON()).toMatchSnapshot();
  });
});
