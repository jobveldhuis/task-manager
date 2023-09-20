import { Rating } from "@/types/rating.type";
import { doc, setDoc } from "@firebase/firestore";
import { database } from "@/backend/database/database";

export function setRating(rating: Rating, userId: string, todoId: string) {
  const todoReference = doc(database, "users", userId, "todos", todoId);
  return setDoc(todoReference, { rating }, { merge: true });
}
