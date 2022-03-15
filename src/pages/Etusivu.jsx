import React from 'react';
import styled from 'styled-components';
import { NavBar2 } from '../components/NavBar/Navbar2';
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
background-position: center top;
width: 100vw;
height: 90vh;
`;

export default Etusivu;
