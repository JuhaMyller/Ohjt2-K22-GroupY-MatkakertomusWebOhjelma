import React, { useState, useEffect } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import styled from 'styled-components';
import Button from '../../ResuableComponents/Button';
import { toast } from 'react-toastify';
import { deleteMatkakohde } from '../../../Redux/Actions/matkakohdeActions';
import { useDispatch, useSelector } from 'react-redux';
import RequestTime from '../../../utils/getRequestTime';
import Loading from '../Loading/Loading';

const PoistaMatkakohde = () => {
  const [matkakohteet, setMatkakohteet] = useState([]);

  const fetching = useSelector((state) => state.matkakohteet.fetchingRequest);
  const mk = useSelector((state) => state.matkakohteet.Matkakohteet);
  const axios = useAxiosPrivate();
  const dispath = useDispatch();

  useEffect(() => {
    const ilmanTarinoita = mk.filter((kohde) => kohde.tarinat.length === 0);
    const tarinoilla = mk.filter((kohde) => kohde.tarinat.length !== 0);
    setMatkakohteet([...ilmanTarinoita, ...tarinoilla]);
  }, [mk]);

  const PoistaMatkakohde = async (e, id) => {
    e.preventDefault();
    dispath(deleteMatkakohde(id, axios, toast, RequestTime));
  };

  return (
    <Wrapper>
      {fetching ? (
        <Loading />
      ) : (
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
                      disabled={fetching || kohde.tarinat.length > 0}
                      type="submit"
                      onClick={(e) => PoistaMatkakohde(e, kohde._id)}
                      styles={
                        kohde.tarinat.length === 0
                          ? {
                              background: 'red',
                              color: 'white',
                            }
                          : {}
                      }
                    >
                      Poista
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </form>
      )}
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
