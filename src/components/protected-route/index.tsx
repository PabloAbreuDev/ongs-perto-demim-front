import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth()
    if (user._id === "") {
        return <Navigate to="/login" replace={true} />
    }
    return children
}


export default ProtectedRoute
