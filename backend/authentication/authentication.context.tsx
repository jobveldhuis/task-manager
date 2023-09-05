import { createContext, ReactNode, useContext, useState } from "react";
import { onAuthStateChanged, User } from "@firebase/auth";
import { authentication } from "./authentication.constant";

type Context = {
  user: User | null;
  isAuthenticated: boolean;
};

type AuthenticationProviderProps = {
  children: ReactNode;
};

const AuthenticationContext = createContext<Context | null>(null);

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(authentication, (userValue) => {
    setUser(userValue);
  });

  const isAuthenticated = user != null;

  return (
    <AuthenticationContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
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
