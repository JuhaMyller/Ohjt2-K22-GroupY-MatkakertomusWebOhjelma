import axios from '../../../api/Axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../ResuableComponents/Button';
import Input from '../../ResuableComponents/Input';

const MuokkaaMatkakohdetta = ({ mkohteet }) => {
  const [matkakohteet, setMatkakohteet] = useState(mkohteet);
  const [edit, setEdit] = useState(false);

  const [editId, seteditID] = useState([]);
  const [kuvat, setKuvat] = useState([]);
  const [matkakohde, setMatkakohde] = useState('');
  const [maa, setMaa] = useState('');
  const [paikkakunta, setPaikkakunta] = useState('');
  const [matkanKuvaus, setKuvaus] = useState('');

  const handleButtonClick = (id) => {
    setEdit(true);

    const kohde = matkakohteet.find((kohde) => kohde._id === id);
    seteditID(id);
    setKuvat([kohde.kuvat]);
    setMatkakohde(kohde.kohdenimi);
    setMaa(kohde.maa);
    setPaikkakunta(kohde.paikkakunta);
    setKuvaus(kohde.kuvateksti);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put('api/matkakohde/matkakohteet', {
      kohdenimi: matkakohde,
      maa: maa,
      paikkakunta: paikkakunta,
      id: editId,
      kuvateksti: matkanKuvaus,
    });
    console.log(response);
    setEdit(false);
  };

  return (
    <Wrapper style={edit ? { margin: '10px' } : { padding: '20px' }}>
      {!edit && (
        <div className="MuokkaaMatkaContainer">
          <div className="grid-layout">
            <h3>Matkakohde</h3>
            <div className="displayNone">
              <h3>Kaupunki</h3>
            </div>
            <div className="displayNone">
              <h3>Maa</h3>
            </div>
          </div>
          {matkakohteet.map((kohde) => {
            return (
              <div key={kohde.id} className="MuokkaaMatkaCard">
                <div className="grid-layout">
                  <h3>{kohde.kohdenimi}</h3>
                  <div className="displayNone">
                    <h3>{kohde.paikkakunta}</h3>
                  </div>
                  <div className="displayNone">
                    <h3>{kohde.maa}</h3>
                  </div>
                </div>
                <div className="MuokkaaMatkaBtn">
                  <Button
                    type="submit"
                    onClick={() => handleButtonClick(kohde._id)}
                    styles={{ background: '#3d5a80', color: 'white' }}
                  >
                    Muokkaa
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {edit && (
        <>
          <Button
            onClick={() => setEdit(false)}
            styles={{ marginBottom: '10px', background: 'red', color: 'white' }}
          >
            Takaisin
          </Button>
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
              <Button
                type="submit"
                styles={{
                  width: '100%',
                  background: '#3d5a80',
                  color: 'white',
                }}
              >
                Muokkaa
              </Button>
            </div>
          </form>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

  .MuokkaaMatkaContainer {
    width: 95%;
    margin: auto;
    min-height: 100px;
    .grid-layout {
      display: grid;
      width: 80%;

      grid-template-columns: repeat(3, 1fr);
    }
    .MuokkaaMatkaCard {
      border-radius: 5px;
      width: 100%;
      height: 50px;
      margin-top: 8px;
      background-color: #edf2f4;
      padding: 10px;
      display: flex;
      align-items: center;

      h3 {
        text-transform: capitalize;
        display: inline-block;

        font-weight: 400;
      }
    }
    .MuokkaaMatkaBtn {
      width: 20%;
      display: flex;
      justify-content: flex-end;
    }
  }
  @media only screen and (max-width: 600px) {
    .displayNone {
      display: none;
    }
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

export default MuokkaaMatkakohdetta;
