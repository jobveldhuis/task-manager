import {
  GestureResponderEvent,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import type { Todo } from "@/types/todo.type";
import { Text } from "@/ui/text";
import { Checkbox } from "@/ui/checkbox";
import { FilteredStyleProps } from "@/util/filtered-style-props.type";

type TodoItemProps = {
  data: Todo;
  style?: FilteredStyleProps<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
};

export function TodoItem({
  onPress: handlePress,
  style,
  data,
}: TodoItemProps): JSX.Element {
  const { isCompleted, title } = data;

  return (
    <View style={[styles.container, style]}>
      <Checkbox isChecked={isCompleted} onPress={handlePress} />
      <Text variant={isCompleted ? "strikethrough" : "paragraph"}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 12,
    alignItems: "center",
  },
});
