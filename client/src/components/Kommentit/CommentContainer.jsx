import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SingleComment from './SingleComment';
import LeaveAComment from './LeaveAComment';
import { FaComments } from 'react-icons/fa';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const CommentContainer = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [fetching, setFetching] = useState(true);

  const axios = useAxiosPrivate();

  const getComments = async () => {
    try {
      setFetching(true);
      const response = await axios.get('/api/kommentit/tarina/' + id);
      if (response.status === 200) {
        setComments(response.data.kommentit);
        setFetching(false);
      }
    } catch (error) {
      setFetching(false);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <Wrapper>
      <div className="banner">
        <p>
          <FaComments /> {comments.length}
        </p>
        {/* <div className="kuvaJaNimi">
          <img src={img} alt="" />
          <p>@MarekPuu</p>
        </div> */}
      </div>

      {comments.length === 0 ? (
        <h5>Ei vielä kommenteja</h5>
      ) : (
        comments.map((comment) => {
          return (
            <SingleComment
              key={comment._id}
              createdAt={comment.createdAt}
              teksti={comment.teksti}
              kuva={comment.kirjoittaja.kuva}
              kirjoittaja={comment.kirjoittaja}
            />
          );
        })
      )}

      <LeaveAComment id={id} getComments={getComments} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: 50px auto;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 15px 2px #888888;
  h5 {
    padding: 10px;
  }
  .banner {
    height: 50px;
    background: #c7c5c7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin: 0 20px;
    }
  }
  .kuvaJaNimi {
    display: flex;
    align-items: center;
    p {
      margin: 0 10px 0 5px;
    }
    img {
      border-radius: 50%;
      height: 30px;
      aspect-ratio: 1/1;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export default CommentContainer;
