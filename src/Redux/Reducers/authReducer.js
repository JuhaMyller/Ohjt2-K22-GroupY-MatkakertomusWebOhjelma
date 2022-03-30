import * as actions from '../Actions/authActions';

const initialState = {
  kayttaja: null,
  accessToken: null,
  refreshTokenFetch: true,
  fetching: false,
};

export default function authRecucer(state = initialState, action) {
  switch (action.type) {
    case actions.KIRJAUDU_REFRESS_TOKEN_ONNISTUI:
      return {
        ...state,
        kayttaja: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshTokenFetch: false,
      };
    case actions.KIRJAUDU_REFRESS_TOKEN_EPAONNISTUI:
      return {
        ...state,
        refreshTokenFetch: false,
      };
    case actions.KIRJAUDU_SPOSTI_ALOITUS:
      return { ...state, fetching: true };
    case actions.KIRJAUDU_SPOSTI_EPAONNISTUI:
      return { ...state, fetching: false };
    case actions.KIRJAUDU_SPOSTI_ONNISTUI:
      return {
        ...state,
        fetching: false,
        kayttaja: action.payload.user,
        accessToken: action.payload.accessToken,
      };
  }

  return state;
}
