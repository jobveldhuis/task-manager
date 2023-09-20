import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "@/ui/text";
import { COLORS } from "@/util/colors.const";

type DateInputProps = {
  value: Date;
  label?: string;
  onPress: (event: GestureResponderEvent) => void;
};

export function DateInput({
  value,
  label,
  onPress: handlePress,
}: DateInputProps): JSX.Element {
  const hasLabel = label !== undefined;

  return (
    <Pressable onPress={handlePress}>
      {hasLabel && <Text>{label}</Text>}
      <View style={styles.input}>
        <Text variant="light">
          {value.toLocaleDateString("en-UK", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderRadius: 4,
  },
});
