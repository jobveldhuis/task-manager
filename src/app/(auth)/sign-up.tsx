import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { FirebaseError } from "firebase/app";
import { ErrorDialog } from "@/ui/error-dialog/error-dialog.component";
import { BackgroundView, KeyboardDismissalView } from "@/ui/views";
import { Text } from "@/ui/text";
import { Title } from "@/ui/title";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Link } from "@/ui/link";
import { signUp } from "@/backend/authentication";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [errorCode, setErrorCode] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    setIsLoading(true);
    setErrorCode(null);

    try {
      await signUp(email, password, repeatedPassword);
      router.replace("/(auth)/login");
      setEmail("");
      setPassword("");
      setRepeatedPassword("");
    } catch (error) {
      // If something other than Firebase throws an error, it must be critical.
      if (!(error instanceof FirebaseError)) {
        throw error;
      }

      setErrorCode(error.code);
      setPassword("");
      setRepeatedPassword("");
    }

    setIsLoading(false);
  };

  const hasError = errorCode !== null;

  return (
    <BackgroundView>
      <KeyboardDismissalView>
        <View style={styles.container}>
          <Title variant="inline" style={styles.title}>
            Signing up is easy!
          </Title>
          <Text style={styles.text} variant="light">
            Ready to change your life? We need some details so we can safely
            store your to-dos.
          </Text>
          {hasError && <ErrorDialog code={errorCode} />}
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
            <Button
              title="Sign up"
              onPress={handlePress}
              isLoading={isLoading}
            />
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
  text: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
  },
});
