import { signInWithEmailAndPassword } from "@firebase/auth";
import { authentication } from "./authentication.constant";

// We don't need to return anything - since the event listener in the context will pick up the value
export async function logIn(email: string, password: string): Promise<void> {
  await signInWithEmailAndPassword(authentication, email, password);
}
