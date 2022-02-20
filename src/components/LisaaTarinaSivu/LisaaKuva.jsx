import React from 'react';
import styled from 'styled-components';
import ImageContainer from '../ResuableComponents/ImageContainer';

const LisaaKuva = (props) => {
  return (
    <Wrapper>
      <ImageContainer imgUrls={props.imgUrls} />
      <div className="lisaakuva-input-container">
        <label className="file-label">
          <input
            type="file"
            onChange={props.onImgChange}
            multiple
            accept=".jpg, .jpeg, .png"
          />
          Lisää kuva
        </label>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  place-items: center;
  flex-direction: column;
  input {
    display: none;
  }
  .lisaakuva-input-container {
    margin-top: 50px;
  }
  .file-label {
    font-size: var(--font-small);
    font-family: inherit;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    background: var(--clr-grey);
  }
`;

export default LisaaKuva;
