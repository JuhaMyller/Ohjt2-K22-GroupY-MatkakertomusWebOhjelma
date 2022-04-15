import React from 'react';
import styled from 'styled-components';
import img from '../../assets/lataus.png';
import { formatDateWithTime } from '../../utils/formatedDate';
import { Link } from 'react-router-dom';
import SERVER_URL from '../../utils/serverUrl';

const SingleComment = ({ kuva, teksti, kirjoittaja, createdAt }) => {
  const commentKuva = kuva ? `${SERVER_URL}/img/${kuva}` : img;

  return (
    <Wrapper>
      <div className="createdAt">
        <p>{formatDateWithTime(createdAt)}</p>
      </div>
      <div className="commentWrapper">
        <div className="kuva">
          <img src={commentKuva} alt="" />
        </div>
        <div className="comment">
          <p>
            <Link to={`/jasenet/${kirjoittaja._id}`}>
              <span>@{kirjoittaja.nimimerkki}</span>
            </Link>
            {teksti}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .createdAt {
    width: fit-content;
    margin: 5px 0 -5px 20px;
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
  .commentWrapper {
    width: 95%;
    display: flex;
    align-items: center;
    margin: 5px auto;
    background-color: #eae8ea;
    min-height: 40px;
    border-radius: 15px;
  }
  .comment {
    padding: 5px 0;
    margin: 0 10px;
    display: flex;
    p {
      word-break: break-word;
      white-space: normal;
    }
    span {
      font-size: 14px;
      font-weight: 700;
      margin-right: 5px;
    }
  }
  .kuva {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      margin: 0 0 0 5px;
      border-radius: 50%;
      height: 30px;
      aspect-ratio: 1/1;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export default SingleComment;
