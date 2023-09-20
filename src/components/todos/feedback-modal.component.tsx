import { Title } from "@/ui/title";
import { Text } from "@/ui/text";
import { Modal } from "@/ui/modal";
import { Todo } from "@/types/todo.type";
import { calculateTimeDifference } from "@/util/calculate-time-difference";
import { StyleSheet, View } from "react-native";
import { Rating } from "@/types/rating.type";
import { FeedbackButtons } from "./feedback-buttons.component";

type FeedbackModalProps = {
  todo: Todo;
  onFeedbackClick: (rating: Rating) => void;
};

export function FeedbackModal({
  todo,
  onFeedbackClick: handleFeedbackClick,
}: FeedbackModalProps): JSX.Element | null {
  const now = new Date();
  const timeDelta = calculateTimeDifference(todo.createdAt, now);

  const days = `${String(timeDelta.days).padStart(2, "0")}d`;
  const hours = `${String(timeDelta.hours).padStart(2, "0")}h`;
  const minutes = `${String(timeDelta.minutes).padStart(2, "0")}m`;

  const calculatedTime = `${days} ${hours} ${minutes}`;

  return (
    <Modal>
      <View style={styles.timeContainer}>
        <Title variant="modal" style={styles.title}>
          TIME TO COMPLETION
        </Title>
        <Text variant="xl">{calculatedTime}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Title variant="modal" style={styles.descriptionTitle}>
          WHAT IT BROUGHT YOU
        </Title>
        <Text variant="light">{todo.description}</Text>
      </View>
      <View>
        <Title variant="modal" style={styles.title}>
          HOW DOES THAT MAKE YOU FEEL?
        </Title>
        <FeedbackButtons onButtonPress={handleFeedbackClick} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  timeContainer: {
    marginBottom: 24,
  },
  descriptionContainer: {
    marginBottom: 32,
  },
  descriptionTitle: {
    marginBottom: 4,
  },
  title: {
    marginBottom: 12,
  },
});
