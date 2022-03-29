import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImageContainer from "../ResuableComponents/ImageContainer";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Kohdekortti.css";

const Kohdekortti = ({ kuva, maa, kohdenimi }) => {
  return (
    <Link to="matkakohteet/:id">
      <div className="kohdekortti" style={{ backgroundImage: `url(${kuva})` }}>
        <div className="kohdekortti_kohde_maa">
          <h1>{kohdenimi}</h1>
          <h4>{maa}</h4>
        </div>
        <div className="kohdekortti_tarinat">
          <p>Tarinoita</p>
        </div>
      </div>
    </Link>
  );
};

export default Kohdekortti;
