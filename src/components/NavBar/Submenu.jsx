import React from 'react';
import { Link } from 'react-router-dom';

const Submenu = ({ setShow, submenu, show }) => {
  return (
    <div
      onClick={() => setShow(false)}
      ref={submenu}
      className={show ? 'alasvetoContainer show' : 'alasvetoContainer'}
    >
      <ul>
        <li>
          <Link to="omattarinat">Omat matkat</Link>
        </li>
        <li>
          <Link to="omattiedot">Omat tiedot</Link>
        </li>
        <li>
          <Link to="jasenet">Jäsenet</Link>
        </li>
        <li>
          <Link to="kirjauduulos">Kirjaudu ulos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Submenu;
