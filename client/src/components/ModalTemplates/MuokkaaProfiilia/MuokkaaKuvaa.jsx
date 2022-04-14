import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageContainer from '../../ResuableComponents/ImageContainer';
import { useDispatch, useSelector } from 'react-redux';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import SERVER_URL from '../../../utils/serverUrl';
import { MUOKKAA_KUVAA_ONNISTUI } from '../../../Redux/Actions/authActions';
import { toast } from 'react-toastify';
import { useModalContext } from '../../ResuableComponents/Modal/ModalContext';

const MuokkaaKuvaa = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  const [newImg, setNewImg] = useState(false);
  const [fetching, setFetching] = useState(false);

  const kuva = useSelector((state) => state.auth.kayttaja.kuva);
  const axios = useAxiosPrivate();
  const dispatch = useDispatch();
  const { closeModal } = useModalContext();

  const onImgChange = (e) => {
    setImgArr([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFetching(true);
    try {
      const formData = new FormData();
      formData.append('kuva', imgArr[0]);

      const response = await axios.put('/api/user/setprofilepic', formData);

      if (response.status === 200) {
        dispatch({ type: MUOKKAA_KUVAA_ONNISTUI, payload: response.data.kuva });
        closeModal();
      }

      setFetching(false);
    } catch (error) {
      setFetching(false);
      toast.error(error.response.data.message, {
        position: 'top-center',
        duration: 1500,
      });
    }
  };

  useEffect(() => {
    if (imgArr.length === 0) return;
    const newImageURLs = [];
    imgArr.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImgUrl(newImageURLs);
    setNewImg(true);
  }, [imgArr]);

  useEffect(() => {
    if (kuva) {
      setImgUrl([`${SERVER_URL}/img/${kuva}`]);
    }
  }, []);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <ImageContainer imgUrls={imgUrl} />
      <div className="lisaakuva-input-container">
        <label className="file-label">
          <input
            disabled={fetching}
            type="file"
            onChange={onImgChange}
            accept=".jpg, .jpeg, .png"
          />
          Valitse kuva
        </label>
      </div>
      <div style={{ height: newImg ? '30px' : '0px' }} className="tallennaBtn">
        <button type="submit" disabled={fetching}>
          Tallenna
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 400px;
  max-width: 90%;
  margin: auto;
  .lisaakuva-input-container {
    width: fit-content;
    height: fit-content;
    margin: 20px auto;
  }
  input {
    display: none;
  }
  .file-label {
    cursor: pointer;
    font-size: var(--font-small);
    font-family: inherit;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    background: var(--clr-grey);
  }
  button {
    cursor: pointer;
    font-size: var(--font-small);
    font-family: inherit;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    background: #2a9134;
    color: white;
  }
  .tallennaBtn {
    margin: auto;
    margin-bottom: 20px;
    width: fit-content;
    overflow: hidden;
    transition: all 0.5s ease-out;
  }
`;

export default MuokkaaKuvaa;
