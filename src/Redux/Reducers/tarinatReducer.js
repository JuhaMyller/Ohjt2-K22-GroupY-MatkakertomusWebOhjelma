import * as actions from '../Actions/tarinatActions';

const initialState = {
  Tarinat: [],
  fetchingRequest: false,
};

export default function matkakohdeReducer(state = initialState, action) {
  switch (action.type) {
    case actions.TARINAT_REQUEST_BEGIN:
      return { ...state, fetchingRequest: true };
    case actions.POST_TARINA_ERROR:
      return { ...state, fetchingRequest: false };
    case actions.POST_TARINA_SUCCESS:
      return { ...state, fetchingRequest: false };
  }

  return state;
}
