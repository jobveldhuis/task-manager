import { BackgroundView } from "@/ui/background-view";
import { Text } from "@/ui/text";
import { Button } from "@/ui/button";
import { router } from "expo-router";

export default function Landing(): JSX.Element {
  return (
    <BackgroundView>
      <Text variant="title" style={{ marginBottom: 24 }}>
        Hi there,
      </Text>
      <Text variant="authParagraph" style={{ marginBottom: 32 }}>
        This app will help you tackle procrastination in a few simple steps.
        Want to get started?
      </Text>
      <Button
        style={{ marginBottom: 32 }}
        title="Create a free account"
        onPress={() => router.push("/(auth)/sign-up")}
      />

      <Text variant="authParagraph">Already have an account?</Text>
    </BackgroundView>
  );
}
