import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TarinaKortti from '../MatkakohdeIDSivu/TarinaKortti';
import { useSelector } from 'react-redux';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import formatDate from '../../utils/formatedDate';

const TarinatContainer = () => {
  const [tarinat, setTarinat] = useState([]);
  const user = useSelector((state) => state.auth.kayttaja);

  const axios = useAxiosPrivate();

  const handleFetch = async () => {
    try {
      const response = await axios.get('/api/tarina/suosituimmattarinat');
      if (response.status === 200) {
        setTarinat(response.data.tarinat);
      }
    } catch (error) {
      console.log(error.respose.data);
    }
  };

  useEffect(() => {
    if (user) handleFetch();
  }, []);

  return (
    <>
      {user && (
        <Wrapper>
          <div className="title">
            <h1>Suosituimmat tarinat</h1>
          </div>
          <div className="tarinatGrid">
            {tarinat.map((tarina) => {
              return (
                <TarinaKortti
                  key={tarina._id}
                  matkaaja={tarina.matkaaja[0].nimimerkki}
                  createdAt={formatDate(tarina.createdAt)}
                  teksti={tarina.teksti}
                  id={tarina._id}
                  otsikko={tarina.otsikko}
                  lukukertoja={tarina.lukukertoja}
                />
              );
            })}
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  .title {
    width: fit-content;
    margin: 50px auto;
    h1 {
      font-size: 36px;
      font-weight: 400;
    }
  }
  .tarinatGrid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 600px));
    justify-content: center;
    gap: 20px;
  }
  @media screen and (max-width: 850px) {
    .tarinatGrid {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 600px) {
    .title {
      width: fit-content;
      margin: 30px auto;
      h1 {
        font-size: 20px;

        font-weight: 400;
      }
    }
  }
`;

export default TarinatContainer;
