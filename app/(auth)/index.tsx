import { BackgroundView } from "@/ui/background-view";
import { Text } from "@/ui/text";
import { Button } from "@/ui/button";
import { router } from "expo-router";
import { Title } from "@/ui/title";

export default function Landing(): JSX.Element {
  return (
    <BackgroundView>
      <Title variant="inline" style={{ marginBottom: 24 }}>
        Hi there,
      </Title>
      <Text variant="blackParagraph" style={{ marginBottom: 32 }}>
        This app will help you tackle procrastination in a few simple steps.
        Want to get started?
      </Text>
      <Button
        style={{ marginBottom: 32 }}
        title="Create a free account"
        onPress={() => router.push("/(tutorial)/tutorial")}
      />

      <Text variant="blackParagraph">Already have an account?</Text>
    </BackgroundView>
  );
}
