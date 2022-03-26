import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImageContainer from "../ResuableComponents/ImageContainer";
import {
  Link,
  useLocation,
  useNavigate,
  NavLink,
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./Kohdekortti.css";

const Kohdekortti = ({ img, maa, tarinat, kohde }) => {
  return (
    <Link to="">
      <div className="kohdekortti" style={{ backgroundImage: `url(${img})` }}>
        <div className="kohdekortti_kohde_maa">
          <h1>{kohde}</h1>
          <h4>{maa}</h4>
        </div>
        <div className="kohdekortti_tarinat">
          <p>Tarinoita {tarinat}</p>
        </div>
      </div>
    </Link>
  );
};

export default Kohdekortti;
