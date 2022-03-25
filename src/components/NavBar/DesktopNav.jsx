import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const DesktopNav = ({ displaySubMenu }) => {
  const location = useLocation();
  const buttonRef = useRef(null);

  return (
    <>
      <div className="desktopNav">
        <div className="linksContainer">
          <ul>
            <li
              className={location.pathname === '/' ? 'underline' : 'link-hover'}
            >
              <Link to="/">Etusivu</Link>
            </li>
            <li
              className={
                location.pathname === '/matkakohteet'
                  ? 'underline'
                  : 'link-hover'
              }
            >
              <Link to="matkakohteet">Matkakohteet</Link>
            </li>
            <li
              className={
                location.pathname === '/porukanmatkat'
                  ? 'underline'
                  : 'link-hover'
              }
            >
              <Link to="porukanmatkat">Porukan Matkat</Link>
            </li>
            <li>
              <button
                ref={buttonRef}
                onClick={displaySubMenu}
                // onMouseOver={displaySubMenu}
              >
                Marek
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
