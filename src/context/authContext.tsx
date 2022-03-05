import { onAuthStateChanged } from "firebase/auth";
import React, {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { auth } from "../service/auth";

const AuthContext = createContext({
  userId: null as null | string,
});

type AuthProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProps) => {
  const [userId, setUser] = useState<string | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user?.uid || null);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ userId }}>{children}</AuthContext.Provider>
  );
};

type RequireAuthProps = {
  children: ReactElement;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const { userId } = useAuth();
  const location = useLocation();
  if (!userId) {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
  return children;
};

const CannotAccessAfterAuth = ({ children }: RequireAuthProps) => {
  const { userId } = useAuth();

  if (userId) {
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
};

export { AuthContext, AuthProvider, RequireAuth, CannotAccessAfterAuth };
