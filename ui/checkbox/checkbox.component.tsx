import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import { Icon } from "@/ui/icon";
import { COLORS } from "@/util/colors.const";

type CheckboxProps = {
  isChecked: boolean;
  onPress: (event: GestureResponderEvent) => void;
};

export function Checkbox({
  isChecked,
  onPress: handlePress,
}: CheckboxProps): JSX.Element {
  return (
    <Pressable
      style={[styles.base, isChecked && styles.checked]}
      onPress={handlePress}
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
