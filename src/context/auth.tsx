import { createContext, useState } from "react";
import { IUser } from "../interfaces/user";

export type AuthState = {
  user: IUser,
  acessToken: string
  setAuth: (user: IUser, accessToken: string) => void
}

const contextDefaultValues: AuthState = {
  user: { email: "", name: "", _id: localStorage.getItem("@App:user") || "" },
  acessToken: localStorage.getItem("@App:token") || "",
  setAuth: () => { }
};

const AuthContext = createContext<AuthState>(contextDefaultValues);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

  const [user, setUser] = useState<IUser>(contextDefaultValues.user)
  const [acessToken, setAcessToken] = useState<string>(contextDefaultValues.acessToken)

  const setAuth = (user: IUser, accessToken: string) => {
    setUser(user)
    setAcessToken(accessToken)
  }

  return (
    <AuthContext.Provider value={{ user, acessToken, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;