import { getItemAsync } from "expo-secure-store";

export async function hasSeenTutorial(userId: string): Promise<boolean> {
  const userData = await getItemAsync(userId);

  if (userData === null) {
    return false;
  }

  const data = JSON.parse(userData);
  return data.hasSeenTutorial === true;
}
