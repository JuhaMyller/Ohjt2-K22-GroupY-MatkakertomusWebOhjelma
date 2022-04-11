import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = React.memo((props) => {
  return (
    <Wrapper>
      <input
        style={{ ...props.styles }}
        disabled={props.readOnly || false}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        type={props.type || 'text'}
        name={props.id}
        id={props.id}
        autoComplete={props.autoComplete || 'off'}
        required
      />
    </Wrapper>
  );
});

Input.propTypes = {
  styles: PropTypes.object,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  input {
    width: 100%;
    font-size: var(--font-small);
    font-family: inherit;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    background: var(--clr-grey);
  }
  input:-webkit-autofill {
    box-shadow: 0 0 0px 40px white inset;
    -webkit-text-fill-color: #696969;
  }
`;

export default Input;
