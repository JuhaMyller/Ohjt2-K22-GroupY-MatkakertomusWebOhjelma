import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../ResuableComponents/Button';
import Input from '../../ResuableComponents/Input';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import ImageMuokkaus from '../../TarinaSivu/ImageMuokkaus';
import SERVER_URL from '../../../utils/serverUrl';
import { useModalContext } from '../../ResuableComponents/Modal/ModalContext';

const MuokkaaTarinaa = (props) => {
  const [matkakohdeNimi, setMatkakohdeNimi] = useState(
    props.tarina.matkakohde.kohdenimi
  );
  const [fetch, setfetch] = useState(false);
  const [kuvat, setKuvat] = useState([]);
  const [imgUrls, setImgUrls] = useState(props.imgUrls);
  const [otsikko, setOtsikko] = useState(props.tarina.otsikko);
  const [teksti, setTeksti] = useState(props.tarina.teksti);
  const [kuvatOb, setKuvatOb] = useState([]);
  const axios = useAxiosPrivate();
  const { closeModal } = useModalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setfetch(true);
    try {
      const vanhatKuvat = imgUrls.map((k) => {
        return k.replace(SERVER_URL + '/img/', '');
      });

      const formData = new FormData();
      formData.append('otsikko', otsikko);
      formData.append('teksti', teksti);
      formData.append('vanhatkuvat', vanhatKuvat);
      kuvatOb.map((kuva) => formData.append('kuva', kuva));

      const response = await axios.put(
        'api/tarina/tarina/' + props.id,
        formData
      );

      if (response.status === 200) {
        props.setTarina((prev) => {
          return {
            ...response.data.tarina,
            matkaaja: { ...prev.matkaaja },
            matkakohde: { ...prev.matkakohde },
          };
        });
        closeModal();
        setfetch(false);
      }
    } catch (error) {
      console.log(error.response.data);
      setfetch(false);
    }
  };

  return (
    <Wrapper style={{ padding: '20px' }}>
      <>
        <form onSubmit={handleSubmit}>
          <div className='input-50-container'>
            <div className='input'>
              <Input
                readOnly={true}
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
              imgUrls={imgUrls}
              setImgUrls={setImgUrls}
            />
          </div>
          <div className='bottom-input-container'>
            <h3>{kuvat[0]?.name}</h3>
          </div>
          <div className='tallennaBtnContainer'>
            <Button
              type='submit'
              disabled={fetch}
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
