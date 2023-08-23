import { Text } from "@/ui/text";
import { BackgroundView } from "@/ui/background-view";

export function TutorialIntroductionScreen(): JSX.Element {
  return (
    <BackgroundView>
      <Text variant="title" style={{ marginBottom: 16 }}>
        Before we start
      </Text>
      <Text variant="blackParagraph" style={{ marginBottom: 16 }}>
        We would like to tell you a bit about how this journey will look. Don't
        worry, it only takes about 2 minutes.
      </Text>
      <Text variant="blackParagraph">
        To move between screens, swipe from left to right and right to left.
      </Text>
    </BackgroundView>
  );
}
