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
background-position: center top;
width: 100vw;
height: 90vh;


/*  */
.etusivutxt {
  color: white;
  display: flex;
  justify-content: end;
  padding-top: 30vh;
  padding-right: 10vw;
}
@media screen and (max-width: 600px) {
  .etusivutxt {
    text-align: center;
    padding-top: 20vh;
  } 
}

`;

export default Etusivu;
