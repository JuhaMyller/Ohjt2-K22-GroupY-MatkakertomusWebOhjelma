import React from 'react';
import styled from 'styled-components';
import TarinaKortti from '../MatkakohdeIDSivu/TarinaKortti';

const TarinatContainer = () => {
  return (
    <Wrapper>
      <div className="title">
        <h1>Suosituimmat tarinat</h1>
      </div>
      <div className="tarinatGrid">
        <TarinaKortti
          matkaaja="Marek"
          createdAt="2020-02-02T13:30:30"
          teksti="asdasdsad"
          id="10"
          otsikko="TERVE"
          numero="10"
          lukukertoja={[]}
        />
        <TarinaKortti
          matkaaja="Marek"
          createdAt="2020-02-02T13:30:30"
          teksti="asdasdsad"
          id="10"
          otsikko="TERVE"
          numero="10"
          lukukertoja={[]}
        />
        <TarinaKortti
          matkaaja="Marek"
          createdAt="2020-02-02T13:30:30"
          teksti="asdasdsad"
          id="10"
          otsikko="TERVE"
          numero="10"
          lukukertoja={[]}
        />
        <TarinaKortti
          matkaaja="Marek"
          createdAt="2020-02-02T13:30:30"
          teksti="asdasdsad"
          id="10"
          otsikko="TERVE"
          numero="10"
          lukukertoja={[]}
        />
      </div>
    </Wrapper>
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
