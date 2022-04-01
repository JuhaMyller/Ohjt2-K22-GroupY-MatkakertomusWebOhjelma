import { Link } from 'react-router-dom';
import React from 'react';
import './TarinaKortti.css';
import { AiOutlineRead } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

const TarinaKortti = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veniam totam veritatis fuga. Labore inventore animi, odit distinctio aliquid commodi accusamus deleniti rem consequuntur ipsam provident atque voluptates. Dolore, autem.';

  const showtext = text.slice(0, 100) + '...';

  return (
    <Link to={''}>
      <div className='korttipohja'>
        <div className='divotsikko'>
          <h1>Pokon matka</h1>
        </div>
        <div className='divteksti'>
          <p>{showtext}</p>
        </div>
        <div className='divtietoja'>
          <div className='divlukenut'>
            <AiOutlineRead />
            <h5>14</h5>
          </div>
          <div className='divpvm'>
            <MdDateRange />
            <h5>31.03.2022</h5>
          </div>
          <div className='divhenkilo'>
            <AiOutlineUser />
            <h5>Eki Poko</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TarinaKortti;
