import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Title } from "@/ui/title";
import { BackgroundView } from "@/ui/views";
import { COLORS } from "@/util/colors.const";
import { ReactNode } from "react";

type PageProps = {
  title?: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Page({ title, children, style }: PageProps) {
  return (
    <BackgroundView>
      {title !== undefined && (
        <Title hasBorder style={styles.title}>
          {title}
        </Title>
      )}
      <View style={[styles.container, style]}>{children}</View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
  },
  title: {
    paddingBottom: 8,
    marginBottom: 16,
  },
  container: {
    width: "100%",
  },
});
