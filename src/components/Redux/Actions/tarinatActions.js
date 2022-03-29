export const ADD_TARINA = "ADD_TARINA";
export const DELETE_TARINA = "DELETE_TARINA";

export function addTarina(payload) {
  return {
    type: actions.ADD_TARINA,
    payload,
  };
}
export function deleteTarina(payload) {
  return {
    type: actions.DELETE_TARINA,
    payload: payload,
  };
}
