import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LisaaKuva from '../components/LisaaTarinaSivu/LisaaKuva';
import DateTimespanPicker from '../components/LisaaTarinaSivu/DateInput/DateTimespanPicker';
import PageInputsContainer from '../components/LisaaTarinaSivu/PageInputsContainer';
import { setDate } from '../components/LisaaTarinaSivu/DateInput/Utils';

const LisaaTarinaSivu = () => {
  const [imgArr, setImgArr] = useState([]);
  const [imgUrls, setImgUrls] = useState([]);
  const [tulopaiva, setTulopaiva] = useState(setDate());
  const [lahtopaiva, setLahtopaiva] = useState(setDate());
  const [otsikko, setOtsikko] = useState('');
  const [matkakohde, setMatkakohde] = useState('');
  const [tarina, setTarina] = useState('');

  //TODO:
  //MAKSIMI BYTE MÄÄRÄ KUVILLE! Liian isot kuvat lagaa
  //Maksimi määrä kuvia? 6/12
  //kalenteri ei tarvitse välttämättä sulkeutua kun on valittu lähtöpäivä
  //imgUrls state voidaan myös todennäiköisesti hoitaa itse LisaaKuva componentissa

  const onDateChange = (date, mode) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const newDate = new Date(year, month, day);
    if (mode === 'endDate') return setLahtopaiva(newDate);
    if (mode === 'startDate') setTulopaiva(newDate);

    if (newDate.getTime() > lahtopaiva.getTime()) setLahtopaiva(newDate);
  };

  useEffect(() => {
    if (imgArr.length < 1) return;
    const newImageURLs = [];
    imgArr.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImgUrls(newImageURLs);
  }, [imgArr]);

  const onImgChange = (e) => {
    setImgArr((curr) => [...curr, ...e.target.files]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //logiikka tähän tulee vasta kun backend saadaan toimimaan
    console.log('submit');
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <div className="lisaa-kuva-container">
        <LisaaKuva imgUrls={imgUrls} onImgChange={onImgChange} />
        <DateTimespanPicker
          onDateChange={onDateChange}
          startDate={tulopaiva}
          endDate={lahtopaiva}
        />
      </div>
      <div className="page-inputs-container">
        <PageInputsContainer
          otsikko={otsikko}
          setOtsikko={setOtsikko}
          setTarina={setTarina}
          tarina={tarina}
          matkakohde={matkakohde}
          setMatkakohde={setMatkakohde}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  max-width: 1440px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;

  .lisaa-kuva-container {
    width: 40%;
    min-width: 250px;
  }
  .page-inputs-container {
    width: 60%;
    height: fit-content;
  }
  @media only screen and (max-width: 875px) {
    .lisaa-kuva-container {
      width: 90%;
      min-height: fit-content;
    }
    .page-inputs-container {
      width: 90%;
      min-height: fit-content;
    }
  }
`;

export default LisaaTarinaSivu;
