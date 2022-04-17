import { axiosPrivate } from '../api/Axios';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import { useSelector } from 'react-redux';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          if (newAccessToken === null) return Promise.reject(error);
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [refresh, accessToken]);

  return axiosPrivate;
};

export default useAxiosPrivate;
