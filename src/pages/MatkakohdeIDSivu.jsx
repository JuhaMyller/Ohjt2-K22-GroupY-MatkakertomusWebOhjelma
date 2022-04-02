import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import TarinaLista from '../components/MatkakohdeIDSivu/TarinaLista';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const MatkakohdeIDSivu = () => {
  const { id } = useParams();

  const axios = useAxiosPrivate();
  useEffect(async () => {
    const tarinat = await axios.get('/api/matkakohde//matkakohteet/' + id);
    console.log(tarinat);
  }, []);

  return (
    <div>
      <h1>MatkakohdeID: {id}</h1>
      <TarinaLista />
    </div>
  );
};

const Wrapper = styled.div``;

export default MatkakohdeIDSivu;
