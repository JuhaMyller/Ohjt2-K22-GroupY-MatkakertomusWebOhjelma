import { ADD_TARINA, DELETE_TARINA } from "./tarinatActionTypes";

const initialState = {
  Tarinat: [],
};

export default function matkakohdeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TARINA:
      return {
        ...state.Tarinat,
        tarinat: state.Tarinat.concat(action.payload),
      };
    case DELETE_TARINA:
      const tarinaID = action.payload.id;
      return {
        ...state.Tarinat,
        tarinat: state.Tarinat.filter((tarina) => tarina.id !== tarinaID),
      };
  }

  return state;
}
