import { router, Stack } from "expo-router";
import { useAuthentication } from "@/backend/authentication";
import { useEffect } from "react";

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
