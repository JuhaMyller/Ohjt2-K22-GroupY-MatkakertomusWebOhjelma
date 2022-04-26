import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const AlaBanneri = () => {
  const user = useSelector((state) => state.auth.kayttaja);

  return (
    <>
      {!user && (
        <Wrapper>
          <h1>Kirjaudu sisään nähdäksesi enemmän</h1>
        </Wrapper>
      )}
    </>
  );
};
const Wrapper = styled.div`
  h1 {
    margin-top: 50px;
    text-align: center;
    font-size: 36px;
    font-weight: 400;
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;
export default AlaBanneri;
