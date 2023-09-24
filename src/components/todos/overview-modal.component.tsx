import { Modal } from "@/ui/modal";
import { Todo } from "@/types";
import { Text } from "@/ui/text";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { Title } from "@/ui/title";
import { Button } from "@/ui/button";
import { mapRatingToEmoji } from "@/util/map-rating-to-emoji";

type OverviewModalProps = {
  todo: Todo;
  onBackgroundPress?: (event: GestureResponderEvent) => void;
  onDeletePress: (event: GestureResponderEvent) => void;
  onChangeStatusPress: (event: GestureResponderEvent) => void;
};

export function OverviewModal({
  todo,
  onBackgroundPress: handleBackgroundPress,
  onDeletePress: handleDeletePress,
  onChangeStatusPress: handleChangeStatusPress,
}: OverviewModalProps): JSX.Element {
  return (
    <Modal onBackgroundPress={handleBackgroundPress}>
      <View style={styles.container}>
        <View>
          <Title>{todo.title}</Title>
        </View>

        <View>
          <Title variant="modal">WHAT IT WILL BRING YOU</Title>
          <Text variant="light">{todo.description}</Text>
        </View>

        {todo.isCompleted && (
          <View>
            <Title variant="modal">YOUR RATING</Title>
            {todo.rating === null ? (
              <Text variant="light">No rating provided.</Text>
            ) : (
              <Text variant="xl">{mapRatingToEmoji(todo.rating)}</Text>
            )}
          </View>
        )}

        <View style={styles.buttonContainer}>
          <Button
            title={
              todo.isCompleted ? "Mark as Unfinished" : "Mark as Completed"
            }
            variant="outline"
            onPress={handleChangeStatusPress}
          />
          <Button
            title="Delete this To-do"
            variant="red"
            onPress={handleDeletePress}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
  },
  buttonContainer: {
    marginTop: 16,
    display: "flex",
    gap: 8,
  },
});
