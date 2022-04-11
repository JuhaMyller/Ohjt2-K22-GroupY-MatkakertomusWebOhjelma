import {
  ADD_MATKAKOHDE,
  DELETE_MATKAKOHDE_SUCCESS,
  DELETE_MATKAKOHDE_ERROR,
  REQUEST_BEGIN,
  POST_MATKAKOHDE_SUCCESS,
  POST_MATKAKOHDE_ERROR,
  GET_MATKAKOHTEET_SUCCESS,
} from '../Actions/matkakohdeActions';
const initialState = {
  Matkakohteet: [],
  fetchingRequest: false,
};

export default function matkakohdeReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BEGIN:
      return { ...state, fetchingRequest: true };
    case ADD_MATKAKOHDE:
      return {
        ...state.Matkakohteet,
        matkakohteet: state.Matkakohteet.concat(action.payload),
      };

    case POST_MATKAKOHDE_SUCCESS:
      return {
        ...state,
        fetchingRequest: false,
        Matkakohteet: [...state.Matkakohteet, action.payload],
      };

    case POST_MATKAKOHDE_ERROR:
      return { ...state, fetchingRequest: false };

    case GET_MATKAKOHTEET_SUCCESS:
      return { ...state, Matkakohteet: action.payload };

    case DELETE_MATKAKOHDE_SUCCESS:
      return {
        ...state,
        fetchingRequest: false,
        Matkakohteet: state.Matkakohteet.filter(
          (matkakohde) => matkakohde._id !== action.payload
        ),
      };
    case DELETE_MATKAKOHDE_ERROR:
      return { ...state, fetchingRequest: false };
  }

  return state;
}
