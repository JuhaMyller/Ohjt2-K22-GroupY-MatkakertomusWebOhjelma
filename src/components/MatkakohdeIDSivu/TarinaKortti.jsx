import { Link } from 'react-router-dom';
import React from 'react';
import './TarinaKortti.css';
import { AiOutlineRead } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

const TarinaKortti = ({ matkaaja, alkupvm, teksti, id, otsikko, numero }) => {
  const color = () => {
    let colorr;
    const number = numero % 5;

    if (number === 0) {
      colorr = '#ffef9f';
    }

    if (number === 1) {
      colorr = '#c1fba4';
    }

    if (number === 2) {
      colorr = '#ffd6e0';
    }

    if (number === 3) {
      colorr = '#7bf1a8';
    }

    if (number === 4) {
      colorr = '#90f1ef';
    }

    return colorr;
  };

  return (
    <Link to={`/tarinat/${id}`}>
      <div style={{ backgroundColor: color() }} className='korttipohja'>
        <div className='divotsikko'>
          <h1>
            {otsikko.slice(0, 25)}
            {otsikko.length > 20 && ' ...'}
          </h1>
        </div>
        <div className='divteksti'>
          <p>
            {teksti.slice(0, 150)}
            {teksti.length > 150 && ' ...'}
          </p>
        </div>
        <div className='divtietoja'>
          <div className='divlukenut'>
            <AiOutlineRead />
            <h5>14</h5>
            <div className='pvmdiv'>
              <MdDateRange />
              <h5>{alkupvm}</h5>
            </div>
          </div>

          <div className='divhenkilo'>
            <AiOutlineUser />
            <h5>{matkaaja}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TarinaKortti;
