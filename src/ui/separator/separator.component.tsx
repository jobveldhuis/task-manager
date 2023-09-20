import { View, ViewStyle } from "react-native";
import { FilteredStyleProps } from "../../util/filtered-style-props.type";

type SeparatorProps = {
  style?: FilteredStyleProps<ViewStyle>;
};

export function Separator({ style }: SeparatorProps) {
  return (
    <View
      style={[
        {
          alignSelf: "stretch",
          borderBottomColor: "#000",
          borderBottomWidth: 1,
        },
        style,
      ]}
    />
  );
}
