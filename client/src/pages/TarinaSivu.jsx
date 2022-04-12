import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineRead } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import ImageContainer from '../components/ResuableComponents/ImageContainer';
import img from '../assets/TarinaTestiKuva.png';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useParams } from 'react-router-dom';
import SERVER_URL from '../utils/serverUrl';
import formatDate from '../utils/formatedDate';

const TarinaSivu = () => {
  const [imgUrls, setImgUrls] = useState([]);
  const [tarina, setTarina] = useState([]);
  const axios = useAxiosPrivate();
  const { id } = useParams();

  const haeTarina = async () => {
    const responseTarina = await axios.get('/api/tarina/tarina/' + id);

    setImgUrls(() => {
      return responseTarina.data.tarina.kuva.map((t) => {
        return SERVER_URL + '/img/' + t;
      });
    });

    setTarina(responseTarina.data.tarina);
    console.log(responseTarina.data.tarina);
  };
  useEffect(() => {
    haeTarina();
  }, []);

  console.log(tarina);

  return (
    <Wrapper>
      <div className="wrapper">
        <div className="kuva_kayttajaWrap">
          <div className="kuva-container">
            <ImageContainer imgUrls={imgUrls || []} />
          </div>
          <div className="kayttajaKuvaContainer">
            <img
              className="kayttajaKuva"
              src={
                tarina?.matkaaja?.kuva
                  ? `${SERVER_URL}/img/${tarina.matkaaja.kuva}`
                  : img
              }
              alt="Kuva ei toimi"
            />
          </div>
          <div className="kayttaja">
            <h3>{`${tarina?.matkaaja?.etunimi} ${tarina?.matkaaja?.sukunimi}`}</h3>
          </div>
          <div className="tiedot">
            <MdDateRange className="paivaIcon" />
            <p>{formatDate(tarina?.createdAt)}</p>
            <AiOutlineRead className="lukenutIcon" />
            <p>{tarina?.lukukertoja?.length}</p>
          </div>
        </div>
        <div className="tarina-container">
          <h1 className="otsikko">{tarina?.otsikko}</h1>
          <p>{tarina?.teksti}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  .kayttaja {
    text-align: center;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    flex-wrap: wrap-reverse;
  }

  .otsikko {
    margin-top: 50px;
    text-align: center;
    margin-bottom: 10px;
  }
  .tarina-container {
    flex: 1 1 300px;
    text-align: center;
    padding: 0 10px;
    margin-left: 10px;
    min-width: 300px;
    max-width: 700px;
    margin: 0 auto;
  }

  .kuva_kayttajaWrap {
    max-width: 400px;
    min-width: 250px;
    margin-top: 8px;
    width: 90%;
  }
  .kuva-container {
    margin: auto;
    margin-top: 50px;
    max-width: 350px;
    min-width: 280px;
  }

  .kayttajaKuvaContainer {
    width: fit-content;
    margin: 20px auto;
  }

  .kayttajaKuva {
    margin-top: 10px;
    margin: auto;
    border-radius: 50%;
    display: flex;
    min-width: 150px;
    max-width: 150px;
  }
  .tiedot {
    width: fit-content;
    margin: auto;
    align-items: center;
    display: flex;
  }
  .paivaIcon {
    margin-right: 5px;
  }
  .lukenutIcon {
    margin: 0 5px 0 20px;
  }
  @media screen and (max-width: 700px) {
    .kuva_kayttajaWrap {
      max-width: 400px;
      min-width: 250px;
      margin: auto;
      width: 90%;
      text-align: center;
    }
  }
`;

export default TarinaSivu;