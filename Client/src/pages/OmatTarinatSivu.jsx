import React, { useEffect, useState } from 'react';
import TarinaKortti from '../components/MatkakohdeIDSivu/TarinaKortti';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import formatDate from '../utils/formatedDate';

const OmatTarinatSivu = () => {
  const axios = useAxiosPrivate();
  const [omatTarinat, setOmatTarinat] = useState([]);

  const getOmatTarinat = async () => {
    try {
      const response = await axios.get('/api/tarina/omattarinat');
      setOmatTarinat(response.data.tarinat);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOmatTarinat();
  }, []);
  return (
    <>
      <div className="divlista">
        {omatTarinat.map((tarina, index) => (
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

export default OmatTarinatSivu;
