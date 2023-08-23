import { IconName } from "@/ui/icon";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Title } from "@/ui/title";
import { Text } from "@/ui/text";
import { FilteredStyleProps } from "@/util/filtered-style-props.type";

type TutorialItemProps = {
  title: string;
  icon: IconName;
  children: string;
  style?: FilteredStyleProps<ViewStyle>;
};

export function TutorialItem({
  title,
  icon,
  children,
  style,
}: TutorialItemProps): JSX.Element {
  return (
    <View style={style}>
      <Title icon={icon} style={styles.title}>
        {title}
      </Title>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
  },
});
