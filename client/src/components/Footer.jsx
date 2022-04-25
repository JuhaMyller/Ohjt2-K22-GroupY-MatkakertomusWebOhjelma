import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/Kuopionkulkijat.png';
import { Link } from 'react-router-dom';
import Input from './ResuableComponents/Input';
import Button from './ResuableComponents/Button';
import { useSelector } from 'react-redux';

const Footer = () => {
  const [sposti, setSposti] = useState('');
  const [submit, setSubmit] = useState(false);
  const user = useSelector((state) => state.auth.kayttaja);

  const handleSubmit = () => {
    if (!sposti) return;
    setSubmit(true);
    return setSposti('');
  };

  useEffect(() => {
    if (!submit) return;
    const timeout = setTimeout(() => {
      setSubmit(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [submit]);

  return (
    <Wrapper>
      <div className="wrapper">
        <div className="logo">
          <div className="title">
            <h1>Kuopion Kulkijat</h1>
          </div>
          <div className="imgContainer">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="links">
          <h1>Linkit</h1>
          <div className="links-wrapper">
            <ul>
              <li>
                <Link to="/">Etusivu</Link>
              </li>
              <li>
                <Link to="matkakohteet">Matkakohteet</Link>
              </li>
              <li>
                <Link to="tarinat">Porukan Tarinat</Link>
              </li>
              <li>
                <Link to="jasenet">Jäsenet</Link>
              </li>
            </ul>
            {user && (
              <ul>
                <li>
                  <Link to="lisaatarina">Lisää tarina</Link>
                </li>
                <li>
                  <Link to="omattarinat">Omat matkat</Link>
                </li>
                <li>
                  <Link to={`jasenet/${user.id}`}>Omat tiedot</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="inputContainer">
          <h1>Tilaa uutiskirjeemme</h1>
          <div className="input">
            <Input
              styles={{ border: submit && '3px solid green' }}
              value={sposti}
              onChange={setSposti}
              id="spostiFooterInput"
            />
          </div>
          <div className="btn">
            <Button disabled={sposti.length === 0} onClick={handleSubmit}>
              Tilaa
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin-top: 50px;
  background: black;
  width: 100%;
  padding: 20px;

  .wrapper {
    max-width: 1440px;
    width: 90%;
    margin: auto;
    color: white;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .logo {
      padding: 20px;
      margin: auto;
      h1 {
        font-weight: 500;
        font-size: 36px;
        margin-bottom: 20px;
        text-align: center;
      }
      .imgContainer {
        background: white;
        width: 150px;
        margin: auto;
        img {
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
          object-position: center;
        }
      }
    }
    .links {
      padding: 20px;
      margin: auto;
      .links-wrapper {
        display: flex;
        ul {
          margin-right: 10px;
        }
      }
      h1 {
        font-size: 24px;
        margin-bottom: 15px;
        border-bottom: 1px solid white;
        width: fit-content;
        padding: 0 5px 0 0;
      }
      ul {
        padding: 0 10px;
      }
      li {
        margin-bottom: 10px;
        a {
          white-space: nowrap;
          font-size: 24px;
          cursor: pointer;
          :hover {
            border-bottom: 1px solid white;
          }
        }
      }
    }
    .inputContainer {
      margin: auto;
      padding: 20px;
      min-width: 200px;
      max-width: 500px;
      width: 100%;
      h1 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 10px;
        margin-left: 5%;
      }
      .input {
        width: 90%;
        margin: auto;
      }
      .btn {
        margin: 20px auto;
        width: fit-content;
      }
    }
  }
`;

export default Footer;
