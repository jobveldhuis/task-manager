import { signOut as firebaseSignOut } from "@firebase/auth";
import { authentication } from "./authentication.constant";
import { router } from "expo-router";

export async function signOut(): Promise<void> {
  await firebaseSignOut(authentication);
  router.push("/(auth)");
}
