import React, { useEffect, useState } from 'react';
import TarinaKortti from '../components/MatkakohdeIDSivu/TarinaKortti';

import useAxiosPrivate from '../hooks/useAxiosPrivate';
import formatDate from '../utils/formatedDate';

const KaikkiTarinat = () => {
  const [tarinat, setTarinat] = useState([]);
  const axios = useAxiosPrivate();

  const getTarinat = async () => {
    try {
      const response = await axios.get('/api/tarina/kaikkitarinat');

      setTarinat(response.data.tarinat);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTarinat();
  }, []);

  return (
    <>
      <div className='otsikko'>
        <h1>Porukan Tarinat</h1>
      </div>
      <div className='divlista'>
        {tarinat.map((tarina, index) => (
          <TarinaKortti
            numero={index}
            teksti={tarina.teksti}
            alkupvm={formatDate(tarina.alkupvm)}
            otsikko={tarina.otsikko}
            id={tarina._id}
            key={tarina._id}
            matkaaja={tarina.matkaaja.nimimerkki}
            lukukertoja={tarina.lukukertoja}
            createdAt={formatDate(tarina.createdAt)}
          />
        ))}
      </div>
    </>
  );
};

export default KaikkiTarinat;
