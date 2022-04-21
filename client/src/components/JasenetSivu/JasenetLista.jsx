import JasenKortti from './JasenKortti';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import serverUrl from '../../utils/serverUrl';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import styled from 'styled-components';

const JasenetLista = () => {
  //   const axios = useAxiosPrivate();

  //   const haeMatkaaja = async () => {
  //     const responseMatkaajat = await axios.get('/api/user');
  //     console.log(responseMatkaajat);
  //   };
  //   useEffect(() => {
  //     haeMatkaaja();
  //   }, []);
  return (
    <Wrapper>
      <div className='Jasenlista'>
        <JasenKortti />
        <JasenKortti />
        <JasenKortti />
        <JasenKortti />
        <JasenKortti />
        <JasenKortti />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .Jasenlista {
    margin: 50px auto;
    grid-gap: 20px;
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 850px) {
    .Jasenlista {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default JasenetLista;
