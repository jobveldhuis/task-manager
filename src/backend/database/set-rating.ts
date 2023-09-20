import { doc, setDoc } from "firebase/firestore";
import { Rating } from "../../types/rating.type";
import { database } from "./database";

export function setRating(rating: Rating, userId: string, todoId: string) {
  const todoReference = doc(database, "users", userId, "todos", todoId);
  return setDoc(todoReference, { rating }, { merge: true });
}
