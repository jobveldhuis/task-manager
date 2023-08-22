import { Text as NativeText, StyleSheet, TextStyle } from "react-native";
import { ReactNode } from "react";
import { COLORS } from "@/util/colors.const";

type TextProps = {
  children: ReactNode;
  variant?: (typeof variants)[number];
  style?: AllowedTextStyle;
};

export const variants = [
  "title",
  "paragraph",
  "authParagraph",
  "button",
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
  },
  title: {
    fontWeight: "bold",
  },
  paragraph: {
    lineHeight: 22,
    color: COLORS.primary,
  },
  authParagraph: {
    lineHeight: 22,
    color: COLORS.secondary,
  },
  button: {
    color: COLORS.button.inverse,
    textAlign: "center",
    fontWeight: "bold",
  },
});
