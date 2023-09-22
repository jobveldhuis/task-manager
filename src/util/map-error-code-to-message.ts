export function mapErrorCodeToMessage(errorCode: string): string {
  switch (errorCode) {
    case "custom/password-mismatch":
      return "The two provided passwords should match.";
    case "custom/todo-title-length":
      return "The title should consist of at least three characters.";
    case "custom/todo-description-length":
      return "The description should consist of at least three characters.";
    case "auth/weak-password":
      return "Your password is too weak. Please choose a password with at least 8 characters.";
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "The e-mail address or password is incorrect. Please try again.";
    case "auth/missing-email":
    case "auth/invalid-email":
      return "Please provide a valid e-mail address.";
    case "auth/missing-password":
      return "Please provide a valid password.";
    default:
      return "Something went wrong. This might be a temporary issue on our end. Please try again later.";
  }
}
