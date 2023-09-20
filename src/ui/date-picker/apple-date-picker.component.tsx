import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Modal } from "@/ui/modal";
import { GestureResponderEvent } from "react-native";

type AppleDatePickerProps = {
  onBackgroundPress: (event: GestureResponderEvent) => void;
  value: Date;
  onChange: (event: DateTimePickerEvent) => void;
  minimumDate: Date;
};

export function AppleDatePicker({
  onBackgroundPress: handleBackgroundPress,
  value,
  onChange: handleChange,
  minimumDate,
}: AppleDatePickerProps): JSX.Element {
  return (
    <Modal onBackgroundPress={handleBackgroundPress}>
      <DateTimePicker
        mode="date"
        display="inline"
        value={value}
        onChange={handleChange}
        minimumDate={minimumDate}
        themeVariant="light"
      />
    </Modal>
  );
}
