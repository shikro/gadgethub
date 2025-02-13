import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../types";
import { useCart } from "./CartContext";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { clearCart } = useCart();

  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    setUser({ email, password });
  };

  const logout = () => {
    setUser(null);
    clearCart();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
