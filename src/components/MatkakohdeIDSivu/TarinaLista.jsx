import './TarinaKortti.css';
import React from 'react';
import TarinaKortti from './TarinaKortti';

const TarinaLista = () => {
  return (
    <div className="divlista">
      <TarinaKortti />
      <TarinaKortti />
      <TarinaKortti />
      <TarinaKortti />
      <TarinaKortti />
    </div>
  );
};

export default TarinaLista;
