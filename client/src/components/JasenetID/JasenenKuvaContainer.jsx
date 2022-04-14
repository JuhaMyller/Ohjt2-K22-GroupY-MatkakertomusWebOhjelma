import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsFillChatRightQuoteFill, BsThreeDotsVertical } from 'react-icons/bs';
import formatDate from '../../utils/formatedDate';
import { useSelector } from 'react-redux';

import ProfiiliSubmenu from './ProfiiliSubmenu';

const JasenenKuvaContainer = ({ tarinoita, createdAt, nimi, kuva, id }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const omaProfiili = useSelector((state) => state.auth.kayttaja.id);
  return (
    <Wrapper>
      {omaProfiili === id && (
        <div className="reactIcons">
          <div className="icon">
            <BsThreeDotsVertical
              onClick={() => setOpenSubmenu((b) => !b)}
              size={20}
            />
          </div>
          <ProfiiliSubmenu setOpen={setOpenSubmenu} open={openSubmenu} />
        </div>
      )}
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
  .reactIcons {
    width: fit-content;
    margin: auto 10px auto auto;
    cursor: pointer;
    position: relative;
    .icon:hover {
      color: #fa7171;
    }
  }
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
  @media only screen and (max-width: 600px) {
    .reactIcons {
      margin: 10px auto;
      cursor: pointer;
      position: relative;
      :hover {
        color: #fa7171;
      }
    }
  }
`;

export default JasenenKuvaContainer;
