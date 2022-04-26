import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Kohdekortti from '../MatkakohteetSivu/Kohdekortti';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import SERVER_URL from '../../utils/serverUrl';

const MatkakohteetContainer = () => {
  const [matkakohteet, setMatkakohteet] = useState([]);
  const [fetching, setFetching] = useState(false);

  const axios = useAxiosPrivate();

  const fetchMatkakohteet = async () => {
    try {
      setFetching(true);
      const response = await axios.get('api/matkakohde/suosituimmat');
      if (response.status === 200) {
        setMatkakohteet(response.data.matkakohde);
        setFetching(false);
      }
    } catch (error) {
      console.log(error.response.data);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchMatkakohteet();
  }, []);

  return (
    <Wrapper>
      <div className="title">
        <h1>Suosituimmat matkakohteet</h1>
      </div>
      <div className="gridWrapper">
        {matkakohteet.map((matkakohde) => {
          return (
            <div key={matkakohde._id} className="cell">
              <Kohdekortti
                kuva={`${SERVER_URL}/img/${matkakohde.kuva}`}
                maa={matkakohde.maa}
                kohdenimi={matkakohde.kohdenimi}
                tarinat={matkakohde.tarinat}
              />
            </div>
          );
        })}
      </div>
      <div className="banner"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    max-width: 1100px;
    margin: 50px auto;
    width: 90%;
    h1 {
      font-size: 36px;
      font-weight: 400;
    }
  }
  .gridWrapper {
    max-width: 1100px;
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: center;
    gap: 20px;
  }
  .cell {
    max-width: 350px;
    width: 100%;
    margin: auto;
  }
  .banner {
    background: #fa7171;
    height: 100px;
    margin-top: -80px;
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

export default MatkakohteetContainer;
