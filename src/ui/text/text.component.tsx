import { Text as NativeText, StyleSheet, TextStyle } from "react-native";
import { COLORS } from "@/util/colors.const";

type TextProps = {
  children: string;
  variant?: (typeof variants)[number];
  style?: AllowedTextStyle;
};

export const variants = [
  "paragraph",
  "strikethrough",
  "button",
  "buttonOutline",
  "link",
  "menu",
  "menuSelected",
  "xl",
  "light",
  "error",
] as const;

type AllowedTextStyle = Pick<TextStyle, "marginBottom">;

export function Text({
  children,
  style,
  variant = "paragraph",
}: TextProps): JSX.Element {
  return (
    <NativeText style={[styles.default, styles[variant], style]}>
      {children}
    </NativeText>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.primary,
  },
  paragraph: {
    lineHeight: 22,
  },
  button: {
    color: COLORS.inverse,
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  menu: {
    color: COLORS.inverse,
    fontSize: 16,
    fontWeight: "500",
  },
  menuSelected: {
    color: COLORS.inverse,
    fontSize: 20,
    fontWeight: "500",
  },
  xl: {
    fontSize: 42,
    fontWeight: "normal",
  },
  light: {
    fontWeight: "normal",
  },
  strikethrough: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  error: {
    color: COLORS.inverse,
    opacity: 0.75,
  },
  buttonOutline: {
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: "bold",
  },
});
