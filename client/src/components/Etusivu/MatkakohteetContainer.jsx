import React from 'react';
import styled from 'styled-components';
import Kohdekortti from '../MatkakohteetSivu/Kohdekortti';
import bg from '../../assets/pagehero1.png';

const MatkakohteetContainer = () => {
  return (
    <Wrapper>
      <div className="title">
        <h1>Suosituimmat matkakohteet</h1>
      </div>
      <div className="gridWrapper">
        <div className="cell">
          <Kohdekortti kuva={bg} maa="suomi" kohdenimi="perr" tarinat={10} />
        </div>
        <div className="cell">
          <Kohdekortti kuva={bg} maa="suomi" kohdenimi="perr" tarinat={10} />
        </div>
        <div className="cell">
          <Kohdekortti kuva={bg} maa="suomi" kohdenimi="perr" tarinat={10} />
        </div>
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
