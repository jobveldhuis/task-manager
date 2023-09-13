import { getItemAsync } from "expo-secure-store";

export async function hasSeenTutorial(userId: string): Promise<boolean> {
  const hasSeenTutorial = await getItemAsync(userId);

  // Since SecureStore stores in key/value pairs of strings, we should check
  // for a literal string true. Any other return means the user has not yet
  // seen the tutorial on this device.
  return hasSeenTutorial === "true";
}
