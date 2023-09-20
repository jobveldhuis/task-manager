import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { BackgroundView } from "../../ui/views";
import { TutorialItem } from "./tutorial-item";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";
import { useAuthentication } from "../../backend/authentication";
import { markTutorialAsSeen } from "../../util/mark-tutorial-as-seen";

export function TutorialWhatItIsScreen(): JSX.Element {
  const { user } = useAuthentication();
  const handlePress = async () => {
    if (user === null) return;

    await markTutorialAsSeen(user.uid);
    router.push("/(app)/main");
  };

  return (
    <BackgroundView>
      <TutorialItem title="It's a list" icon="list" style={styles.item}>
        Nothing revolutionary here. We store the tasks you want to accomplish,
        you decide when you do then.
      </TutorialItem>
      <Separator style={styles.separator} />
      <TutorialItem title="3 simple questions" icon="edit" style={styles.item}>
        Every time you want to add something to your to-do list, we need you to
        answer three basic questions.
      </TutorialItem>
      <Separator style={styles.separator} />
      <TutorialItem
        title="Check it off"
        icon="check-double"
        style={styles.item}
      >
        Completed a task? When you check it off your list, we ask for a little
        bit of feedback, using emoji.
      </TutorialItem>
      <Separator style={styles.separator} />
      <Button title="Let's get started" onPress={handlePress} />
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginBottom: 24,
  },
  item: {
    marginBottom: 24,
  },
});
