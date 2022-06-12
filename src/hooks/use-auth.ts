import { useContext } from "react";
import AuthProvider from "../context/auth";

const useAuth = () => {
    return useContext(AuthProvider);
}

export default useAuth;