import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SERVER_URL from '../utils/serverUrl';

import noProfile from '../assets/lataus.png';
import JasenenKuvaContainer from '../components/JasenetID/JasenenKuvaContainer';
import JasenenTiedotContainer from '../components/JasenetID/JasenenTiedotContainer';
import JasenenTarinatContainer from '../components/JasenetID/JasenenTarinatContainer';

const JasenetIDSivu = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [profiili, setProfiili] = useState({});

  const profiilikuva = profiili.kuva
    ? `${SERVER_URL}/img/${profiili.kuva}`
    : noProfile;

  const omaProfiili = useSelector((state) => state.auth.kayttaja);

  const axios = useAxiosPrivate();

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/user/profiili/' + id);
      if (response.status === 200) {
        setProfiili({ ...response.data.profiili });
        setLoading(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (omaProfiili.id !== id) return getUser();
    setProfiili({ ...omaProfiili });
  }, [omaProfiili]);

  return (
    <Wrapper>
      {loading ? (
        <div className="tyhja"></div>
      ) : (
        <div className="leftWrapper">
          <JasenenKuvaContainer
            nimi={`${profiili.etunimi} ${profiili.sukunimi}`}
            createdAt={profiili.createdAt || '2022-01-01'}
            tarinoita={profiili.tarinoita}
            kuva={profiilikuva}
          />
          <JasenenTiedotContainer
            paikkakunta={profiili.paikkakunta}
            esittely={profiili.esittely || 'ei esittelyä'}
            sposti={profiili.sposti}
            nimimerkki={profiili.nimimerkki}
          />
        </div>
      )}
      <div className="rightWrapper">
        <JasenenTarinatContainer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;

  .tyhja {
    min-width: 250px;
    max-width: 500px;
    flex: 1 0 auto;
    margin: 0 auto;
  }
  .leftWrapper {
    min-width: 250px;
    max-width: 500px;
    margin: 0 auto;
  }
  .rightWrapper {
    margin: 0 auto;
    flex: 1 1 400px;
  }
  @media only screen and (max-width: 500px) {
    .leftWrapper {
      flex: 1 1 auto;
    }
  }
`;

export default JasenetIDSivu;
