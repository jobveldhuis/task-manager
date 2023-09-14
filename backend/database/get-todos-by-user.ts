import { Todo } from "@/types/todo.type";
import { database } from "@/backend/database/database";
import {
  collection,
  getDocs,
  query,
  QueryDocumentSnapshot,
} from "@firebase/firestore";

function mapResultToTodo(result: QueryDocumentSnapshot): Todo {
  const { id } = result;

  const { title, description, completionDate, expectedCompletionDate, rating } =
    result.data();

  const mappedExpectedCompletionDate = new Date(
    expectedCompletionDate.seconds * 1000,
  );

  const isCompleted = completionDate != null;

  const baseTodo = {
    id,
    title,
    description,
    expectedCompletionDate: mappedExpectedCompletionDate,
  };

  if (!isCompleted) {
    return {
      ...baseTodo,
      isCompleted,
    };
  }

  const mappedCompletionDate = new Date(completionDate.seconds * 1000);

  return {
    id,
    title,
    description,
    rating,
    expectedCompletionDate: mappedExpectedCompletionDate,
    completionDate: mappedCompletionDate,
    isCompleted,
  };
}

export async function getTodosByUser(userId: string): Promise<Todo[]> {
  const reference = collection(database, "users", userId, "todos");
  const q = query(reference);
  const snapshot = await getDocs(q);
  return snapshot.docs.map(mapResultToTodo);
}
