import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { useAuthentication } from "../../backend/authentication";

export default function AuthLayout() {
  const { isAuthenticated, user } = useAuthentication();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/(app)/main");
    }
  }, [isAuthenticated, user]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="sign-up" />
    </Stack>
  );
}
