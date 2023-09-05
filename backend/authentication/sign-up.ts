import { createUserWithEmailAndPassword } from "@firebase/auth";
import { authentication } from "./authentication.constant";

export async function signUp(
  email: string,
  password: string,
  repeatedPassword: string,
) {
  if (password !== repeatedPassword) {
    throw new Error("Passwords should match.");
  }

  await createUserWithEmailAndPassword(authentication, email, password);
}
