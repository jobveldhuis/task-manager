import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Text } from "react-native";
import { FilteredStyleProps } from "@/util/filtered-style-props.type";
import { ReactNode } from "react";
import { IconName, Icon } from "@/ui/icon";

type TitleProps = {
  children: ReactNode;
  icon?: IconName;
  variant?: (typeof variants)[number];
  style?: FilteredStyleProps<TextStyle> | FilteredStyleProps<ViewStyle>;
};

export const variants = ["default", "inline"] as const;

export function Title({
  variant = "default",
  style,
  children,
  icon,
}: TitleProps): JSX.Element {
  const hasIcon = icon !== undefined;

  return hasIcon ? (
    <View style={[styles.container, style]} testID="title-container">
      <Icon name={icon} />
      <Text style={styles[variant]}>{children}</Text>
    </View>
  ) : (
    <Text style={[styles[variant], style]}>{children}</Text>
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
  },
  inline: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
