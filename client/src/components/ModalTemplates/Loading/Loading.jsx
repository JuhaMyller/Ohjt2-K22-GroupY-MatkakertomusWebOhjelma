import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <h2>Ladataan</h2>
      <div className="lds_dual_ring"></div>
    </Wrapper>
  );
};

const lds_dual_ring = keyframes`
   0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h2 {
    padding: 10px 0;
  }
  .lds_dual_ring {
    margin: 20px auto;
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds_dual_ring:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid rgb(0, 0, 0);
    border-color: rgb(0, 0, 0) transparent rgb(0, 0, 0) transparent;
    animation: ${lds_dual_ring} 1.2s linear infinite;
  }
`;
export default Loading;
