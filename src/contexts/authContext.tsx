import { createContext, useContext, useMemo, useState } from "react";

import { AuthState } from "@/types";

interface AuthContextProps {
  children: React.ReactNode;
}

interface AuthContextValue {
  authState: AuthState | undefined;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState | undefined>>;
}

export const AuthContext = createContext<AuthContextValue>({
  authState: undefined,
  setAuthState: () => {},
});

AuthContext.displayName = "AuthContext";

export default function AuthContextProvider({ children }: AuthContextProps) {
  const [authState, setAuthState] = useState<AuthState>();

  const context = useMemo(
    () => ({
      authState,
      setAuthState,
    }),
    [authState, setAuthState],
  );
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
