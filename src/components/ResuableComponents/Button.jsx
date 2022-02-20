import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  styles: PropTypes.object,
};

const Wrapper = styled.div`
  button {
    cursor: pointer;
    font-size: var(--font-small);
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
