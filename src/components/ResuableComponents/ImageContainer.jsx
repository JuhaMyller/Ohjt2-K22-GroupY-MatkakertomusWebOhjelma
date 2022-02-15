import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageContainer = ({ imgArr, mainImg = 0 }) => {
  const [imgIndex, setImgIndex] = useState(mainImg);

  return (
    <Wrapper>
      <div className="main-img">
        <img src={imgArr[imgIndex]} alt="ei toimi" />
      </div>
      <div className="small-imgs-container">
        {imgArr.map((img, index) => {
          return (
            <div
              onClick={() => setImgIndex(index)}
              key={index}
              className="small-img"
            >
              <img
                style={index === imgIndex ? { opacity: 0.65 } : null}
                src={img}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

ImageContainer.propTypes = {
  imgArr: PropTypes.array.isRequired,
};

const Wrapper = styled.div`
  width: 350px;
  max-height: 350px;
  max-width: 90%;
  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
  }
  .main-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: var(--clr-grey);
  }
  .small-imgs-container {
    margin-top: 10px;
    height: 50px;
    width: 100%;
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    place-items: center;
  }
  .small-img {
    background: red;
    width: 100%;
    height: 50px;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 350px) {
    .small-imgs-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default ImageContainer;
