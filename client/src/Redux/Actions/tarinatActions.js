import requestTime from '../../utils/getRequestTime';

export const TARINAT_REQUEST_BEGIN = 'TARINAT_REQUEST_BEGIN';
export const POST_TARINA_SUCCESS = 'POST_TARINA_SUCCESS';
export const POST_TARINA_ERROR = 'POST_TARINA_ERROR';
export const GET_TARINAT_SUCCESS = 'GET_TARINAT_SUCCESS';
export const LISAA_TARINA_KAYTTAJALLE = 'LTK';

export function postTarina(payload, axios, toast, navigate) {
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
    dispatch({ type: TARINAT_REQUEST_BEGIN });
    const reqTime = new requestTime(new Date());
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

      reqTime.onFinish(800, () => {
        if (response.status === 201) {
          dispatch({
            type: POST_TARINA_SUCCESS,
            payload: response.data.savedTarina,
          });
          dispatch({ type: LISAA_TARINA_KAYTTAJALLE });
          toast.success('Tarina lisätty', {
            position: 'top-center',
            duration: 1500,
          });
          navigate(`/tarinat/${response.data.savedTarina._id}`);
        }
      });
    } catch (error) {
      reqTime.onFinish(600, () => {
        dispatch({
          type: POST_TARINA_ERROR,
        });
        toast.error(error.response.data.message, {
          position: 'top-center',
          duration: 1500,
        });
      });
    }
  };
}
