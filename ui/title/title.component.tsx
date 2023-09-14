import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Text } from "react-native";
import { FilteredStyleProps } from "@/util/filtered-style-props.type";
import { ReactNode } from "react";
import { IconName, Icon } from "@/ui/icon";
import { COLORS } from "@/util/colors.const";

type TitleProps = {
  children: ReactNode;
  icon?: IconName;
  variant?: (typeof variants)[number];
  style?: FilteredStyleProps<TextStyle> | FilteredStyleProps<ViewStyle>;
  hasBorder?: boolean;
};

export const variants = ["default", "inline"] as const;

export function Title({
  style,
  children,
  icon,
  variant = "default",
  hasBorder = false,
}: TitleProps): JSX.Element {
  const hasIcon = icon !== undefined;

  // A border can only occur on the default title component
  const containerStyles =
    hasBorder && variant === "default"
      ? [styles.container, styles.border, style]
      : [styles.container, style];

  return (
    <View style={containerStyles} testID="title-container">
      {hasIcon && <Icon name={icon} />}
      <Text style={styles[variant]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  default: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  border: {
    width: "100%",
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
  },
  inline: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 24,
    color: COLORS.secondary,
  },
});
