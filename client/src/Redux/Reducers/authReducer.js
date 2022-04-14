import * as actions from '../Actions/authActions';
import { LISAA_TARINA_KAYTTAJALLE } from '../Actions/tarinatActions';

const initialState = {
  kayttaja: null,
  accessToken: null,
  refreshTokenFetch: true,
  fetching: false,
};

export default function authRecucer(state = initialState, action) {
  console.log(action.type);
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
        kayttaja: null,
        accessToken: null,
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
    case actions.KIRJAUDU_ULOS_SUCCESS:
      return { ...state, kayttaja: null, accessToken: null };
    case actions.REKISTEROIDY_ALOITUS:
      return { ...state, fetch: true };
    case actions.REKISTEROIDY_LOPETUS:
      return { ...state, fetch: false };
    case actions.MUOKKAA_KUVAA_ONNISTUI:
      return {
        ...state,
        kayttaja: { ...state.kayttaja, kuva: action.payload },
      };
    case actions.POISTA_KUVA_ONNISTUNEESTI:
      return {
        ...state,
        kayttaja: { ...state.kayttaja, kuva: undefined },
      };
    case actions.MUOKKAA_TIETOJA_ONNISTUNEESTI:
      return {
        ...state,
        kayttaja: { ...state.kayttaja, ...action.payload },
      };
    case LISAA_TARINA_KAYTTAJALLE:
      const tarinoita = state.kayttaja.tarinoita + 1;
      return { ...state, kayttaja: { ...state.kayttaja, tarinoita } };
  }

  return state;
}
