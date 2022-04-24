import { Link } from 'react-router-dom';
import React from 'react';
import './TarinaKortti.css';
import { AiOutlineRead } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import capitalizeString from '../../utils/capitalizeString';

const TarinaKortti = ({
  matkaaja,
  createdAt,
  teksti,
  id,
  otsikko,
  numero,
  lukukertoja,
}) => {
  return (
    <Link to={`/tarinat/${id}`}>
      <div style={{ backgroundColor: '#FFF' }} className='korttipohja'>
        <div className='divotsikko'>
          <h1>
            {capitalizeString(otsikko.slice(0, 25))}
            {otsikko.length > 20 && ' ...'}
          </h1>
        </div>
        <div className='divteksti'>
          <p>
            {capitalizeString(teksti.slice(0, 150))}
            {teksti.length > 150 && ' ...'}
          </p>
        </div>
        <div className='divtietoja'>
          <div className='divlukenut'>
            <AiOutlineRead />
            <h5>{lukukertoja.length}</h5>
            <div className='pvmdiv'>
              <MdDateRange />
              <h5>{createdAt}</h5>
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
