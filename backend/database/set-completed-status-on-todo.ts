import { doc, setDoc } from "@firebase/firestore";
import { database } from "@/backend/database/database";

export function setCompletedStatusOnTodo(
  userId: string,
  todoId: string,
  isCompleted: boolean,
): Promise<void> {
  const todoReference = doc(database, "users", userId, "todos", todoId);
  const completionDate = isCompleted ? new Date().toISOString() : null;

  return setDoc(todoReference, { completionDate }, { merge: true });
}
