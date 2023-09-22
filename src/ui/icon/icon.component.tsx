import ExpoIcon from "@expo/vector-icons/FontAwesome5";
import { StyleSheet } from "react-native";
import { COLORS } from "@/util/colors.const";

export type IconName =
  | "calendar-alt"
  | "magic"
  | "check"
  | "user-check"
  | "check-double"
  | "flag-checkered"
  | "list"
  | "edit"
  | "long-arrow-alt-right"
  | "exclamation-triangle";

type IconProps = {
  name: IconName;
  variant?: (typeof variants)[number];
};

const variants = ["primary", "inverse"] as const;

export function Icon({ name, variant = "primary" }: IconProps): JSX.Element {
  return <ExpoIcon name={name} style={[styles.base, styles[variant]]} />;
}

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
  },
  primary: {
    color: COLORS.primary,
  },
  inverse: {
    color: COLORS.inverse,
  },
});
