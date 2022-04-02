import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DesktopNav = ({ displaySubMenu }) => {
  const location = useLocation();
  const buttonRef = useRef(null);
  const user = useSelector((state) => state.auth.kayttaja);
  const isLoading = useSelector((state) => state.auth.refreshTokenFetch);

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
            {user && (
              <li
                className={
                  location.pathname === '/porukanmatkat'
                    ? 'underline'
                    : 'link-hover'
                }
              >
                <Link to="porukanmatkat">Porukan Matkat</Link>
              </li>
            )}
            <li>
              {isLoading ? null : user ? (
                <button
                  ref={buttonRef}
                  onClick={displaySubMenu}
                  // onMouseOver={displaySubMenu}
                >
                  {user.etunimi}
                </button>
              ) : (
                <Link to="kirjaudu">Kirjaudu</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
