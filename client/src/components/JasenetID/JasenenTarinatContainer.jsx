import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useParams } from 'react-router-dom';
import GetRequestTime from '../../utils/getRequestTime';
import Loading from '../ModalTemplates/Loading/Loading';
import TarinaKortti from '../MatkakohdeIDSivu/TarinaKortti';
import formatDate from '../../utils/formatedDate';

const JasenenTarinatContainer = () => {
  const [tarinat, setTarinat] = useState([]);
  const [loading, setLoading] = useState(true);

  const axios = useAxiosPrivate();
  const { id } = useParams();

  const getKayttajanTarinat = async () => {
    try {
      setLoading(true);
      const getRequestTime = new GetRequestTime(new Date());
      const response = await axios.get('/api/tarina/kayttajantarinat/' + id);
      getRequestTime.onFinish(500, () => {
        setTarinat(response.data.tarinat);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getKayttajanTarinat();
  }, []);

  return (
    <Wrapper>
      <h1>Suosituimmat tarinat</h1>
      <div className="tarinatContainer">
        {loading ? (
          <div className="loadingContainer">
            <Loading />
          </div>
        ) : tarinat?.length === 0 ? (
          <h2>Käyttäjälle ei ole vielä tarinoita</h2>
        ) : (
          tarinat.map((tarina, index) => {
            console.log(tarina.lukukertoja.length);
            return (
              <div key={tarina._id} className="tarina">
                <TarinaKortti
                  matkaaja={tarina.matkaaja.nimimerkki}
                  createdAt={formatDate(tarina.createdAt)}
                  teksti={tarina.teksti}
                  id={tarina._id}
                  otsikko={tarina.otsikko}
                  numero={index}
                  lukukertoja={tarina.lukukertoja}
                />
              </div>
            );
          })
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;

  h1 {
    text-align: center;
    font-size: var(--font-medium);
  }
  .loadingContainer {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tarinatContainer {
    h2 {
      margin-top: 30px;
      font-size: var(--font-small);
      font-weight: 400;
      text-align: center;
    }
  }
  .tarina {
    margin: 10px auto;
    width: 90%;
    max-width: 500px;
    :first-child {
      margin-top: 50px;
    }
  }
`;

export default JasenenTarinatContainer;
