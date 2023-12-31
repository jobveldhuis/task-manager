import { addDoc, collection } from "firebase/firestore";
import { database } from "./database";

type NewTodo = {
  title: string;
  description: string;
  expectedCompletionDate: Date;
};

export async function createTodo(userId: string, data: NewTodo): Promise<void> {
  const collectionReference = collection(database, "users", userId, "todos");

  const newTodo = {
    ...data,
    expectedCompletionDate: data.expectedCompletionDate,
    createdAt: new Date(),
    completionDate: null,
    rating: null,
  };

  await addDoc(collectionReference, newTodo);
}
