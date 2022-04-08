import React, { useState } from 'react';
import styled from 'styled-components';
import rekisteröidybg from '../assets/rekisteröidybg.png';
import Input from '../components/ResuableComponents/Input';
import Button from '../components/ResuableComponents/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../Redux/Actions/authActions';
import { toast } from 'react-toastify';
import axios from '../api/Axios';

const Rekisteröidy = () => {
  const [etunimi, setEtunimi] = useState('');
  const [sukunimi, setSukunimi] = useState('');
  const [nimimerkki, setNimimerkki] = useState('');
  const [sahkoposti, setSahkoposti] = useState('');
  const [salasana, setSalasana] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetching = useSelector((state) => state.auth.fetching);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: actions.REKISTEROIDY_ALOITUS });
      const response = await axios.post('/api/user/register', {
        etunimi,
        sukunimi,
        sposti: sahkoposti,
        nimimerkki,
        salasana,
      });

      if (response.status === 201) {
        toast.success('Käyttäjä luotu', {
          position: 'top-center',
          duration: 3000,
        });
        navigate('/kirjaudu', { replace: true });
      }
    } catch (error) {
      const errors = error.response.data.message;
      errors.map((err) => {
        toast.error(err, { position: 'top-center', duration: 3000 });
      });
    } finally {
      dispatch({ type: actions.REKISTEROIDY_LOPETUS });
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h3>Rekisteröidy</h3>
          <Input
            className="etunimi"
            type="text"
            id="etunimi"
            value={etunimi}
            onChange={setEtunimi}
            placeholder="Etunimi"
            styles={{}}
          />
          <Input
            className="sukunimi"
            type="text"
            id="sukunimni"
            value={sukunimi}
            onChange={setSukunimi}
            placeholder="Sukunimi"
            styles={{}}
          />
          <Input
            className="nimimerkki"
            type="text"
            id="nimimerkki"
            value={nimimerkki}
            onChange={setNimimerkki}
            placeholder="Nimimerkki"
            styles={{}}
          />
          <Input
            className="sähköposti"
            type="text"
            id="sähköposti"
            value={sahkoposti}
            onChange={setSahkoposti}
            placeholder="Sähköposti"
            styles={{}}
          />
          <Input
            className="salasana"
            type="password"
            id="salasana"
            value={salasana}
            onChange={setSalasana}
            placeholder="Salasana"
            styles={{}}
          />
          <p>
            Minulla on jo käyttäjä?{' '}
            <Link to="/kirjaudu" className="link">
              Kirjaudu
            </Link>
          </p>
          <Button
            disabled={fetching}
            type="submit"
            className="Rekisteroidy"
            styles={{ background: '#fa7171' }}
          >
            Rekisteröidy
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${rekisteröidybg});
  background-size: cover;
  background-position: center top;
  width: 100%;
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: #ecebeb;
    width: 500px;
    text-align: center;
    margin-bottom: 20vh;
    padding: 50px;
    box-shadow: 3px 3px 3px #7a7474;
    margin-left: 5px;
    margin-right: 5px;
  }
  .container h3 {
    margin-bottom: 20px;
  }
  .container Input {
    background: white;
  }
  .container Input,
  .container p {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .link {
    color: blue;
  }
  @media screen and (max-width: 520px) {
    .container {
      padding-left: 5px;
      padding-right: 5px;
      box-shadow: none;
      width: 97vw;
    }
  }
`;

export default Rekisteröidy;
