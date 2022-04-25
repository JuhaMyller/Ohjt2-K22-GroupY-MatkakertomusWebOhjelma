import JasenKortti from './JasenKortti';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import serverUrl from '../../utils/serverUrl';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import styled from 'styled-components';

const JasenetLista = () => {
  const [jasenet, setJasenet] = useState([]);
  const axios = useAxiosPrivate();

  const haeMatkaaja = async () => {
    const responseMatkaajat = await axios.get('/api/user/jasenet');
    setJasenet(responseMatkaajat.data.jasenet);
  };
  useEffect(() => {
    haeMatkaaja();
  }, []);
  return (
    <Wrapper>
      <div className='Jasenlista'>
        {jasenet.map((j) => {
          return (
            <JasenKortti
              id={j._id}
              key={j._id}
              createdAt={j.createdAt}
              etunimi={j.etunimi}
              sukunimi={j.sukunimi}
              nimimerkki={j.nimimerkki}
              kuva={j.kuva}
              esittely={j.esittely}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  .Jasenlista {
    margin: auto;
    grid-gap: 40px;
    max-width: 1000px;
    width: 90%;
    display: grid;
    grid-auto-rows: 390px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 850px) {
    .Jasenlista {
      max-width: 600px;
      width: 90%;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px;
      margin: auto;
      display: grid;
    }
  }

  @media (max-width: 600px) {
    .Jasenlista {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 40px;
      max-width: 300px;
    }
  }
`;

export default JasenetLista;
