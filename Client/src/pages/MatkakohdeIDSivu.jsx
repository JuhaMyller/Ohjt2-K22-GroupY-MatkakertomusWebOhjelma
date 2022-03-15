import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const MatkakohdeIDSivu = () => {
  const { id } = useParams();

  return (
    <Wrapper>
      <h1>MatkakohdeID: {id}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default MatkakohdeIDSivu;
