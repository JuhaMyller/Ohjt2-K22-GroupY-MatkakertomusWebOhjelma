import React, { useLayoutEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//kovakoodattu img

import profileImg from '../../assets/testimg.jpeg';

const MobileNav = ({ closeNav, navRef, display }) => {
  const userID = useSelector((state) => state.auth.kayttaja?.id);
  return (
    <Wrapper
      style={{
        display: display ? 'block' : 'none',
      }}
    >
      <div ref={navRef} className={`mobileNavContainer animateIN`}>
        <div onClick={closeNav} className="helper"></div>
        <div className="links">
          <ul>
            <div className="user">
              <img src={profileImg} alt="profiilikuva" />
              <h2>Marek</h2>
            </div>
            <li>
              <Link to="/">
                <button onClick={closeNav}>Etusivu</button>
              </Link>
            </li>
            <li>
              <Link to="matkakohteet">
                <button onClick={closeNav}>Matkakohteet</button>
              </Link>
            </li>
            <li>
              <Link to="tarinat">
                <button onClick={() => closeNav(false)}>Porukan Tarinat</button>
              </Link>
            </li>
            <li>
              <Link to="omattarinat">
                <button onClick={closeNav}>Omat tarinat</button>
              </Link>
            </li>
            <li>
              <Link to={`jasenet/${userID}`}>
                <button onClick={closeNav}>Omat tiedot</button>
              </Link>
            </li>
            <li>
              <Link to="jasenet">
                <button onClick={closeNav}>Jäsenet</button>
              </Link>
            </li>
          </ul>
          <button onClick={closeNav} className="logout">
            <Link to="kirjauduulos">Kirjaudu ulos</Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const slideIN = keyframes`
 0% { transform: translateX(-100%);}
 100% { transform: translateX(0);}
`;
const slideOUT = keyframes`
 0% { transform: translateX(0);}
 95% { transform: translateX(-100%);}
`;

const Wrapper = styled.section`
  left: 0;
  top: 70px;
  width: 100vw;
  display: flex;
  position: absolute;
  z-index: 1000;
  .mobileNavContainer {
    width: 100vw;
    height: calc(100vh - 70px);
    text-align: center;
    color: white;
    display: flex;
    background: rgba(0, 0, 0, 0.3);
    li {
      margin-bottom: 3px;
      background: lightcoral;
    }
  }
  .animateIN {
    animation-name: ${slideIN};
    animation-duration: 0.5s;
  }
  .animateOUT {
    animation-name: ${slideOUT};
    animation-duration: 0.5s;
  }

  .links {
    background-color: white;
    width: 300px;
    padding: 20px 10px 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .user {
    h2 {
      color: black;
      padding: 10px 20px;
    }
    img {
      max-width: 120px;
      object-fit: cover;
      object-position: center;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }
  }
  .helper {
    flex: 1;
    height: 100%;
  }

  button {
    padding: 10px 20px;
    width: 100%;
  }
  .logout {
    background: red;
    margin-bottom: 30px;
  }
`;

export default MobileNav;
