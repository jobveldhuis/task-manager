import { deleteDoc, doc } from "firebase/firestore";
import { database } from "./database";

export async function deleteTodo(userId: string, id: string): Promise<void> {
  const documentReference = doc(database, "users", userId, "todos", id);
  await deleteDoc(documentReference);
}
