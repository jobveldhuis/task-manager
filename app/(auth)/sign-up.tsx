import { BackgroundView, KeyboardDismissalView } from "@/ui/views";
import { Text } from "@/ui/text";
import { Title } from "@/ui/title";
import { Input } from "@/ui/input";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Button } from "@/ui/button";
import { Link } from "@/ui/link";
import { router } from "expo-router";
import { signUp } from "@/backend/authentication";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const handlePress = async () => {
    try {
      await signUp(email, password, repeatedPassword);
      router.replace("/(auth)/login");
    } catch (error) {
      // TODO: add an error handler here, possibly a toast???
      console.error(error);
    }
  };

  return (
    <BackgroundView>
      <KeyboardDismissalView>
        <View style={styles.container}>
          <Title variant="inline">Signing up is easy!</Title>
          <Text>
            Ready to change your life? We need some details so we can safely
            store your to-dos.
          </Text>
          <View style={styles.inputContainer}>
            <Input
              value={email}
              type="email"
              onChange={setEmail}
              label="E-mail"
            />
            <Input
              value={password}
              type="new-password"
              onChange={setPassword}
              label="Password"
            />
            <Input
              value={repeatedPassword}
              type="new-password"
              onChange={setRepeatedPassword}
              label="Confirm Password"
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Sign up" onPress={handlePress} />
            <Link
              text="Or, click here to login"
              onPress={() => {
                router.push("/(auth)/login");
              }}
            />
          </View>
        </View>
      </KeyboardDismissalView>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  inputContainer: { flex: 0, marginVertical: 16, gap: 16 },
  buttonContainer: {
    flex: 0,
    gap: 8,
  },
});
