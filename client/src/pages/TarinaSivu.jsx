import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineRead } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import ImageContainer from '../components/ResuableComponents/ImageContainer';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SERVER_URL from '../utils/serverUrl';
import formatDate from '../utils/formatedDate';
import Muokkaatarinaa from '../components/ModalTemplates/MuokkaatarinaaTemplate/MuokkaaTarinaa';
import Button from '../components/ResuableComponents/Button';
import { useModalContext } from '../components/ResuableComponents/Modal/ModalContext';
import noImg from '../assets/lataus.png';
import CommentContainer from '../components/Kommentit/CommentContainer';
import { toast } from 'react-toastify';

const TarinaSivu = () => {
  const [imgUrls, setImgUrls] = useState([]);
  const [tarina, setTarina] = useState({});
  const axios = useAxiosPrivate();
  const { id } = useParams();
  const { openModal } = useModalContext();
  const navigate = useNavigate();

  console.log(tarina);

  const poistaTarina = async () => {
    try {
      const deleteResponse = await axios.delete('/api/tarina/tarina/' + id);
      if (deleteResponse.status === 204) {
        if (window.history.state && window.history.state.idx > 0) {
          navigate(-1);
        } else {
          navigate('/matkakohteet', { replace: true });
        }
      }
    } catch (error) {
      toast.error(error.response.data.message, { position: 'top-center' });
    }
  };

  const haeTarina = async () => {
    try {
      const responseTarina = await axios.get('/api/tarina/tarina/' + id);

      setTarina(responseTarina.data.tarina);
    } catch (error) {}
  };
  useEffect(() => {
    haeTarina();
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  useEffect(() => {
    if (!tarina.kuva) return;
    console.log('useEffect');
    setImgUrls(() => {
      return tarina.kuva.map((t) => {
        return SERVER_URL + '/img/' + t;
      });
    });
  }, [tarina.kuva]);
  return (
    <Wrapper>
      <div className="buttonit">
        <div className="muokkaaButton">
          <Button
            onClick={() =>
              openModal({
                template: (
                  <Muokkaatarinaa
                    id={id}
                    tarina={tarina}
                    setTarina={setTarina}
                    imgUrls={imgUrls}
                    setImgUrls={setImgUrls}
                  />
                ),
                title: 'Muokkaa tarinaa',
              })
            }
          >
            Muokkaa
          </Button>
        </div>
        <div className="poistaButton">
          <Button onClick={poistaTarina}>Poista Tarina</Button>
        </div>
      </div>

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
                  : noImg
              }
              alt="Kuva ei toimi"
            />
          </div>
          <div className="kayttaja">
            <Link to={'/jasenet/' + tarina.matkaaja?._id}>
              <h3>{`${tarina?.matkaaja?.etunimi} ${tarina?.matkaaja?.sukunimi}`}</h3>
            </Link>
          </div>
          <div className="tiedot">
            <MdDateRange className="paivaIcon" />
            <p>{formatDate(tarina?.createdAt)}</p>
            <AiOutlineRead className="lukenutIcon" />
            <p>{tarina?.lukukertoja?.length}</p>
          </div>
          <CommentContainer />
        </div>
        <div className="tarina-container">
          <h1 className="otsikko">{tarina?.otsikko}</h1>
          <p>{tarina?.teksti}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
  .buttonit {
    display: flex;
    padding: 10px 20px;
    justify-content: end;
  }
  .muokkaaButton {
    margin-right: 5px;
  }
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
    text-align: left;
    padding: 0 30px;
    margin-left: 10px;
    min-width: 300px;
    max-width: 700px;
    margin: 0 auto;
  }

  .kuva_kayttajaWrap {
    max-width: 400px;
    min-width: 250px;
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
    max-width: 150px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
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
    .tarina-container {
      max-width: 80%;
    }
  }
`;

export default TarinaSivu;
