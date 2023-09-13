import { ReactNode } from "react";
import { COLORS } from "@/util/colors.const";
import { LinearGradient as ExpoGradient } from "expo-linear-gradient";
import { StyleProp, ViewStyle } from "react-native";

type LinearGradientProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

export function LinearGradient({
  children,
  style,
  testID,
}: LinearGradientProps): JSX.Element {
  return (
    <ExpoGradient
      style={style}
      colors={[
        COLORS.backgroundGradient.primary,
        COLORS.backgroundGradient.secondary,
      ]}
      testID={testID}
    >
      {children}
    </ExpoGradient>
  );
}
