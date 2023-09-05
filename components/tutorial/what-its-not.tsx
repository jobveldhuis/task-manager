import { BackgroundView } from "@/ui/views";
import { TutorialItem } from "@/components/tutorial/tutorial-item";
import { Separator } from "@/ui/separator";
import { StyleSheet } from "react-native";

export function TutorialWhatItsNotScreen(): JSX.Element {
  return (
    <BackgroundView>
      <TutorialItem
        title="It's not a calendar"
        icon="calendar-alt"
        style={styles.item}
      >
        We do not send notifications when a due date is up. Planning to take up
        some to-dos is your responsibility.
      </TutorialItem>
      <Separator style={styles.separator} />
      <TutorialItem
        title="It's not guaranteed"
        icon="user-check"
        style={styles.item}
      >
        We cannot guarantee that you will wake up tomorrow and pick up all your
        to-dos, but the least we can do, is to try.
      </TutorialItem>
      <Separator style={styles.separator} />
      <TutorialItem title="It's not easy" icon="magic" style={styles.item}>
        Changing habits is hard and becomes increasingly harder, but you got
        this! We believe in you!
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
