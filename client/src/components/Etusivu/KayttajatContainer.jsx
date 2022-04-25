import React from 'react';
import styled from 'styled-components';
import JasenKortti from '../JasenetSivu/JasenKortti';

const KayttajatContainer = () => {
  return (
    <Wrapper>
      <div className="banner"></div>
      <div className="wrapper">
        <h1>Aktiivisimmat käyttäjät</h1>
        <div className="jasenGrid">
          <JasenKortti />
          <JasenKortti />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .banner {
    background: #fa7171;
    height: 60px;
    margin: -1px 0 -55px 0;
  }
  .wrapper {
    color: white;
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
