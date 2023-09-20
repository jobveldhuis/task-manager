import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { COLORS } from "../../util/colors.const";
import { Text } from "../text";

type ButtonProps = {
  title: string;
  isLoading?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
};

export function Button({
  title,
  isLoading = false,
  style,
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
      <View style={[styles.button, style]}>
        {isLoading ? (
          <ActivityIndicator size="small" color={COLORS.inverse} />
        ) : (
          <Text variant="button">{title}</Text>
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
    backgroundColor: COLORS.button.primary,
    padding: 10,
    borderRadius: 20,
    width: "100%",
    textAlign: "center",
  },
});
