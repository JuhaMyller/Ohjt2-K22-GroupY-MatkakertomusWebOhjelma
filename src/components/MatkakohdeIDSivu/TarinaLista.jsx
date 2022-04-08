import './TarinaKortti.css';
import React, { useEffect, useState } from 'react';
import TarinaKortti from './TarinaKortti';
import axios from '../../api/Axios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import formatedDate from '../../utils/formatedDate';

const TarinaLista = ({ id }) => {
  const [tarinat, setTarinat] = useState([]);
  const [etsi, setEtsi] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const axios = useAxiosPrivate();

  const getTarinat = async () => {
    const response = await axios.get('/api/tarina/matkakohteentarinat/' + id);

    console.log(response.data);
    setTarinat(response.data.tarinat);
  };

  useEffect(() => {
    getTarinat();
  }, []);

  return (
    <div className='divlista'>
      {tarinat.map((tarina) => (
        <TarinaKortti
          otsikko={tarina.otsikko}
          key={tarina._id}
          matkaaja={tarina.matkaaja.nimimerkki}
          alkupvm={formatedDate(tarina.alkupvm)}
          teksti={tarina.teksti}
        />
      ))}
    </div>
  );
};

export default TarinaLista;
