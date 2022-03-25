import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImageContainer from "../ResuableComponents/ImageContainer";
import "./Kohdekortti.css";

const Kohdekortti = ({ img, maa, tarinat, kohde }) => {
  return (
    <article className="kohdekortti">
      <img className="kuva_kohdekortti" src={img} alt="" />
      <h1>{kohde}</h1>
      <h4>{maa}</h4>
      <h5>Tarinoita {tarinat}</h5>
    </article>
  );
};

export default Kohdekortti;
