import { axiosPrivate } from '../../api/Axios';
export const KIRJAUDU_REFRESS_TOKEN_ONNISTUI = 'KRTO';
export const KIRJAUDU_REFRESS_TOKEN_EPAONNISTUI = 'KRTEO';
export const KIRJAUDU_SPOSTI_ALOITUS = 'KSA';
export const KIRJAUDU_SPOSTI_ONNISTUI = 'KSO';
export const KIRJAUDU_SPOSTI_EPAONNISTUI = 'KSEO';
export const KIRJAUDU_ULOS_SUCCESS = 'KIRJAUDU_ULOS_SUCCESS';
export const REKISTEROIDY_ALOITUS = 'RA';
export const REKISTEROIDY_LOPETUS = 'RL';

export const KirjauduRefreshToken = () => {
  return async (dispatch) => {
    try {
      const response = await axiosPrivate.post('/api/user/refreshAccessToken');
      dispatch({
        type: KIRJAUDU_REFRESS_TOKEN_ONNISTUI,
        payload: {
          accessToken: response.data.accessToken,
          user: response.data.user,
        },
      });
    } catch (error) {
      dispatch({ type: KIRJAUDU_REFRESS_TOKEN_EPAONNISTUI });
    }
  };
};

export const KirjauduSpostiJaSalasana = (sposti, salasana, toast) => {
  return async (dispatch) => {
    try {
      dispatch({ type: KIRJAUDU_SPOSTI_ALOITUS });
      const response = await axiosPrivate.post('/api/user/login', {
        sposti,
        salasana,
      });
      toast.success('Kirjauduttu sisään', {
        position: 'top-center',
        duration: 3000,
      });
      dispatch({
        type: KIRJAUDU_SPOSTI_EPAONNISTUI,
        payload: {
          user: response.data.user,
          accessToken: response.data.accessToken,
        },
      });
    } catch (error) {
      toast.error('Virheellinen sposti tai salasana', {
        position: 'top-center',
        duration: 3000,
      });
      dispatch({ type: KIRJAUDU_SPOSTI_EPAONNISTUI });
    }
  };
};
