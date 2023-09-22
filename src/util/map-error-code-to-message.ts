export function mapErrorCodeToMessage(errorCode: string): string {
  switch (errorCode) {
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "The e-mail address or password is incorrect. Please try again.";
    case "auth/invalid-email":
      return "Please provide a valid e-mail address.";
    case "auth/missing-password":
      return "Please provide a valid password.";
    default:
      return "Something went wrong. This might be a temporary issue on our end. Please try again later.";
  }
}
