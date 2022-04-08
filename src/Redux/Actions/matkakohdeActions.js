export const ADD_MATKAKOHDE = 'ADD_MATKAKOHDE';
export const DELETE_MATKAKOHDE_ERROR = 'DELETE_MATKAKOHDE_ERROR';
export const DELETE_MATKAKOHDE_SUCCESS = 'DELETE_MATKAKOHDE_SUCCESS';
export const REQUEST_BEGIN = 'REQUEST_BEGIN';
export const POST_MATKAKOHDE_SUCCESS = 'POST_MATKAKOHDE_SUCCESS';
export const POST_MATKAKOHDE_ERROR = 'POST_MATKAKOHDE_ERROR';
export const GET_MATKAKOHTEET_SUCCESS = 'GET_MATKAKOHTEET_SUCCESS';

export function addMatkakohde(payload) {
  return {
    type: ADD_MATKAKOHDE,
    payload,
  };
}
export function deleteMatkakohde(id, axios, toast) {
  return async (dispatch) => {
    try {
      dispatch({ type: REQUEST_BEGIN });
      const response = await axios.delete('/api/matkakohde/matkakohde/' + id);
      dispatch({
        type: DELETE_MATKAKOHDE_SUCCESS,
        payload: response.data.matkakohde,
      });
      toast.success('Matkakohde poistettu', {
        position: 'top-center',
        duration: 1500,
      });
    } catch (error) {
      dispatch({ type: DELETE_MATKAKOHDE_ERROR });
      toast.error(error.response.data.message, {
        position: 'top-center',
        duration: 1500,
      });
    }
  };
}

export function getMatkakohteet(axios) {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/matkakohde/matkakohteet');
      if (response)
        dispatch({
          type: GET_MATKAKOHTEET_SUCCESS,
          payload: response.data.matkakohteet,
        });
    } catch (error) {}
  };
}

export function postMatkakohde(payload, toast, axios, resetForm) {
  const { matkakohde, maa, paikkakunta, matkanKuvaus, kuvat } = payload;
  return async (dispatch) => {
    try {
      dispatch({ type: REQUEST_BEGIN });
      try {
        const formData = new FormData();
        formData.append('kohdenimi', matkakohde);
        formData.append('maa', maa);
        formData.append('paikkakunta', paikkakunta);
        formData.append('kuvateksti', matkanKuvaus);
        formData.append('kuva', kuvat[0]);

        const response = await axios.post(
          'api/matkakohde/matkakohde',
          formData
        );
        if (response.status === 201) {
          resetForm();
          dispatch({
            type: POST_MATKAKOHDE_SUCCESS,
            payload: response.data.uusiMatkakohde,
          });
          toast.success('Matkakohde luotu', {
            position: 'top-center',
            duration: 1500,
          });
        }
      } catch (error) {
        dispatch({
          type: POST_MATKAKOHDE_ERROR,
        });
        toast.error(error.response.data.message, {
          position: 'top-center',
          duration: 1500,
        });
      }
    } catch (error) {}
  };
}
