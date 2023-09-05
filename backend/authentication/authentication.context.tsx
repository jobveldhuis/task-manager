import { createContext, useContext, useState } from "react";
import { onAuthStateChanged, User } from "@firebase/auth";
import { authentication } from "./authentication.constant";

type Context = {
  user: User;
  isAuthenticated: boolean;
};

const AuthenticationContext = createContext<Context | null>(null);

export function AuthenticationProvider() {
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(authentication, (userValue) => {
    setUser(userValue);
  });

  const isAuthenticated = user != null;

  return {
    user,
    isAuthenticated,
  };
}

export function useAuthentication() {
  const context = useContext(AuthenticationContext);

  // Non-strict check, to ensure we catch both null and undefined.
  if (context == null) {
    throw new Error(
      "useAuthentication must be used within an AuthenticationProvider",
    );
  }

  return context;
}
