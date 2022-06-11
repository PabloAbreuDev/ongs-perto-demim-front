import { useEffect } from "react";
import useAuth from "./use-auth";
import axiosPrivate from "../services/api";
import { AxiosRequestConfig } from "axios";
import useRefreshToken from "./use-refresh-token";


const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { acessToken } = useAuth();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config: AxiosRequestConfig) => {

                if (!config.headers) {
                    throw new Error();
                }

                config.headers = {
                    "Authorization": `Bearer ${acessToken}`
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [acessToken, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;