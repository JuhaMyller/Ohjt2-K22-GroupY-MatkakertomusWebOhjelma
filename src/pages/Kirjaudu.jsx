import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { axiosPrivate } from '../api/Axios';
import Input from '../components/ResuableComponents/Input';
import Button from '../components/ResuableComponents/Button';
import { Link } from 'react-router-dom';
import kirjaudubg from '../assets/kirjaudubg.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import * as actions from '../Redux/Actions/authActions';
import { toast } from 'react-toastify';
import { FaBeer } from 'react-icons/fa';


const Kirjaudu = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const auth = useSelector((state) => state.auth);
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (auth.kayttaja) navigate('/', { replace: true });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: actions.KIRJAUDU_SPOSTI_ALOITUS });
      const response = await axiosPrivate.post('/api/user/login', {
        salasana: password,
        sposti: username,
      });
      dispatch({
        type: actions.KIRJAUDU_SPOSTI_ONNISTUI,
        payload: {
          user: response.data.user,
          accessToken: response.data.accessToken,
        },
      });
      navigate(from, { replace: true });
    } catch (error) {
      console.log('err');
      if (error.response?.status === 400)
        toast.error('Sähköposti tai salasana on virheellinen', {
          position: 'top-center',
          duration: 3000,
        });
      dispatch({ type: actions.KIRJAUDU_SPOSTI_EPAONNISTUI });
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <form onSubmit={handleLogin}>
          <h3>Kirjaudu</h3>

          <Input
          
            className="username"
            type="text"
            id="username"
            value={username}
            onChange={setUsername}
            placeholder="Sähköposti"
            styles={{
              background: 'white'
            }}
          />
            
          <Input
            type="password"
            id="password"
            value={password}
            onChange={setPassword}
            placeholder="Salasana"
            styles={{
              background: "white"
            }}
          />

          <p>
            Eikö sinulla ole käyttäjää?{' '}
            <Link to="/rekisteroidy" className="link">
              Rekisteröidy
            </Link>
          </p>
          <Button
            disabled={auth.fetching}
            type="submit"
            className="Kirjaudu"
            styles={{ background: '#fa7171' }}
          >
            Kirjaudu
          </Button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${kirjaudubg});
  background-size: cover;
  background-position: center top;
  width: 100vw;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 500px;
    background: #ecebeb;
    text-align: center;
    margin-bottom: 20vh;
    padding: 40px;
    box-shadow: 3px 3px 3px #7a7474;
    margin-left: 5px;
    margin-right: 5px;
  }
  .container h3 {
    margin-bottom: 20px;
  }
  .icon {
    position: absolute;
  }

  .container Input,
  .container p {
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .link {
    color: blue;
  }
 
  
  @media screen and (max-width: 520px) {
    .container {
      padding-left: 5px;
      padding-right: 5px;
      box-shadow: none;
    }
  }
`;

export default Kirjaudu;
