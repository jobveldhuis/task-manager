import { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

type BackgroundViewProps = {
  children: ReactNode;
};

export function BackgroundView({ children }: BackgroundViewProps): JSX.Element {
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        Colors.backgroundGradient.primary,
        Colors.backgroundGradient.secondary,
      ]}
      testID="background"
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 25,
    paddingVertical: 150,
  },
});
