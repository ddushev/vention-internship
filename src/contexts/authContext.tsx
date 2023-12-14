import { createContext, useContext, useMemo, useState } from "react";

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({});

AuthContext.displayName = "AuthContext";

export default function AuthContextProvider({ children }: AuthContextProps) {
  const [authState, setAuthState] = useState();

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
