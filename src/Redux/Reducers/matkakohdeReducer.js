import {
  ADD_MATKAKOHDE,
  DELETE_MATKAKOHDE,
} from '../Actions/matkakohdeActions';
const initialState = {
  Matkakohteet: [],
};

export default function matkakohdeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MATKAKOHDE:
      return {
        ...state.Matkakohteet,
        matkakohteet: state.Matkakohteet.concat(action.payload),
      };
    case DELETE_MATKAKOHDE:
      const matkakohdeID = action.payload.id;
      return {
        ...state.Matkakohteet,
        matkakohteet: state.Matkakohteet.filter(
          (matkakohde) => matkakohde.id !== matkakohdeID
        ),
      };
  }

  return state;
}
