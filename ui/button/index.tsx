import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { COLORS } from "@/util/colors.const";
import { Text } from "../text";

type ButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
};

export function Button({
  title,
  style,
  onPress: handlePress,
}: ButtonProps): JSX.Element {
  return (
    <Pressable
      style={({ pressed: isPressed }) => [
        styles.container,
        { opacity: isPressed ? 0.6 : 1 },
      ]}
      onPress={handlePress}
    >
      <View style={[styles.button, style]}>
        <Text variant="button">{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    backgroundColor: COLORS.button.primary,
    padding: 10,
    borderRadius: 20,
    width: "100%",
    textAlign: "center",
  },
});
