import { BackgroundView } from "@/ui/background-view";
import { Text } from "@/ui/text";
import { Button } from "@/ui/button";
import { router } from "expo-router";
import { Title } from "@/ui/title";
import { Link } from "@/ui/link";

export default function Landing(): JSX.Element {
  return (
    <BackgroundView>
      <Title variant="inline">Hi there,</Title>
      <Text style={{ marginBottom: 32 }}>
        This app will help you tackle procrastination in a few simple steps.
        Want to get started?
      </Text>
      <Button
        style={{ marginBottom: 32 }}
        title="Create a free account"
        onPress={() => router.push("/(auth)/sign-up")}
      />

      <Text>Already have an account?</Text>
      <Link text="Sign in" onPress={() => router.push("/(auth)/login")} />
    </BackgroundView>
  );
}
