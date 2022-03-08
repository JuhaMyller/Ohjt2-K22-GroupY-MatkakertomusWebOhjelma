import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const submenu = useRef(null);
  const location = useLocation();

  const displaySubMenu = (e) => {
    if (!submenu?.current) return;
    if (show) return setShow(false);
    const btnRect = e.target.getBoundingClientRect();
    const center = (btnRect.left + btnRect.right) / 2;
    const top = btnRect.bottom + 10;
    submenu.current.style.left = `${center}px`;
    submenu.current.style.top = `${top}px`;
    setShow(true);
  };

  return (
    <Wrapper>
      <div className="NavContainer">
        <div className="logoContainer"></div>
        <div className="linksContainer">
          <ul>
            <li className={location.pathname === '/' ? 'underline' : ''}>
              <Link to="/">Etusivu</Link>
            </li>
            <li
              className={
                location.pathname === '/matkakohteet' ? 'underline' : ''
              }
            >
              <Link to="matkakohteet">Matkakohteet</Link>
            </li>
            <li
              className={
                location.pathname === '/porukanmatkat' ? 'underline' : ''
              }
            >
              <Link to="porukanmatkat">Porukan Matkat</Link>
            </li>
            <li>
              <button onClick={displaySubMenu}>Marek</button>
            </li>
          </ul>
        </div>
      </div>
      <div
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(false)}
        ref={submenu}
        className={show ? 'alasvetoContainer show' : 'alasvetoContainer'}
      >
        <ul>
          <li>
            <Link to="omatmatkat">Omat matkat</Link>
          </li>
          <li>
            <Link to="omattiedot">Omat tiedot</Link>
          </li>
          <li>
            <Link to="jasenet">Jäsenet</Link>
          </li>
          <li>
            <Link to="#">Kirjaudu ulos</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100vw;
  height: 70px;
  background: #fa7171;
  position: relative;
  button {
    background: inherit;
    border: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
  }
  .NavContainer {
    margin: auto;
    height: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logoContainer {
    margin-left: 30px;
    height: 65px;
    aspect-ratio: 1/1;
    background: white;
  }
  .linksContainer {
    margin-right: 70px;
    color: white;
    font-size: var(--font-small);
    ul {
      display: flex;
      li:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  .underline {
    position: relative;
    ::after {
      content: '';
      border-bottom: 3px solid #d33939;
      width: calc(100% + 5px);
      transform: translateX(-2px);
      margin-top: 3px;
      display: block;
      position: absolute;
    }
  }

  .alasvetoContainer {
    position: absolute;
    min-width: 150px;
    margin-right: 70px;
    color: white;
    font-size: var(--font-small);
    text-align: center;
    background: #c4c4c4;
    transform: translateX(-50%);
    display: none;
    a {
      padding: 10px 15px;
      display: inline-block;
    }
    li {
      background: #c27a7a;
      :not(:last-child) {
        margin-bottom: 3px;
      }
    }
  }
  .show {
    display: block;
  }
`;

export default Navbar;
