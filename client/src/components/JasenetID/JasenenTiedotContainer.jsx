import React from 'react';
import styled from 'styled-components';

const JasenenTiedotContainer = (props) => {
  const { paikkakunta, esittely, nimimerkki, sposti } = props;
  return (
    <Wrapper>
      <div className="tiedot">
        <h2>Nimimerkki</h2>
        <p>{nimimerkki}</p>
        <h2>Sposti</h2>
        <p>{sposti}</p>

        <h2>Paikkakunta</h2>
        <p>{paikkakunta}</p>
      </div>
      <div className="esittely">
        <h2>Esittely</h2>
        <p>{esittely}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 100%;

  .tiedot {
    width: fit-content;
    margin: auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: auto;
    word-wrap: break-word;
    word-break: break-all;

    h2 {
      font-size: var(--font-small);
      font-weight: 400;
      margin-bottom: 5px;
    }
    p {
      margin-bottom: 5px;
      font-style: italic;
    }
  }
  .esittely {
    margin-top: 30px;
    padding: 20px;
    h2 {
      text-align: center;
      font-size: var(--font-medium);
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 10px;
    .tiedot {
      max-width: 90%;
      grid-template-columns: 1fr;
      width: fit-content;
      margin: auto;
      overflow: hidden;
      h2 {
        margin-bottom: 0;
      }
      p {
        margin-bottom: 10px;
      }
    }
  }
`;

export default JasenenTiedotContainer;
