import React, { useLayoutEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import lataus from '../../assets/lataus.png';
import SERVER_URL from '../../utils/serverUrl';

//kovakoodattu img
import profileImg from '../../assets/testimg.jpeg';

const MobileNav = ({ closeNav, navRef, display }) => {
  const userID = useSelector((state) => state.auth.kayttaja?.id);
  const user = useSelector((state) => state.auth.kayttaja);
  const isLoading = useSelector((state) => state.auth.refreshTokenFetch);
  const img = useSelector((state) => state.auth.kayttaja?.kuva);



  const profiilikuva = img
    ? `${SERVER_URL}/img/${img}`
    : lataus;




  return (

    <Wrapper
      style={{
        display: display ? 'block' : 'none',
      }}
    >
      {!isLoading && (
        <div ref={navRef} className={`mobileNavContainer animateIN`}>
          <div onClick={closeNav} className='helper'></div>
          <div className='links'>
            <ul>
              {user !== null && (
                <div className='user'>
                  <img src={profiilikuva} alt='Profiilikuva' />
                  <h2>{user.etunimi}</h2>
                </div>
              )}
              <li>
                <Link to='/'>
                  <button onClick={closeNav}>Etusivu</button>
                </Link>
              </li>
              <li>
                <Link to='matkakohteet'>
                  <button onClick={closeNav}>Matkakohteet</button>
                </Link>
              </li>
              {user && (
                <div>
                  <ul>
                    <li>
                      <Link to='tarinat'>
                        <button onClick={() => closeNav(false)}>Porukan Tarinat</button>
                      </Link>
                    </li>
                    <li>
                      <Link to='lisaatarina'>
                        <button onClick={closeNav}>Lisää tarina</button>
                      </Link>
                    </li>
                    <li>
                      <Link to='omattarinat'>
                        <button onClick={closeNav}>Omat tarinat</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`jasenet/${userID}`}>
                        <button onClick={closeNav}>Omat tiedot</button>
                      </Link>
                    </li>
                    <li>
                      <Link to='jasenet'>
                        <button onClick={closeNav}>Jäsenet</button>
                      </Link>
                    </li>

                  </ul>
                  
                  <button onClick={closeNav} className='logout'>
                    <Link to='kirjauduulos'>Kirjaudu ulos</Link>
                  </button>
                </div>
              )}
              {!isLoading && !user && (
                <button onClick={closeNav} className='login'>
                  <Link to='kirjaudu'>Kirjaudu sisään</Link>
                </button>
              )}
            </ul>
          </div>
        </div>
      )}
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
  .login {
    position: relative;
    top: 65vh;
    background: red;
    margin-bottom: 30px;
  }
  .logout {
    position: relative;
    top: 20vh;
    background: red;
    margin-bottom: 30px;
  }
`;

export default MobileNav;
