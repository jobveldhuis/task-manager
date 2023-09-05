import { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { COLORS } from "@/util/colors.const";

type BackgroundViewProps = {
  children: ReactNode;
};

export function BackgroundView({ children }: BackgroundViewProps): JSX.Element {
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        COLORS.backgroundGradient.primary,
        COLORS.backgroundGradient.secondary,
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
    paddingHorizontal: 32,
    paddingVertical: 120,
  },
});
