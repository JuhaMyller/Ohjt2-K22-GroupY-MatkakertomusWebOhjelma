export const ADD_TARINA = 'ADD_TARINA';
export const DELETE_TARINA = 'DELETE_TARINA';

export const TARINAT_REQUEST_BEGIN = 'TARINAT_REQUEST_BEGIN';
export const POST_TARINA_SUCCESS = 'POST_TARINA_SUCCESS';
export const POST_TARINA_ERROR = 'POST_TARINA_ERROR';
export const GET_TARINAT_SUCCESS = 'GET_TARINAT_SUCCESS';

export function addTarina(payload) {
  return {
    type: ADD_TARINA,
    payload,
  };
}
export function deleteTarina(payload) {
  return {
    type: DELETE_TARINA,
    payload: payload,
  };
}

export function postTarina(payload, axios, toast) {
  const {
    matkakohde,
    yksityinen,
    tarina,
    tulopaiva,
    lahtopaiva,
    otsikko,
    imgArr,
  } = payload;
  return async (dispatch) => {
    try {
      dispatch({ type: TARINAT_REQUEST_BEGIN });
      try {
        const formData = new FormData();
        formData.append('matkakohde', matkakohde);
        formData.append('yksityinen', yksityinen);
        formData.append('alkupvm', tulopaiva);
        formData.append('loppupvm', lahtopaiva);
        formData.append('teksti', tarina);
        formData.append('otsikko', otsikko);

        imgArr.map((kuva) => {
          formData.append('kuva', kuva);
        });

        const response = await axios.post('/api/tarina/tarina', formData);
        if (response.status === 201) {
          dispatch({
            type: POST_TARINA_SUCCESS,
            payload: response.data.savedTarina,
          });
          toast.success('Tarina lisätty', {
            position: 'top-center',
            duration: 1500,
          });
        }
      } catch (error) {
        dispatch({
          type: POST_TARINA_ERROR,
        });
        toast.error(error.response.data.message, {
          position: 'top-center',
          duration: 1500,
        });
      }
    } catch (error) {}
  };
}
