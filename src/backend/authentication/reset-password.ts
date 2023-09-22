import { sendPasswordResetEmail } from "firebase/auth";
import { authentication } from "@/backend/authentication/authentication.constant";

export function resetPassword(email: string): Promise<void> {
  return sendPasswordResetEmail(authentication, email);
}
