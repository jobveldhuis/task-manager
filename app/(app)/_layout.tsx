import { router, Slot } from "expo-router";
import { useAuthentication } from "@/backend/authentication";
import { useEffect } from "react";

export default function AppLayout() {
  const { isAuthenticated } = useAuthentication();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/(auth)");
    }
  }, [isAuthenticated]);

  return <Slot />;
}
