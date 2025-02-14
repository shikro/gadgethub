import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../types";
import { useCart } from "./CartContext";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { clearCart } = useCart();

  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const resp = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: email,
        password: password,
      }),
    });
    if (!resp.ok) {
      return false;
    }
    setUser({ email, password });
    return true;
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
