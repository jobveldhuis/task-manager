import { BackgroundView } from "@/ui/views";
import { TutorialItem } from "@/components/tutorial/tutorial-item";
import { Separator } from "@/ui/separator";
import { StyleSheet } from "react-native";

export function TutorialWhatItIsScreen(): JSX.Element {
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
      <TutorialItem
        title="That's literally it"
        icon="flag-checkered"
        style={styles.item}
      >
        Sounds boring, right? Well, getting sh*t done can be a bit boring, but
        also very, very rewarding.
      </TutorialItem>
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
