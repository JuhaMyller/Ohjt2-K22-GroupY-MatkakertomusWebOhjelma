import React from 'react';
import styled from 'styled-components';

const Button = ({ children, type, onClick, disabled, styles }) => {
  return (
    <Wrapper>
      <button
        style={{ ...styles }}
        type={type || 'button'}
        disabled={disabled || false}
        onClick={onClick}
      >
        {children}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    font-family: inherit;
    padding: 10px 15px;
    background: var(--clr-button);
    border: none;
    border-radius: 5px;
    :hover {
      background: var(--clr-button-hover);
    }
  }
`;

export default Button;
