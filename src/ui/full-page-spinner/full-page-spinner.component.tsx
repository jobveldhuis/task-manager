import { ActivityIndicator, StyleSheet, View } from "react-native";
import { COLORS } from "../../util/colors.const";

export function FullPageSpinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    minWidth: "100%",
    minHeight: "100%",
    paddingTop: 16,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
