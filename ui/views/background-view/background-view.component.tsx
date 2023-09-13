import { ReactNode } from "react";
import { LinearGradient } from "@/ui/linear-gradient";
import { StyleSheet } from "react-native";

type BackgroundViewProps = {
  children: ReactNode;
};

export function BackgroundView({ children }: BackgroundViewProps): JSX.Element {
  return (
    <LinearGradient style={styles.container} testID="background">
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
