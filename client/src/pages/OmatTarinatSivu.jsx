import React, { useEffect, useState } from 'react';
import TarinaKortti from '../components/MatkakohdeIDSivu/TarinaKortti';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import formatDate from '../utils/formatedDate';
import styled from 'styled-components';

const OmatTarinatSivu = () => {
  const axios = useAxiosPrivate();
  const [omatTarinat, setOmatTarinat] = useState([]);
  const [fetch, setFetch] = useState(false);

  const getOmatTarinat = async () => {
    try {
      setFetch(true);
      const response = await axios.get('/api/tarina/omattarinat');
      setOmatTarinat(response.data.tarinat);
    } catch (error) {
      console.error(error);
    } finally {
      setFetch(false);
    }
  };

  useEffect(() => {
    getOmatTarinat();
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <Wrapper>
      <div className='otsikko'>
        <h1>Omat Tarinat</h1>
      </div>

      {omatTarinat.length > 0 ? (
        <div className='divlista'>
          {omatTarinat.map((tarina, index) => (
            <TarinaKortti
              numero={index}
              teksti={tarina.teksti}
              alkupvm={formatDate(tarina.alkupvm)}
              otsikko={tarina.otsikko}
              id={tarina._id}
              key={tarina._id}
              matkaaja={tarina.matkaaja.nimimerkki}
              lukukertoja={tarina.lukukertoja}
              createdAt={formatDate(tarina.createdAt)}
            />
          ))}
        </div>
      ) : !fetch ? (
        <div>
          <p style={{ textAlign: 'center', marginTop: 30 }}>
            Käyttäjällä ei ole vielä tarinoita
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: calc(100vh - 418px);
`;

export default OmatTarinatSivu;
