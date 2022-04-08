import { Link } from 'react-router-dom';
import React from 'react';
import './TarinaKortti.css';
import { AiOutlineRead } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

const TarinaKortti = ({ matkaaja, alkupvm, teksti, id, otsikko }) => {
  const color = () => {
    let number = Math.floor(Math.random() * (4 + 1));
    let colorr;

    if (number === 0) {
      colorr = '#f8af7b';
    }

    if (number === 1) {
      colorr = '#86ceed';
    }

    if (number === 2) {
      colorr = '#8d99ff';
    }

    if (number === 3) {
      colorr = '#bbc28d';
    }

    if (number === 4) {
      colorr = '#fafa13';
    }

    return colorr;
  };

  return (
    <Link to={`/api/tarina/${id}`}>
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
