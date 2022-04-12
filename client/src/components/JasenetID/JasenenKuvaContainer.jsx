import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsFillChatRightQuoteFill } from 'react-icons/bs';
import formatDate from '../../utils/formatedDate';

const JasenenKuvaContainer = ({ tarinoita, createdAt, nimi, kuva }) => {
  return (
    <Wrapper>
      <div className="imgContainer">
        <img src={kuva} alt="" />
      </div>
      <div className="kuvatiedot">
        <h2>{nimi}</h2>
        <div className="tarinatJaKalenteri">
          <div className="tarinatJaKalenteri-item">
            <FaCalendarAlt />
            <p>{formatDate(createdAt)}</p>
          </div>
          <div className="tarinatJaKalenteri-item">
            <BsFillChatRightQuoteFill />
            <p>{tarinoita}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  .kuvatiedot {
    text-align: center;
    width: fit-content;
    margin: auto;
    h2 {
      margin-top: 20px;
      font-size: var(--font-medium);
    }
    .tarinatJaKalenteri {
      display: flex;
      justify-content: center;
      .tarinatJaKalenteri-item {
        display: flex;
        align-items: center;
        margin: 10px 20px;
        p {
          margin-left: 5px;
        }
      }
    }
  }

  .imgContainer {
    width: fit-content;
    margin: auto;
    img {
      max-width: 250px;
      aspect-ratio: 1/1;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      margin: auto;
    }
  }
`;

export default JasenenKuvaContainer;
