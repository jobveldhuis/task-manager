import { setItemAsync } from "expo-secure-store";

export function markTutorialAsSeen(userId: string): Promise<void> {
  return setItemAsync(userId, "true");
}
