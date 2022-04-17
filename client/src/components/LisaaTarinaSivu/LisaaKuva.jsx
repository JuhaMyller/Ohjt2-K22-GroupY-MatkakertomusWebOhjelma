import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageContainer from '../ResuableComponents/ImageContainer';

const LisaaKuva = ({ setImgArr, imgArr }) => {
  const [imgUrls, setImgUrls] = useState([]);

  const onImgChange = (e) => {
    setImgArr((curr) => [...curr, ...e.target.files]);
  };

  const deleteImg = (index) => {
    setImgArr((arr) => {
      const newArr = [...arr];
      newArr.splice(index, 1);
      return newArr;
    });
  };

  useEffect(() => {
    const newImageURLs = [];
    imgArr.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImgUrls(newImageURLs);
  }, [imgArr]);

  return (
    <Wrapper>
      <ImageContainer
        deleteImg={deleteImg}
        canDelete={true}
        imgUrls={imgUrls}
      />
      <div className="lisaakuva-input-container">
        <label className="file-label">
          <input
            type="file"
            onChange={onImgChange}
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
    margin: 50px auto 0 auto;
  }
  .file-label {
    cursor: pointer;
    font-size: var(--font-small);
    font-family: inherit;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    background: var(--clr-grey);
  }
`;

export default LisaaKuva;
