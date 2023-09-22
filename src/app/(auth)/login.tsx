import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { FirebaseError } from "firebase/app";
import { BackgroundView, KeyboardDismissalView } from "@/ui/views";
import { Text } from "@/ui/text";
import { Title } from "@/ui/title";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Link } from "@/ui/link";
import { logIn } from "@/backend/authentication";
import { ErrorDialog } from "@/ui/error-dialog/error-dialog.component";
import { resetPassword } from "@/backend/authentication/reset-password";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    setIsLoading(true);
    setErrorCode(null);

    try {
      await logIn(email, password);
    } catch (error) {
      // If something other than Firebase throws an error, it must be critical.
      if (!(error instanceof FirebaseError)) {
        throw error;
      }

      setErrorCode(error.code);
      setPassword("");
    }

    setIsLoading(false);
  };

  const handleNavigateToSignUp = () => {
    setErrorCode(null);
    setEmail("");
    setPassword("");
    router.push("/(auth)/sign-up");
  };

  const handleResetPassword = async () => {
    setErrorCode(null);
    setPassword("");

    try {
      await resetPassword(email);
    } catch (error) {
      // If something other than Firebase throws an error, it must be critical.
      if (!(error instanceof FirebaseError)) {
        throw error;
      }

      if (error.code !== "auth/user-not-found") {
        setErrorCode(error.code);
        return;
      }
    } finally {
      Alert.alert(
        "You might have gotten mail!",
        "If you provided a valid email address registered to a user, we have just sent you an email to reset your password. Please follow the link and instructions in the email.",
      );
    }
  };

  const hasError = errorCode !== null;

  return (
    <BackgroundView>
      <KeyboardDismissalView>
        <View style={styles.container}>
          <Title style={styles.title}>Welcome back,</Title>
          <Text style={styles.text} variant="light">
            Time to get back on track? All your saved to-dos will be waiting on
            the other side.
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
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Log in"
              onPress={handlePress}
              isLoading={isLoading}
            />
            <Link
              shouldHideArrow
              text="Forgot your password?"
              onPress={handleResetPassword}
            />
            <Link
              text="Click here to create an account"
              onPress={handleNavigateToSignUp}
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
