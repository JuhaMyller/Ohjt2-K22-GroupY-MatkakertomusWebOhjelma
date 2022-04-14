import React, { useState } from 'react';
import styled from 'styled-components';
import { useModalContext } from '../ResuableComponents/Modal/ModalContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { POISTA_KUVA_ONNISTUNEESTI } from '../../Redux/Actions/authActions';

import MuokkaaProfiilia from '../ModalTemplates/MuokkaaProfiilia/MuokkaaProfiilia';
import MuokkaaKuvaa from '../ModalTemplates/MuokkaaProfiilia/MuokkaaKuvaa';
import VaihdaSalasana from '../ModalTemplates/MuokkaaProfiilia/VaihdaSalasana';

const ProfiiliSubmenu = ({ open, setOpen }) => {
  const [fetching, setFetching] = useState(false);

  const { openModal } = useModalContext();
  const axios = useAxiosPrivate();
  const dispatch = useDispatch();

  const handleClick = (e, template) => {
    setOpen(false);

    openModal({ template: template, title: e.target.innerHTML });
  };

  const handlePoistaProfiilikuva = async () => {
    if (fetching) return;
    try {
      setFetching(true);
      const response = await axios.delete('/api/user/removeprofilepic');

      if (response.status === 200) {
        dispatch({ type: POISTA_KUVA_ONNISTUNEESTI });
        setFetching(false);
      }
    } catch (error) {
      setFetching(false);
      toast.error(error.response.data.message, {
        position: 'top-center',
        duration: 1500,
      });
    }
  };

  return (
    <Wrapper
      onMouseLeave={() => setOpen(false)}
      style={{ height: open ? '165px' : '0px' }}
    >
      <p onClick={(e) => handleClick(e, <MuokkaaProfiilia />)}>
        Muokkaa profiilia
      </p>
      <p onClick={(e) => handleClick(e, <MuokkaaKuvaa />)}>Vaihda kuva</p>
      <p onClick={(e) => handleClick(e, <VaihdaSalasana />)}>Vaihda salasana</p>
      <p onClick={handlePoistaProfiilikuva}>Poista profiilikuva</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  transition: all 0.2s ease-out;
  overflow: hidden;

  left: 50%;
  top: 30px;
  z-index: 1000;
  transform: translateX(-50%);
  min-width: 200px;
  background: grey;
  p {
    background-color: #c27a7a;
    padding: 10px;
    text-align: center;
    color: white;
    :not(:first-child) {
      margin-top: 3px;
    }
  }
`;

export default ProfiiliSubmenu;
