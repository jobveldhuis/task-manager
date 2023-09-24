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
      value={new Date(1695566021000)}
      onChange={handleChange}
      minimumDate={new Date(1695566020000)}
    />
  );

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should match snapshot", () => {
    expect(render(picker).toJSON()).toMatchSnapshot();
  });

  it("should fire the onChange event after clicking on a date", () => {
    const { UNSAFE_getByType: getByType } = render(picker);
    const renderedPicker = getByType(DateTimePicker);
    fireEvent(renderedPicker, "onChange", {
      type: "set",
      nativeEvent: {
        timestamp: new Date(1695566029000).getTime(),
        utcOffset: 0,
      },
    });

    expect(handleChange).toBeCalled();
    expect(handleChange).toHaveBeenCalledWith({
      type: "set",
      nativeEvent: {
        timestamp: new Date(1695566029000).getTime(),
        utcOffset: 0,
      },
    });
  });

  it("should fire the onBackgroundPress after clicking the blurred background", () => {
    const { UNSAFE_getByType: getByType } = render(picker);
    const background = getByType(BlurView);

    fireEvent(background, "touchEnd");
    expect(handleBackgroundPress).toBeCalled();
  });
});
