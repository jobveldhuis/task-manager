import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { Text } from "@/ui/text";
import { Checkbox } from "@/ui/checkbox";
import type { Todo } from "@/types/todo.type";

type TodoItemProps = {
  data: Todo;
  onPress: (event: GestureResponderEvent) => void;
};

export function TodoItem({
  onPress: handlePress,
  data,
}: TodoItemProps): JSX.Element {
  const { isCompleted, title } = data;

  return (
    <View style={styles.container}>
      <Checkbox isChecked={isCompleted} onPress={handlePress} />
      <Text>{title}</Text>
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
