import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import JasenKortti from '../JasenetSivu/JasenKortti';
import { useSelector } from 'react-redux';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const KayttajatContainer = () => {
  const [kayttajat, setKayttajat] = useState([]);
  const [fetching, setFething] = useState(false);

  const user = useSelector((state) => state.auth.kayttaja);
  const axios = useAxiosPrivate();

  const handleFetch = async () => {
    try {
      const response = await axios.get('/api/user/aktiivisimmatkayttajat');
      if (response.status === 200) {
        setKayttajat(response.data.kayttajat);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (user) handleFetch();
  }, []);
  return (
    <>
      {user && (
        <Wrapper>
          <div className="banner"></div>
          <div className="wrapper">
            <h1>Aktiivisimmat käyttäjät</h1>
            <div className="jasenGrid">
              {kayttajat.map((kayttaja) => {
                return (
                  <JasenKortti
                    key={kayttaja._id[0]._id}
                    etunimi={kayttaja._id[0].etunimi}
                    sukunimi={kayttaja._id[0].sukunimi}
                    nimimerkki={kayttaja._id[0].nimimerkki}
                    createdAt={kayttaja._id[0].createdAt}
                    esittely={kayttaja._id[0].esittely}
                    kuva={kayttaja._id[0].kuva}
                    id={kayttaja._id[0]._id}
                    tarinat={kayttaja.count}
                  />
                );
              })}
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  .banner {
    background: #fa7171;
    height: 60px;
    margin: -1px 0 -55px 0;
  }
  .wrapper {
    width: 90%;
    max-width: 1100px;
    margin: auto;
    h1 {
      font-size: 36px;
      font-weight: 400;
    }
  }
  .jasenGrid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: center;
    gap: 20px;
  }
  @media screen and (max-width: 600px) {
    .banner {
      margin-top: -1px;
    }
    .wrapper {
      h1 {
        margin: auto;
        width: fit-content;
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
`;

export default KayttajatContainer;
