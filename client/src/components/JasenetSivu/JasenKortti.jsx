import React, { useEffect, useState } from 'react';
import TarinaTestiKuva from '../../assets/TarinaTestiKuva.png';
import styled from 'styled-components';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineRead } from 'react-icons/ai';

const JasenKortti = () => {
  const esittely =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestias totam eaque ratione atque? Fugiat id illo hic magni, culpa provident excepturi perspiciatis facilis nostrum ullam eaque facere, nemo eius.';
  return (
    <Wrapper>
      <div className='Jasenkortti'>
        <div className='kuvaDiv'>
          <img src={TarinaTestiKuva} alt='' />
        </div>
        <div className='JasenkorttiTiedot'>
          <div className='nimet'>
            <h6 className='nimi'>Marek Puurunendsad</h6>
            <p className='nimiMerkki'>@ Remmel</p>
          </div>
          <p className='esittely'>{esittely.slice(0, 80)}...</p>

          <div className='JasenkorttiPvm'>
            <div className='dateTarinat'>
              <MdDateRange size={15} />
              <p className='pvm'>21.04.2022</p>
            </div>
            <div className='dateTarinat'>
              <AiOutlineRead size={15} />
              <p>25</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  .Jasenkortti {
    :hover {
      transform: scale(0.95);
      .kuvaDiv img {
        transform: scale(1.05);
      }
    }
    color: #e8e2e2;
    width: 90%;
    display: flex;
    max-width: 450px;
    min-height: 150px;
    flex-wrap: wrap;
    margin: auto;
  }
  .kuvaDiv {
    background-color: #fa7171;
    border-radius: 50% 0 0 50%;
    height: 150px;

    img {
      height: 100%;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }
  }
  .JasenkorttiTiedot {
    height: 150px;
    background-color: #fa7171;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 0 175px;
  }
  .kuva {
    border-radius: 50%;
    width: 100%;
  }
  .nimiMerkki,
  .esittely {
    font-size: 14px;
  }
  .esittely {
    font-size: 12px;
    font-weight: 100;
    padding: 10px;
    text-align: center;
  }
  .nimet {
    padding-top: 10px;
    text-align: center;
  }
  .nimi {
    font-weight: 500;
    font-size: 20px;
  }
  .nimiMerkki {
    font-weight: 500;
    font-size: 14px;
  }
  .JasenkorttiPvm {
    p {
      font-weight: 400;
      font-size: 14px;
    }
    font-size: 15px;
    display: flex;
    width: fit-content;
    align-items: center;
    margin: auto;
  }

  .pvm {
    margin-bottom: -1px;
    margin-right: 20px;
  }
  .dateTarinat {
    p {
      margin-left: 5px;
    }
    display: flex;
    align-items: center;
  }

  @media (max-width: 440px) {
    .Jasenkortti {
      border-radius: 10px;
      overflow: hidden;
      height: fit-content;
    }
    .JasenkorttiPvm {
      margin-bottom: 10px;
    }
    .kuvaDiv {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      box-sizing: content-box;
      border-radius: 0;
      width: 100%;
      img {
        border-radius: 50%;
      }
    }
  }
`;

export default JasenKortti;
