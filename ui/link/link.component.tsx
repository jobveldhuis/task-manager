import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import { Text } from "@/ui/text";
import { Icon } from "@/ui/icon";

type LinkProps = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  shouldHideArrow?: boolean;
};

export function Link({
  shouldHideArrow = false,
  text,
  onPress: handlePress,
}: LinkProps): JSX.Element {
  return (
    <Pressable
      style={({ pressed: isPressed }) => [
        styles.container,
        { opacity: isPressed ? 0.6 : 1 },
      ]}
      onPress={handlePress}
    >
      <Text variant="link">{text}</Text>
      {!shouldHideArrow && <Icon name="long-arrow-alt-right" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
