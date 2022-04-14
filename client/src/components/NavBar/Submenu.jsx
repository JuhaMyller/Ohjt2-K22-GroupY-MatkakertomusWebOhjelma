import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Submenu = ({ setShow, submenu, show }) => {
  const userID = useSelector((state) => state.auth.kayttaja?.id);

  return (
    <div
      onClick={() => setShow(false)}
      ref={submenu}
      className={show ? 'alasvetoContainer show' : 'alasvetoContainer'}
    >
      <ul>
        <li>
          <Link to='lisaatarina'>Lisää tarina</Link>
        </li>
        <li>
          <Link to='omattarinat'>Omat matkat</Link>
        </li>
        <li>
          <Link to={`jasenet/${userID}`}>Omat tiedot</Link>
        </li>
        <li>
          <Link to='jasenet'>Jäsenet</Link>
        </li>
        <li>
          <Link to='kirjauduulos'>Kirjaudu ulos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Submenu;
