import { signOut as firebaseSignOut } from "firebase/auth";
import { router } from "expo-router";
import { authentication } from "./authentication.constant";

export async function signOut(): Promise<void> {
  await firebaseSignOut(authentication);
  router.push("/(auth)");
}
