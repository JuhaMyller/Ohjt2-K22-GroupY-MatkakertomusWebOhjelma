import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import TarinaLista from '../components/MatkakohdeIDSivu/TarinaLista';

const MatkakohdeIDSivu = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>MatkakohdeID: {id}</h1>
      <TarinaLista />
    </div>
  );
};

const Wrapper = styled.div``;

export default MatkakohdeIDSivu;
