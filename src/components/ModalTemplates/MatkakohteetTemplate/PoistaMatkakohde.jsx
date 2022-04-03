import React, { useState } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import styled from 'styled-components';
import Button from '../../ResuableComponents/Button';
import Input from '../../ResuableComponents/Input';

const PoistaMatkakohde = ({ mkohteet }) => {
  const [matkakohteet, setMatkakohteet] = useState(() =>
    mkohteet.filter((kohde) => kohde.tarinat.length === 0)
  );
  const axios = useAxiosPrivate();

  const PoistaMatkakohde = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`/api/matkakohde/matkakohde/${id}`);
    } catch (error) {}
  };

  return (
    <Wrapper>
      <form>
        <div className="PoistaMatkaContainer">
          <div className="grid-layout">
            <h3>Matkakohde</h3>
            <div className="displayNone">
              <h3>Kaupunki</h3>
            </div>
            <div className="displayNone">
              <h3>Maa</h3>
            </div>
          </div>
          {matkakohteet.map((kohde) => {
            return (
              <div key={kohde._id} className="PoistaMatkaCard">
                <div className="grid-layout">
                  <h3>{kohde.kohdenimi}</h3>
                  <div className="displayNone">
                    <h3>{kohde.paikkakunta}</h3>
                  </div>
                  <div className="displayNone">
                    <h3>{kohde.maa}</h3>
                  </div>
                </div>
                <div className="deleteMatkaBtn">
                  <Button
                    type="submit"
                    onClick={(e) => PoistaMatkakohde(e, kohde._id)}
                    styles={{ background: 'red', color: 'white' }}
                  >
                    Poista
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  .PoistaMatkaContainer {
    width: 95%;
    margin: auto;
    min-height: 100px;
    .grid-layout {
      display: grid;
      width: 80%;
      grid-template-columns: 1.5fr 1fr 1fr;
    }
    .PoistaMatkaCard {
      border-radius: 5px;
      width: 100%;
      height: 50px;
      margin-top: 8px;
      background-color: #edf2f4;
      padding: 10px;
      display: flex;
      align-items: center;

      h3 {
        text-transform: capitalize;
        display: inline-block;

        font-weight: 400;
      }
    }
    .deleteMatkaBtn {
      width: 20%;
      display: flex;
      justify-content: flex-end;
    }
  }
  @media only screen and (max-width: 600px) {
    .displayNone {
      display: none;
    }
  }
`;

export default PoistaMatkakohde;
