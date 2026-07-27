import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(function () {
    const savedUser = localStorage.getItem("blogUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  function login(username) {
    const loggedInUser = { username: username.trim() };
    setUser(loggedInUser);
    localStorage.setItem("blogUser", JSON.stringify(loggedInUser));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("blogUser");
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
