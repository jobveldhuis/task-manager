import { router, Slot } from "expo-router";
import { useEffect } from "react";
import { useAuthentication } from "../../backend/authentication";

export default function AppLayout() {
  const { isAuthenticated } = useAuthentication();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/(auth)");
    }
  }, [isAuthenticated]);

  return <Slot />;
}
