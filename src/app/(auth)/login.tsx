import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { BackgroundView, KeyboardDismissalView } from "../../ui/views";
import { Text } from "../../ui/text";
import { Title } from "../../ui/title";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Link } from "../../ui/link";
import { logIn } from "../../backend/authentication";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = async () => {
    await logIn(email, password);
  };

  return (
    <BackgroundView>
      <KeyboardDismissalView>
        <View style={styles.container}>
          <Title variant="inline">Welcome back,</Title>
          <Text>
            Time to get back on track? All your saved to-dos will be waiting on
            the other side.
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
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Log in" onPress={handlePress} />
            <Link
              text="Click here to create an account"
              onPress={() => {
                router.push("/(auth)/sign-up");
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
