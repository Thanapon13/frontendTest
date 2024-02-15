import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticateUser, setAuthenticatedUser] = useState(null);
  // console.log("authenticateUser:", authenticateUser);

  const logout = () => {
    setAuthenticatedUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticateUser,
        setAuthenticatedUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
