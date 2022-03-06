import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImageContainer from "../ResuableComponents/ImageContainer";

const Kohdekortti = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => {
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

const Title = () => {
  <h1>Otsikko</h1>;
};

const Author = () => {
  <h3>Kirjoittaja</h3>;
};

export { Kohdekortti };
