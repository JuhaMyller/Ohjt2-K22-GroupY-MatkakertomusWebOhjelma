import axios from '../api/Axios';
import { useDispatch } from 'react-redux';
import {
  KIRJAUDU_REFRESS_TOKEN_ONNISTUI,
  KIRJAUDU_REFRESS_TOKEN_EPAONNISTUI,
} from '../Redux/Actions/authActions';

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    try {
      const response = await axios.get('/api/user/refreshAccessToken', {
        withCredentials: true,
      });
      dispatch({
        type: KIRJAUDU_REFRESS_TOKEN_ONNISTUI,
        payload: {
          user: response.data.user,
          accessToken: response.data.accessToken,
        },
      });
      return response.data.accessToken;
    } catch (error) {
      dispatch({
        type: KIRJAUDU_REFRESS_TOKEN_EPAONNISTUI,
      });
      return null;
    }
  };
  return refresh;
};

export default useRefreshToken;
