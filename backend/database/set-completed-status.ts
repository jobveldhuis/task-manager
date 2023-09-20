import { doc, setDoc } from "@firebase/firestore";
import { database } from "@/backend/database/database";

export function setCompletedStatus(
  userId: string,
  todoId: string,
  isCompleted: boolean,
): Promise<void> {
  const todoReference = doc(database, "users", userId, "todos", todoId);
  const completionDate = isCompleted ? new Date() : null;

  // Reset the rating if completion date is being removed:
  const data =
    completionDate === null
      ? {
          completionDate,
          rating: null,
        }
      : {
          completionDate,
        };

  return setDoc(todoReference, data, { merge: true });
}
