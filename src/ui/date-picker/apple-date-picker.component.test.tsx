import { fireEvent, render } from "@testing-library/react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { BlurView } from "expo-blur";
import { AppleDatePicker } from "./apple-date-picker.component";

describe("AppleDatePicker", () => {
  const handleBackgroundPress = jest.fn();
  const handleChange = jest.fn();
  const picker = (
    <AppleDatePicker
      onBackgroundPress={handleBackgroundPress}
      value={new Date(1695566021)}
      onChange={handleChange}
      minimumDate={new Date(1695566020)}
    />
  );

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should match snapshot", () => {
    expect(render(picker).toJSON()).toMatchSnapshot();
  });

  it("should fire the onChange event after clicking on a date", () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { UNSAFE_getByType } = render(picker);
    const renderedPicker = UNSAFE_getByType(DateTimePicker);
    fireEvent(renderedPicker, "onChange", {
      type: "set",
      nativeEvent: {
        timestamp: new Date(1695566029).getTime(),
        utcOffset: 0,
      },
    });

    expect(handleChange).toBeCalled();
    expect(handleChange).toHaveBeenCalledWith({
      type: "set",
      nativeEvent: {
        timestamp: new Date(1695566029).getTime(),
        utcOffset: 0,
      },
    });
  });

  it("should fire the onBackgroundPress after clicking the blurred background", () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { UNSAFE_getByType } = render(picker);
    const background = UNSAFE_getByType(BlurView);

    fireEvent(background, "touchEnd");
    expect(handleBackgroundPress).toBeCalled();
  });
});
