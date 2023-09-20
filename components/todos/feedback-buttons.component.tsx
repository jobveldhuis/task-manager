import { Pressable, StyleSheet, View } from "react-native";
import { ratingValues } from "@/types/rating.type";
import { mapRatingToEmoji } from "@/util/map-rating-to-emoji";
import { Text } from "@/ui/text";
import { setRating } from "@/backend/database/set-rating";
import { useAuthentication } from "@/backend/authentication";

type FeedbackButtonsProps = {
  closeModal: () => void;
  todoId: string;
};

export function FeedbackButtons({
  closeModal,
  todoId,
}: FeedbackButtonsProps): JSX.Element {
  const { user } = useAuthentication();

  if (user === null) {
    throw new Error("Cannot leave feedback when user does not exist.");
  }

  return (
    <View style={styles.container}>
      {ratingValues.map((value) => (
        <Pressable
          key={value}
          onPress={async () => {
            await setRating(value, user.uid, todoId);
            closeModal();
          }}
        >
          <Text variant="xl">{mapRatingToEmoji(value)}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 40,
  },
});
