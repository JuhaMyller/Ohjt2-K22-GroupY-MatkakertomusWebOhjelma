import React, { useEffect, useState } from 'react';
import TarinaTestiKuva from '../../assets/TarinaTestiKuva.png';
import styled from 'styled-components';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineRead } from 'react-icons/ai';
import Button from '../ResuableComponents/Button';

const JasenKortti = () => {
  const esittely =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestias totam eaque ratione atque? Fugiat id illo hic magni, culpa provident excepturi perspiciatis facilis nostrum ullam eaque facere, nemo eius.';
  return (
    <Wrapper>
      <div className='Jasenkorttipohja'>
        <div className='kuvadivi'>
          <h5>@Ekipoko</h5>
          <img src={TarinaTestiKuva} alt='' />
          <h4>Eero Niskanen</h4>
        </div>
        <div className='sisaltodivi'>
          <p>{esittely.slice(0, 80) + '...'}</p>
        </div>
        <div className='sisaltobuttondivi'>
          <Button>Profiili</Button>
        </div>
        <div className='alatiedot'>
          <div className='jasenpvmtiedot'>
            <MdDateRange size={15} />
            <p>14.4.2022</p>
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
    border-radius: 30px 30px 0 0;
    max-height: 370px;
    max-width: 300px;
  }
  .kuvadivi {
    padding-top: 10px;
    text-align: center;
    img {
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
