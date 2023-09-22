import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { authentication } from "./authentication.constant";

export async function signUp(
  email: string,
  password: string,
  repeatedPassword: string,
) {
  if (password !== repeatedPassword) {
    throw new FirebaseError(
      "custom/password-mismatch",
      "The provided passwords to register should match",
    );
  }

  await createUserWithEmailAndPassword(authentication, email, password);
}
