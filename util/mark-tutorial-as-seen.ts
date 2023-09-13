import { getItemAsync, setItemAsync } from "expo-secure-store";

export async function markTutorialAsSeen(userId: string): Promise<void> {
  const storedData = await getItemAsync(userId);
  const currentData = JSON.parse(storedData ?? "{}");
  const data = JSON.stringify({
    ...currentData,
    hasSeenTutorial: true,
  });

  return setItemAsync(userId, data);
}
