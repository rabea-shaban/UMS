import { jwtDecode } from "jwt-decode";
import { createContext, ReactNode, useEffect, useState } from "react";
import { AuthContextType, UserData } from "../interface";

interface AuthContextProviderProps {
  children: ReactNode;
}
// interface AuthContextType {
//   userDataAuth: UserData | null;
//   saveUserData: () => void;
// }

export const AuthContext = createContext<AuthContextType | null>(null);
export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [userDataAuth, setUserDataAuth] = useState<null | UserData>(null);

  const saveUserData = () => {
    const encodedToken = localStorage.getItem("userToken");
    if (encodedToken) {
      const decodedToken = jwtDecode<UserData>(encodedToken);
      setUserDataAuth(decodedToken);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);
  return (
    <AuthContext.Provider value={{ userDataAuth, saveUserData }}>
      {children}
    </AuthContext.Provider>
  );
}
