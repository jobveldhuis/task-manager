import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import { COLORS } from "@/util/colors.const";
import { Icon } from "../icon";

type CheckboxProps = {
  isChecked: boolean;
  onPress: (event: GestureResponderEvent) => void;
  onLongPress: (event: GestureResponderEvent) => void;
  testID?: string;
};

export function Checkbox({
  isChecked,
  onPress: handlePress,
  onLongPress: handleLongPress,
  testID,
}: CheckboxProps): JSX.Element {
  return (
    <Pressable
      style={[styles.base, isChecked && styles.checked]}
      onPress={handlePress}
      onLongPress={handleLongPress}
      testID={testID}
    >
      {isChecked && <Icon name="check" variant="inverse" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  checked: {
    borderWidth: 0,
    backgroundColor: COLORS.button.primary,
  },
});
