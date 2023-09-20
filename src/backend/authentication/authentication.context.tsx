import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
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

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: user != null,
    }),
    [user],
  );

  return (
    <AuthenticationContext.Provider value={value}>
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
