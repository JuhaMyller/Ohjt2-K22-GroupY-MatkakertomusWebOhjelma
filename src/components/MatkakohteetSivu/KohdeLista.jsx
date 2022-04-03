import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Kohdekortti.css';
import Kohdekortti from './Kohdekortti';
import Input from '../ResuableComponents/Input';
import Button from '../ResuableComponents/Button';
import axios from '../../api/Axios';
import { useModalContext } from '../ResuableComponents/Modal/ModalContext';
import MatkakohteetTemplate from '../ModalTemplates/MatkakohteetTemplate/MatkakohteetTemplate';

const KohdeLista = () => {
  const [mkohteet, setMkohteet] = useState([]);
  const [etsi, setEtsi] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const { openModal } = useModalContext();

  const getMatkakohteet = async () => {
    const response = await axios.get('/api/matkakohde/matkakohteet');
    setMkohteet(response.data.matkakohteet);
    setFilteredData(response.data.matkakohteet);
  };

  useEffect(() => {
    getMatkakohteet();
  }, []);

  const filter = () => {
    if (etsi !== '') {
      const results = mkohteet.filter((matkakohde) => {
        return matkakohde.kohdenimi
          .toLowerCase()
          .startsWith(etsi.toLowerCase());
      });
      setFilteredData(results);
    } else {
      setFilteredData(mkohteet);
    }
    setEtsi(etsi);
  };

  return (
    <div>
      <div>
        <div className="buttonJaInput">
          <div className="input-container">
            <Input
              className="etsi"
              type="text"
              id="etsi"
              value={etsi}
              onChange={setEtsi}
              placeholder="Etsi"
              styles={{
                marginTop: '10px',
                marginBottom: '10px',
                float: 'left',
                width: '50%',
                marginLeft: '100px',
              }}
            />
            <Button
              styles={{
                marginLeft: '2px',
                float: 'left',
                marginTop: '10px',
                marginBottom: '10px',
              }}
              onClick={filter}
              className="button"
            >
              Etsi
            </Button>
          </div>
          <Button
            styles={{
              marginRight: '100px',
              marginTop: '10px',
              marginBottom: '10px',
            }}
            onClick={() =>
              openModal({
                template: <MatkakohteetTemplate mkohteet={mkohteet} />,
                title: 'Muokkaa matkakohteita',
              })
            }
          >
            Muokkaa
          </Button>
        </div>
      </div>
      <div>
        <div className="kohdekortti_lista">
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((matkakohde) => (
              <Kohdekortti
                tarinat={matkakohde.tarinat}
                kuva={`${process.env.REACT_APP_SERVER_URL}/img/${matkakohde.kuva}`}
                kohdenimi={matkakohde.kohdenimi.toUpperCase()}
                maa={matkakohde.maa}
                id={matkakohde._id}
                key={matkakohde._id}
              ></Kohdekortti>
            ))
          ) : (
            <h2>Haulla ei löytynyt mitään</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default KohdeLista;
