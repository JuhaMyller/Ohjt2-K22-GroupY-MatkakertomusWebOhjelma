import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageContainer from '../ResuableComponents/ImageContainer';

const ImageMuokkaus = (props) => {
  const { kuvatOb, setKuvatOb } = props;
  const [imgUrls, setImgUrls] = useState(props.imgUrls);

  const onImgChange = (e) => {
    setKuvatOb((curr) => [...curr, ...e.target.files]);
  };

  const deleteImg = (index) => {
    setImgUrls((arr) => {
      const newArr = [...arr];
      newArr.splice(index, 1);
      return newArr;
    });
  };

  useEffect(() => {
    const newImageURLs = [...props.imgUrls];
    kuvatOb.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImgUrls(newImageURLs);
  }, [kuvatOb]);

  //poistaminen 2 arrayta, toisessa server img URL, toisessa object URL.
  //Kun käyttäjä poistaa niin katsotaan sisältääkö poistettava keyword blop.

  return (
    <Wrapper>
      <ImageContainer
        deleteImg={deleteImg}
        canDelete={true}
        imgUrls={imgUrls}
      />
      <div className='lisaakuva-input-container'>
        <label className='file-label'>
          <input
            type='file'
            onChange={onImgChange}
            multiple
            accept='.jpg, .jpeg, .png'
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
    cursor: pointer;
    font-size: var(--font-small);
    font-family: inherit;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    background: var(--clr-grey);
  }
`;

export default ImageMuokkaus;
