import { useContext } from "react";
import AuthProvider from "../context/auth";

const useLogout = () => {
    const provider = useContext(AuthProvider);
    const logout = () => {
        provider.setAuth({ _id: "", email: "", name: "" }, "")
        localStorage.removeItem("@App:user")
        localStorage.removeItem("@App:token")
        localStorage.removeItem("@App:refresh")
    }
    return [{ logout: logout }];
}

export default useLogout;