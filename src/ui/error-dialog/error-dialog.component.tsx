import { StyleSheet, View } from "react-native";
import { Text } from "@/ui/text";
import { Icon } from "@/ui/icon";
import { mapErrorCodeToMessage } from "@/util/map-error-code-to-message";
import { COLORS } from "@/util/colors.const";

type ErrorDialogProps = {
  code: string;
};

export function ErrorDialog({ code }: ErrorDialogProps): JSX.Element {
  const message = mapErrorCodeToMessage(code);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="exclamation-triangle" variant="inverse" />
      </View>
      <View style={styles.textContainer}>
        <Text variant="error">{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    gap: 16,
    backgroundColor: COLORS.error,
    padding: 8,
    alignItems: "center",
    borderRadius: 6,
    textOverflow: "hidden",
  },
  iconContainer: {
    alignSelf: "flex-start",
    position: "relative",
    opacity: 0.5,
    top: 2,
  },
  textContainer: {
    maxWidth: "90%",
  },
});
