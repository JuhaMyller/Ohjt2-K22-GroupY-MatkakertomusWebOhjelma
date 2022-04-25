import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import useWindowDimensions from '../../hooks/useWindowDimensions ';
import DesktopNav from './DesktopNav';
import Submenu from './Submenu';
import MobileNav from './MobileNav';
import navlogo from '../../assets/navlogo.png';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
  const submenu = useRef(null);
  const buttonRef = useRef(null);
  const { width } = useWindowDimensions();
  const MobileNavRef = useRef(null);

  const displaySubMenu = (e) => {
    if (!submenu?.current || show) return;
    const btnRect = e.target.getBoundingClientRect();
    const center = (btnRect.left + btnRect.right) / 2;
    const top = btnRect.bottom + 10;
    submenu.current.style.left = `${center}px`;
    submenu.current.style.top = `${top}px`;
    setShow(true);
  };

  const handleNavClick = (e) => {
    if (show) return setShow(false);
    if (buttonRef?.current && e.target == buttonRef.current) displaySubMenu(e);
  };

  const closeNav = () => {
    const node = ReactDOM.findDOMNode(MobileNavRef.current);
    node.classList.remove('animateIN');
    node.classList.add('animateOUT');
    const timeout = setTimeout(() => {
      setDisplayMobileNav(false);
      node.classList.remove('animateOUT');
      node.classList.add('animateIN');
    }, 450);
    return () => clearTimeout(timeout);
  };
  const handleHamburgerClick = () => {
    if (displayMobileNav) closeNav();
    else setDisplayMobileNav(true);
  };

  useEffect(() => {
    setDisplayMobileNav(false);
    setShow(false);
  }, [width]);

  return (
    <Wrapper onClick={handleNavClick} onMouseLeave={() => setShow(false)} data-testid="NavContainer">
      <div className="NavContainer">
        <div className="logoContainer" data-testid="navlogocontainer">
          <Link to="/">
            <img src={navlogo} data-testid="navlogo"></img>
          </Link>
        </div>
        {width > 675 ? (
          <DesktopNav displaySubMenu={displaySubMenu} />
        ) : (
          <button onClick={handleHamburgerClick} className="navBurger">
            <GiHamburgerMenu color="white" size={35} />
          </button>
        )}
        <MobileNav
          display={displayMobileNav}
          navRef={MobileNavRef}
          closeNav={closeNav}
        />
        <Submenu setShow={setShow} show={show} submenu={submenu} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  height: 70px;
  background: #fa7171;
  position: relative;
  .navBurger {
    margin: 0 30px 0 auto;
  }
  button {
    background: inherit;
    border: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
  }
  .NavContainer {
    margin: auto;
    height: 100%;
    max-width: 1440px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .desktopNav {
  }
  .logoContainer {
    margin-left: 30px;
    height: 65px;
    aspect-ratio: 1/1;
    background: white;
  }
  .linksContainer {
    margin-right: 20px;
    color: white;
    font-size: var(--font-small);
    ul {
      display: flex;
      li:not(:last-child) {
        margin-right: 40px;
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
  .link-hover:hover {
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
    z-index: 1000;
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
