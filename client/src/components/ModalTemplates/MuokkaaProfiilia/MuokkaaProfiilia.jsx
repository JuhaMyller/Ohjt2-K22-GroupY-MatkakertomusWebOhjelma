import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../ResuableComponents/Input';
import Button from '../../ResuableComponents/Button';
import { useSelector, useDispatch } from 'react-redux';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import { MUOKKAA_TIETOJA_ONNISTUNEESTI } from '../../../Redux/Actions/authActions';
import { useModalContext } from '../../ResuableComponents/Modal/ModalContext';

const MuokkaaProfiilia = () => {
  const profiili = useSelector((state) => state.auth.kayttaja);
  const [etunimi, setEtunimi] = useState(profiili.etunimi);
  const [sukunimi, setSukunimi] = useState(profiili.sukunimi);
  const [paikkakunta, setPaikkakunta] = useState(profiili.paikkakunta || '');
  const [esittely, setEsittely] = useState(profiili.esittely || '');
  const [sposti, setSposti] = useState(profiili.sposti);
  const [fetching, setFetching] = useState(false);

  const { closeModal } = useModalContext();
  const axios = useAxiosPrivate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFetching(true);
    try {
      const response = await axios.put('api/user/editprofile', {
        etunimi,
        sukunimi,
        paikkakunta,
        esittely,
        sposti,
      });
      if (response.status === 200) {
        dispatch({
          type: MUOKKAA_TIETOJA_ONNISTUNEESTI,
          payload: response.data.user,
        });
        closeModal();
        setFetching(false);
      }
    } catch (error) {
      setFetching(false);
      toast.error(error.response.data.message, {
        position: 'top-center',
        duration: 1500,
      });
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        id="enimimodal"
        value={etunimi}
        onChange={setEtunimi}
        placeholder="Etunimi"
      />
      <Input
        id="snimimodal"
        value={sukunimi}
        onChange={setSukunimi}
        placeholder="Sukunimi"
      />
      <Input
        id="spostimodal"
        value={sposti}
        onChange={setSposti}
        placeholder="Sähköposti"
      />
      <input
        id="paikkakuntamodal"
        value={paikkakunta}
        onChange={(e) => setPaikkakunta(e.target.value)}
        placeholder="Paikkakunta"
      />
      <div className="textarea-container">
        <textarea
          id="lisaaTarinaTarina"
          value={esittely}
          onChange={(e) => setEsittely(e.target.value)}
          rows="20"
          cols="40"
          placeholder="Esittely"
        />
      </div>
      <div className="btn">
        <Button
          type="submit"
          disabled={fetching}
          styles={{ background: 'green', color: 'white' }}
        >
          Tallenna
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  input {
    margin-top: 5px;
    width: 100%;
    font-size: var(--font-small);
    font-family: inherit;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    background: var(--clr-grey);
  }
  input:-webkit-autofill {
    box-shadow: 0 0 0px 40px white inset;
    -webkit-text-fill-color: #696969;
  }

  .textarea-container {
    margin-top: 10px;
    textarea {
      width: 100%;
      font-size: var(--font-small);
      font-family: inherit;
      padding: 5px 15px;
      border-radius: 5px;
      border: none;
      background: var(--clr-grey);
      resize: none;
    }
  }
  .btn {
    width: fit-content;
    margin: 10px auto;
  }
`;

export default MuokkaaProfiilia;
