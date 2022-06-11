
import api from '../services/api';
import useAuth from './use-auth';

const useRefreshToken = () => {
    const { user, setAuth } = useAuth();

    const refresh = async () => {
        const response = await api.put('/users/refresh',
            {
                refreshToken: localStorage.getItem("@App:refresh"),
                user_id: user._id
            }
        );
        setAuth(user, response.data.token);
        return response.data.token;
    }
    return refresh;
};

export default useRefreshToken;