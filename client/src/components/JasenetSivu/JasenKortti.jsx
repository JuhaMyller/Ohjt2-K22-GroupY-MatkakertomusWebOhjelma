import React, { useEffect, useState } from 'react';
import TarinaTestiKuva from '../../assets/TarinaTestiKuva.png';
import styled from 'styled-components';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineRead } from 'react-icons/ai';
import Button from '../ResuableComponents/Button';
import formatedDate from '../../utils/formatedDate';
import SERVER_URL from '../../utils/serverUrl';
import userimage from '../../assets/lataus.png';
import { Link } from 'react-router-dom';

const JasenKortti = ({
  etunimi,
  sukunimi,
  esittely,
  kuva,
  nimimerkki,
  createdAt,
  id,
}) => {
  const imag = SERVER_URL + '/img/' + kuva;
  return (
    <Wrapper>
      <div className='Jasenkorttipohja'>
        <div className='kuvadivi'>
          <h5>@{nimimerkki}</h5>
          <img src={kuva ? imag : userimage} alt='' />
          <h4>
            {etunimi} {sukunimi}
          </h4>
        </div>
        <div className='sisaltodivi'>
          <p>
            {esittely
              ? esittely.slice(0, 50) + '...'
              : 'Käyttäjällä ei ole esittelyä'}
          </p>
        </div>
        <div className='sisaltobuttondivi'>
          <Link to={'/jasenet/' + id}>
            <Button>Profiili</Button>
          </Link>
        </div>
        <div className='alatiedot'>
          <div className='jasenpvmtiedot'>
            <MdDateRange size={15} />
            <p>{formatedDate(createdAt)}</p>
          </div>
          <div className='jasentarinadivi'>
            <AiOutlineRead size={15} />
            <p>20</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Jasenkorttipohja {
    box-shadow: 2px 1px 15px 2px #888888;
    border-radius: 30px 30px 30px 30px;
    max-height: 370px;
    max-width: 300px;
  }
  .kuvadivi {
    padding-top: 10px;
    text-align: center;
    img {
      object-fit: cover;
      object-position: center;
      aspect-ratio: 1/1;
      border-radius: 50%;
      max-height: 120px;
    }
    h5 {
      padding: 10px;
      font-size: 18px;
      font-weight: 500;
    }
    h4 {
      font-size: 20px;
    }
  }
  .sisaltodivi {
    p {
      font-weight: 500;
      font-size: 14px;
      padding: 10px;
      text-align: center;
    }
  }
  .sisaltobuttondivi {
    text-align: center;
    padding: 10px;
    margin-bottom: 10px;
  }
  .alatiedot {
    display: flex;
    font-size: 14px;
    justify-content: center;
    padding-bottom: 10px;
    background-color: #fa7171;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    padding-top: 20px;
    box-shadow: 2px 1px 15px 2px #888888;
  }
  .jasenpvmtiedot {
    display: flex;
    p {
      margin-top: -1px;
      margin-left: 5px;
    }
  }
  .jasentarinadivi {
    display: flex;
    margin-left: 50px;
    p {
      margin-top: -1px;
      margin-left: 5px;
    }
  }
`;

export default JasenKortti;
