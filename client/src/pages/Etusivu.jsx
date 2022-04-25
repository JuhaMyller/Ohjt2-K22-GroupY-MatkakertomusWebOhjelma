import React from 'react';
import styled from 'styled-components';

import TarinatContainer from '../components/Etusivu/TarinatContainer';
import KayttajatContainer from '../components/Etusivu/KayttajatContainer';
import MatkakohteetContainer from '../components/Etusivu/MatkakohteetContainer';
import PageHero from '../components/Etusivu/PageHero';

const Etusivu = () => {
  return (
    <Wrapper>
      <PageHero />
      <MatkakohteetContainer />
      <KayttajatContainer />
      <TarinatContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

export default Etusivu;
