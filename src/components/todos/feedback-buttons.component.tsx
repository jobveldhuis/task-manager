import { Pressable, StyleSheet, View } from "react-native";
import { Rating, ratingValues } from "../../types/rating.type";
import { mapRatingToEmoji } from "../../util/map-rating-to-emoji";
import { Text } from "../../ui/text";
import { useAuthentication } from "../../backend/authentication";

type FeedbackButtonsProps = {
  onButtonPress: (rating: Rating) => void;
};

export function FeedbackButtons({
  onButtonPress: handlePress,
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
          onPress={() => {
            handlePress(value);
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
