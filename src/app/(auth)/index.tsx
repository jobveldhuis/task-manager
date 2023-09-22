import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { BackgroundView } from "@/ui/views";
import { Text } from "@/ui/text";
import { Button } from "@/ui/button";
import { Title } from "@/ui/title";
import { Link } from "@/ui/link";

export default function Landing(): JSX.Element {
  return (
    <BackgroundView>
      <View style={styles.container}>
        <View>
          <Title style={styles.title}>Hi there,</Title>
          <Text variant="light">
            This app will help you tackle procrastination in a few simple steps.
            Want to get started?
          </Text>
        </View>

        <Button
          title="Create a free account"
          onPress={() => router.push("/(auth)/sign-up")}
        />

        <View>
          <Text>Already have an account?</Text>
          <Link text="Sign in" onPress={() => router.push("/(auth)/login")} />
        </View>
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 32,
    width: "100%",
  },
  title: {
    marginBottom: 8,
  },
});
