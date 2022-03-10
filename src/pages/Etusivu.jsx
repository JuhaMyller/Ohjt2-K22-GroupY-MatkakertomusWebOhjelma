import React from 'react';
import styled from 'styled-components';
import bg from './pagehero1.png'

const Etusivu = () => {
  return (
    <Wrapper>  
      <h3 className='etusivutxt'>Katso parhaat matkakohteet ja tarinat</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
background-image: url(${bg});
background-size: cover;
background-position: center;
width: 100vw;
height: 87vh;



`;

export default Etusivu;
