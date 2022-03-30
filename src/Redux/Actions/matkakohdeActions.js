export const ADD_MATKAKOHDE = 'ADD_MATKAKOHDE';
export const DELETE_MATKAKOHDE = 'DELETE_MATKAKOHDE';

export function addMatkakohde(payload) {
  return {
    type: ADD_MATKAKOHDE,
    payload,
  };
}
export function deleteMatkakohde(payload) {
  return {
    type: DELETE_MATKAKOHDE,
    payload: payload,
  };
}
