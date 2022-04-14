import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../ResuableComponents/Button';
import Input from '../../ResuableComponents/Input';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import ImageMuokkaus from '../../TarinaSivu/ImageMuokkaus';
import { useParams } from 'react-router-dom';

const MuokkaaTarinaa = (props) => {
  const [matkakohdeNimi, setMatkakohdeNimi] = useState(
    props.tarina.matkakohde.kohdenimi
  );
  const [edit, setEdit] = useState(false);
  const [kuvat, setKuvat] = useState([]);
  const [otsikko, setOtsikko] = useState(props.tarina.otsikko);
  const [teksti, setTeksti] = useState(props.tarina.teksti);
  const [kuvatOb, setKuvatOb] = useState([]);
  const axios = useAxiosPrivate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('otsikko', otsikko);
    formData.append('teksti', teksti);
    formData.append('kohdenimi', matkakohdeNimi);
    kuvat.map((kuva) => formData.append('kuva', kuva));
    console.log(formData);
    const response = await axios.put('api/tarina/tarina/' + id, formData);

    setEdit(false);
  };

  return (
    <Wrapper style={edit ? { margin: '10px' } : { padding: '20px' }}>
      <>
        <form onSubmit={handleSubmit}>
          <div className='input-50-container'>
            <div className='input'>
              <Input
                placeholder='Matkakohde'
                value={matkakohdeNimi}
                onChange={setMatkakohdeNimi}
                id='tarinaMatkakohdeInput'
              />
            </div>
            <div className='input'>
              <Input
                placeholder='Otsikko'
                value={otsikko}
                onChange={setOtsikko}
                id='tarinaOtsikkoInput'
              />
            </div>
          </div>
          <div className='input-50-container'></div>
          <div className='input'>
            <textarea
              placeholder='Tarina'
              value={teksti}
              onChange={(e) => setTeksti(e.target.value)}
              id='matkankuvausinput'
            />
          </div>
          <div className='kuva-container'>
            <ImageMuokkaus
              kuvatOb={kuvatOb}
              setKuvatOb={setKuvatOb}
              imgUrls={props.imgUrls}
              setImgUrls={props.setImgUrls}
            />
          </div>
          <div className='bottom-input-container'>
            <h3>{kuvat[0]?.name}</h3>
          </div>
          <div className='tallennaBtnContainer'>
            <Button
              type='submit'
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

export default MuokkaaTarinaa;
