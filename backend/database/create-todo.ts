import { addDoc, collection } from "@firebase/firestore";
import { database } from "@/backend/database/database";

type NewTodo = {
  title: string;
  description: string;
  expectedCompletionDate: Date;
};

export async function createTodo(userId: string, data: NewTodo): Promise<void> {
  const collectionReference = collection(database, "users", userId, "todos");

  const newTodo = {
    ...data,
    expectedCompletionDate: data.expectedCompletionDate.toISOString(),
    completionDate: null,
    rating: null,
  };

  await addDoc(collectionReference, newTodo);
}
