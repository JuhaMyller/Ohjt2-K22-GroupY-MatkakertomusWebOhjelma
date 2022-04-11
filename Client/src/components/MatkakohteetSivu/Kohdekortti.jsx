import React from 'react';

import './Kohdekortti.css';

const Kohdekortti = ({ kuva, maa, kohdenimi, id, tarinat }) => {
  return (
    <div className='kohdekortti' style={{ backgroundImage: `url(${kuva})` }}>
      <div className='kohdekortti_kohde_maa'>
        <h1>{kohdenimi}</h1>
        <h4>{maa}</h4>
      </div>
      <div className='kohdekortti_tarinat'>
        <p>Tarinoita: {tarinat.length}</p>
      </div>
    </div>
  );
};

export default Kohdekortti;
