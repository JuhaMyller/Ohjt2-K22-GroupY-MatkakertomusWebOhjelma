import './TarinaKortti.css';
import React, { useEffect, useState } from 'react';
import TarinaKortti from './TarinaKortti';
import axios from '../../api/Axios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import formatedDate from '../../utils/formatedDate';

const BASE_URL = 'https://ohjelmistotuotanto2.herokuapp.com';

const TarinaLista = ({ id }) => {
  const [tarinat, setTarinat] = useState([]);
  const [etsi, setEtsi] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [matkakohde, setMatkakohde] = useState([]);
  const [loadingMK, setLoadingMK] = useState(true);
  const axios = useAxiosPrivate();

  const getTarinat = async () => {
    try {
      const response = await axios.get('/api/tarina/matkakohteentarinat/' + id);

      setTarinat(response.data.tarinat);
    } catch (error) {
      console.error(error);
    }
  };

  const getMatkakohde = async () => {
    try {
      setLoadingMK(true);
      const responseMatkakohde = await axios.get(
        '/api/matkakohde/matkakohde/' + id
      );

      setMatkakohde(responseMatkakohde.data.matkakohteet);
    } finally {
      setLoadingMK(false);
    }
  };

  useEffect(() => {
    getMatkakohde();
    getTarinat();
  }, []);

  return (
    <>
      {loadingMK ? null : (
        <div className='divmatkakohde'>
          <h1>{matkakohde.kohdenimi}</h1>
          <h2>
            {matkakohde.paikkakunta}
            {`, ${matkakohde.maa}`}
          </h2>
          <div className='divkuva'>
            <img
              src={`${BASE_URL}/img/${matkakohde.kuva}`}
              alt={`Matkakohteen ${matkakohde.kohdenimi} kuva`}
            />
          </div>
        </div>
      )}
      <div className='divlista'>
        {tarinat.map((tarina) => (
          <TarinaKortti
            id={tarina._id}
            otsikko={tarina.otsikko}
            key={tarina._id}
            matkaaja={tarina.matkaaja.nimimerkki}
            alkupvm={formatedDate(tarina.alkupvm)}
            teksti={tarina.teksti}
          />
        ))}
      </div>
    </>
  );
};

export default TarinaLista;
