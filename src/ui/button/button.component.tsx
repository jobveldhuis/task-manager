import {
  ActivityIndicator,
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
  isLoading?: boolean;
  variant?: (typeof variants)[number];
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
};

const variants = ["default", "red", "outline"] as const;

export function Button({
  title,
  isLoading = false,
  style,
  variant = "default",
  onPress: handlePress,
}: ButtonProps): JSX.Element {
  return (
    <Pressable
      style={({ pressed: isPressed }) => [
        styles.container,
        { opacity: isPressed || isLoading ? 0.6 : 1 },
      ]}
      onPress={(event) => {
        if (isLoading) {
          return;
        }

        handlePress(event);
      }}
    >
      <View style={[styles.button, styles[variant], style]}>
        {isLoading ? (
          <ActivityIndicator size="small" color={COLORS.inverse} />
        ) : (
          <Text variant={variant === "outline" ? "buttonOutline" : "button"}>
            {title}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    padding: 10,
    borderRadius: 20,
    width: "100%",
    textAlign: "center",
  },
  default: {
    color: COLORS.inverse,
    backgroundColor: COLORS.button.primary,
  },
  outline: {
    color: COLORS.primary,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  red: {
    color: COLORS.inverse,
    backgroundColor: COLORS.button.red,
  },
});
