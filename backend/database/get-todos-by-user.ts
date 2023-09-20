import { Todo } from "@/types/todo.type";
import { database } from "@/backend/database/database";
import {
  collection,
  getDocs,
  or,
  query,
  QueryDocumentSnapshot,
  where,
} from "@firebase/firestore";
import { getStartOfDay } from "@/util/get-start-of-day";

function mapResultToTodo(result: QueryDocumentSnapshot): Todo {
  const { id } = result;

  const {
    title,
    description,
    completionDate,
    expectedCompletionDate,
    rating,
    createdAt,
  } = result.data();

  const mappedExpectedCompletionDate = new Date(
    expectedCompletionDate.seconds * 1000,
  );

  const mappedCreatedAt = new Date(createdAt.seconds * 1000);

  const isCompleted = completionDate != null;

  const baseTodo = {
    id,
    title,
    description,
    createdAt: mappedCreatedAt,
    expectedCompletionDate: mappedExpectedCompletionDate,
  };

  if (!isCompleted) {
    return {
      ...baseTodo,
      rating: null,
      completionDate: null,
      isCompleted,
    };
  }

  const mappedCompletionDate = new Date(completionDate.seconds * 1000);

  return {
    ...baseTodo,
    rating,
    completionDate: mappedCompletionDate,
    isCompleted,
  };
}

export async function getTodosByUser(userId: string): Promise<Todo[]> {
  const reference = collection(database, "users", userId, "todos");
  const startOfDay = getStartOfDay(new Date());

  const q = query(
    reference,
    or(
      where("completionDate", "==", null),
      where("completionDate", ">=", startOfDay),
    ),
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(mapResultToTodo);
}
