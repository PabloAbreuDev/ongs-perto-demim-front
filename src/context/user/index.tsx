import { createContext, useState } from "react";

export type UserContextState = {
  token: string;
  refreshToken: string;
  email: string;
};

const contextDefaultValues: UserContextState = {
  token: "",
  refreshToken: "",
  email: "",
};

export const UserContext =
  createContext<UserContextState>(contextDefaultValues);

const UserContextProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<string>(contextDefaultValues.token);
  const [refreshToken, setRefreshToken] = useState<string>(
    contextDefaultValues.token
  );
  const [email, setEmail] = useState<string>(contextDefaultValues.token);

  return (
    <UserContext.Provider value={{ token, refreshToken, email }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
