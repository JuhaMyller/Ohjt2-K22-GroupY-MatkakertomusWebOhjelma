import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageContainer = ({ imgUrls = [], mainImg = 0 }) => {
  const [imgIndex, setImgIndex] = useState(mainImg);
  return (
    <Wrapper>
      <div className="main-img">
        {imgUrls.length > 0 && <img src={imgUrls[imgIndex]} alt="ei toimi" />}
      </div>
      {imgUrls.length > 1 && (
        <div className="small-imgs-container">
          {imgUrls.map((img, index) => {
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
      )}
    </Wrapper>
  );
};

ImageContainer.propTypes = {
  imgUrls: PropTypes.array.isRequired,
  mainImg: PropTypes.number,
};

const Wrapper = styled.div`
  min-width: 250px;
  max-width: 400px;
  width: 100%;
  user-select: none;
  img {
    transition: opacity 0.5s linear;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .main-img {
    min-width: 250px;
    aspect-ratio: 1/1;
    overflow: hidden;
    background-color: inherit;
    border: 2px solid #777;
    border-radius: 5px;
    img {
      object-fit: contain;
      border-radius: 5px;
    }
  }
  .small-imgs-container {
    margin-top: 10px;
    min-height: 50px;
    width: 100%;
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    place-items: center;
  }
  .small-img {
    width: 100%;
    height: 49px;
    background-color: red;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      box-shadow: 3px 2px 2px black;
    }
  }
  @media only screen and (max-width: 350px) {
    .small-imgs-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default ImageContainer;
