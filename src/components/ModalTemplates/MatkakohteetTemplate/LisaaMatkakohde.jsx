import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../ResuableComponents/Button';
import Input from '../../ResuableComponents/Input';
import { toast } from 'react-toastify';
import { postMatkakohde } from '../../../Redux/Actions/matkakohdeActions';
import { useDispatch, useSelector } from 'react-redux';

const LisaaMatkakohde = () => {
  const [kuvat, setKuvat] = useState([]);
  const [matkakohde, setMatkakohde] = useState('');
  const [maa, setMaa] = useState('');
  const [paikkakunta, setPaikkakunta] = useState('');
  const [matkanKuvaus, setKuvaus] = useState('');

  const dispath = useDispatch();
  const axios = useAxiosPrivate();
  const fetching = useSelector((state) => state.matkakohteet.fetchingRequest);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispath(
      postMatkakohde(
        { kuvat, matkakohde, maa, paikkakunta, matkanKuvaus },
        toast,
        axios
      )
    );
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <Input
            placeholder="Matkakohde"
            value={matkakohde}
            onChange={setMatkakohde}
            id="matkannimiinput"
          />
        </div>
        <div className="input-50-container">
          <div className="input-50">
            <Input
              placeholder="Paikkakunta"
              value={paikkakunta}
              onChange={setPaikkakunta}
              id="paikkakuntainput"
            />
          </div>
          <div className="input-50">
            <Input
              placeholder="Maa"
              value={maa}
              onChange={setMaa}
              id="maainput"
            />
          </div>
        </div>
        <div className="input">
          <textarea
            placeholder="Matkakohteen kuvaus"
            value={matkanKuvaus}
            onChange={(e) => setKuvaus(e.target.value)}
            id="matkankuvausinput"
          />
        </div>
        <div className="bottom-input-container">
          <label className="file-label">
            <input
              type="file"
              onChange={(e) => setKuvat(e.target.files)}
              accept=".jpg, .jpeg, .png"
            />
            Lisää kuva
          </label>
          <h3>{kuvat[0]?.name}</h3>
        </div>
        <div className="tallennaBtnContainer">
          <Button disabled={fetching} type="submit" styles={{ width: '100%' }}>
            Lisää
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 100%; */
  margin: 10px;
  /* background-color: red; */
  .input-50-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 8px;
  }
  .input-50 {
    width: 48%;
    min-width: 150px;
    display: inline-block;
  }
  .input {
    width: 100%;
    margin: auto;
    margin-top: 8px;
    textarea {
      width: 100%;
      min-height: 250px;
      font-size: var(--font-small);
      font-family: inherit;
      padding: 5px 15px;
      border-radius: 5px;
      border: none;
      background: var(--clr-grey);
    }
  }
  .bottom-input-container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    h3 {
      margin-left: 20px;
      max-width: 500px;
    }
  }
  .file-label {
    cursor: pointer;
    font-size: var(--font-small);
    font-family: inherit;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    background: var(--clr-grey);
    input {
      display: none;
    }
  }
  .tallennaBtnContainer {
    width: 50%;
    min-width: 100px;
    margin: auto;
    margin-top: 20px;
  }
  @media only screen and (max-width: 375px) {
    .input-50-container {
      margin: 0;
      .input-50 {
        margin-top: 8px;
        width: 100%;
      }
    }
  }
`;

export default LisaaMatkakohde;
