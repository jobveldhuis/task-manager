import { Text } from "@/ui/text";
import { BackgroundView } from "@/ui/views";
import { Title } from "@/ui/title";

export function TutorialIntroductionScreen(): JSX.Element {
  return (
    <BackgroundView>
      <Title style={{ marginBottom: 16 }}>Before we start</Title>
      <Text style={{ marginBottom: 16 }}>
        We would like to tell you a bit about how this journey will look. Don't
        worry, it only takes about 2 minutes.
      </Text>
      <Text>
        To move between screens, swipe from left to right and right to left.
      </Text>
    </BackgroundView>
  );
}
